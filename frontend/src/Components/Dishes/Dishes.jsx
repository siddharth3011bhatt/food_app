import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useFilter } from '../hooks/useFilter';
import { useSort } from '../hooks/useSort';
import { usePagination } from '../hooks/usePagination';
import FilterControls from './FilterControls';
import DishTable from './DishTable';
import { useDishes } from '../DishProvider';
const itemsPerPage = 10;

const Dishes = () => {
    const { dishes } = useDishes();
    const navigate = useNavigate();

    // Get unique values for filters
    const uniqueStates = [...new Set(dishes.map(dish => dish.state))];
    const uniqueFlavors = [...new Set(dishes.map(dish => dish.flavor_profile))];

    // Custom hooks
    const { filters, filteredDishes, setFilters } = useFilter(dishes, {
        diet: '',
        flavor: '',
        state: ''
    });

    const { sortedDishes, sortConfig, setSortConfig } = useSort(filteredDishes);
    const {
        currentPage,
        totalPages,
        paginatedItems: currentDishes,
        nextPage,
        prevPage
    } = usePagination(sortedDishes, itemsPerPage);


    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        setFilters(prev => ({ ...prev, [name]: value }));
    };

    const handleColumnSort = (key) => {
        setSortConfig(prev => ({
            key,
            direction: prev.key === key && prev.direction === 'asc' ? 'desc' : 'asc'
        }));
    };

    const handleRowClick = (dish) => {
        navigate(`/dishdetails/${dish.name}`);
    };

    return (
        <div className="dishes-container">
            <FilterControls
                filters={filters}
                uniqueFlavors={uniqueFlavors}
                uniqueStates={uniqueStates}
                onFilterChange={handleFilterChange}
            />

            <DishTable
                dishes={currentDishes}
                sortConfig={sortConfig}
                onRowClick={handleRowClick}
                onSort={handleColumnSort}
                onPrevPage={prevPage}
                onNextPage={nextPage}
                currentPage={currentPage}
                totalPages={totalPages}
            />
        </div>
    );
};

export default Dishes;