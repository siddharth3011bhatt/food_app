import { useState, useMemo } from 'react';

export const useSort = (dishes) => {
    const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' });

    const sortedDishes = useMemo(() => {
        if (!sortConfig.key) return dishes;

        return [...dishes].sort((a, b) => {
            const aValue = isNaN(Number(a[sortConfig.key])) ? a[sortConfig.key] : Number(a[sortConfig.key]);
            const bValue = isNaN(Number(b[sortConfig.key])) ? b[sortConfig.key] : Number(b[sortConfig.key]);

            if (aValue < bValue) return sortConfig.direction === 'asc' ? -1 : 1;
            if (aValue > bValue) return sortConfig.direction === 'asc' ? 1 : -1;
            return 0;
        });
    }, [dishes, sortConfig]);

    return { sortedDishes, sortConfig, setSortConfig };
};