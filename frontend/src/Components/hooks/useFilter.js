import { useEffect, useState } from 'react';

export const useFilter = (dishes, initialFilters) => {
    const [filters, setFilters] = useState(initialFilters);
    const [filteredDishes, setFilteredDishes] = useState(dishes);

    useEffect(() => {
        const newFilteredDishes = dishes.filter(dish => (
            dish.diet.includes(filters.diet) &&
            dish.flavor_profile.includes(filters.flavor) &&
            dish.state.includes(filters.state)
        ));
        setFilteredDishes(newFilteredDishes);
    }, [filters, dishes]);

    return { filters, filteredDishes, setFilters };
};