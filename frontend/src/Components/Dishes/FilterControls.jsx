import React from 'react';

const FilterControls = ({ filters, uniqueFlavors, uniqueStates, onFilterChange }) => (
    <div className="filters">
        <label>
            Diet:
            <select name="diet" value={filters.diet} onChange={onFilterChange}>
                <option value="">All</option>
                <option value="vegetarian">Vegetarian</option>
                <option value="non vegetarian">Non-Vegetarian</option>
            </select>
        </label>

        <label>
            Flavor:
            <select name="flavor" value={filters.flavor} onChange={onFilterChange}>
                <option value="">All</option>
                {uniqueFlavors.map((flavor, index) => (
                    <option key={index} value={flavor}>{flavor}</option>
                ))}
            </select>
        </label>

        <label>
            State:
            <select name="state" value={filters.state} onChange={onFilterChange}>
                <option value="">All</option>
                {uniqueStates.map((state, index) => (
                    <option key={index} value={state}>{state}</option>
                ))}
            </select>
        </label>
    </div>
);

export default FilterControls;