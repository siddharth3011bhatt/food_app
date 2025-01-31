import { useState } from 'react';

export const usePagination = (items, itemsPerPage) => {
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = Math.ceil(items.length / itemsPerPage);

    const paginatedItems = items.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    return {
        currentPage,
        totalPages,
        paginatedItems,
        nextPage: () => setCurrentPage(p => Math.min(p + 1, totalPages)),
        prevPage: () => setCurrentPage(p => Math.max(p - 1, 1))
    };
};