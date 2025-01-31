import React from 'react';

const SortableHeader = ({ label, sortKey, sortConfig, onSort }) => {
    const sortDirection = sortConfig.key === sortKey ? sortConfig.direction : null;
    const sortIcon = sortDirection ? (sortDirection === 'asc' ? '↑' : '↓') : '↕';

    return (
        <th
            onClick={() => onSort(sortKey)}
            style={{ cursor: 'pointer' }}
            aria-label={`Sort by ${label} ${sortDirection || ''}`}
        >
            {label} <span aria-hidden="true">{sortIcon}</span>
        </th>
    );
};

export default SortableHeader;