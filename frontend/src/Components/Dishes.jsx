import React, { useState, useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import DishTable from "./DishTable";

const itemsPerPage = 10;

const Dishes = ({ dishes }) => {
    const navigate = useNavigate();
    const [currentPage, setCurrentPage] = useState(1);
    const [filteredDishes, setFilteredDishes] = useState(dishes);
    const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });
    const [filters, setFilters] = useState({
        diet: "",
        flavor: "",
        state: "",
    });

    // Apply filtering logic
    useEffect(() => {
        const newFilteredDishes = dishes.filter((dish) => {
            return (
                (dish.diet.includes(filters.diet)) &&
                (dish.flavor_profile.includes(filters.flavor)) &&
                (dish.state.includes(filters.state))
            );
        });

        setFilteredDishes(newFilteredDishes);
        setCurrentPage(1); // Reset to the first page after filtering
    }, [filters, dishes]);

    // Apply sorting logic
    const sortedDishes = useMemo(() => {
        if (!sortConfig.key) return filteredDishes;

        return [...filteredDishes].sort((a, b) => {
            const aValue = a[sortConfig.key];
            const bValue = b[sortConfig.key];

            const aVal = isNaN(Number(aValue)) ? aValue : Number(aValue);
            const bVal = isNaN(Number(bValue)) ? bValue : Number(bValue);

            if (aVal < bVal) return sortConfig.direction === "asc" ? -1 : 1;
            if (aVal > bVal) return sortConfig.direction === "asc" ? 1 : -1;
            return 0;
        });
    }, [sortConfig, filteredDishes]);

    // Pagination logic
    const totalPages = Math.ceil(sortedDishes.length / itemsPerPage);
    const currentDishes = sortedDishes.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    const handleRowClick = (dish) => {
        navigate(`/dishdetails/${dish.name}`);
    };

    const handleColumnSort = (selectedKey) => {
        setSortConfig((prevConfig) => ({
            key: selectedKey,
            direction: prevConfig.key === selectedKey && prevConfig.direction === "asc" ? "desc" : "asc",
        }));
    };

    const showPrevDishes = () => {
        if (currentPage > 1) setCurrentPage(currentPage - 1);
    };

    const showNextDishes = () => {
        if (currentPage < totalPages) setCurrentPage(currentPage + 1);
    };

    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        setFilters((prevFilters) => ({
            ...prevFilters,
            [name]: value,
        }));
    };

    return (
        <>
            <div className="filters">
                <label>
                    Diet:
                    <select name="diet" value={filters.diet} onChange={handleFilterChange}>
                        <option value="">All</option>
                        <option value="vegetarian">Vegetarian</option>
                        <option value="non vegetarian">Non-Vegetarian</option>
                    </select>
                </label>
                <label>
                    Flavor:
                    <select name="flavor" value={filters.flavor} onChange={handleFilterChange}>
                        <option value="">All</option>
                        <option value="sweet">Sweet</option>
                        <option value="spicy">Spicy</option>
                        <option value="sour">Sour</option>
                    </select>
                </label>
                <label>
                    State:
                    <select name="state" value={filters.state} onChange={handleFilterChange}>
                        <option value="">All</option>
                        <option value="Odisha">Odisha</option>
                        <option value="Punjab">Punjab</option>
                        <option value="Tamil Nadu">Tamil Nadu</option>
                    </select>
                </label>
            </div>
            <DishTable
                dishes={currentDishes}
                handleRowClick={handleRowClick}
                handleColumnSort={handleColumnSort}
                onNextPage={showNextDishes}
                onPrevPage={showPrevDishes}
                disableNext={currentPage >= totalPages}
                disablePrev={currentPage === 1}
            />
        </>
    );
};

export default Dishes;
