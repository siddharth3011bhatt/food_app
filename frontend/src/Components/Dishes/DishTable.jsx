import React from 'react';
import SortableHeader from './SortableHeader';
import Pagination from './Pagination';

const DishTable = ({ dishes, sortConfig, onRowClick, onSort, onPrevPage, onNextPage, currentPage, totalPages }) => (
    <div className="table-container">
        <table>
            <thead>
                <tr>
                    <SortableHeader
                        label="Name"
                        sortKey="name"
                        sortConfig={sortConfig}
                        onSort={onSort}
                    />
                    <th>Region</th>
                    <th>Diet-Plan</th>
                    <SortableHeader
                        label="Prep-Time"
                        sortKey="prep_time"
                        sortConfig={sortConfig}
                        onSort={onSort}
                    />
                    <SortableHeader
                        label="Cooking-Time"
                        sortKey="cook_time"
                        sortConfig={sortConfig}
                        onSort={onSort}
                    />
                    <th>Flavour</th>
                    <th>Course</th>
                    <th>State</th>
                    <th>Region</th>
                </tr>
            </thead>
            <tbody>
                {dishes.map((dish, index) => (
                    <tr key={index} onClick={() => onRowClick(dish)}>
                        <td>{dish.name}</td>
                        <td>{dish.region === "-1" ? 'NA' : dish.region}</td>
                        <td>{dish.diet}</td>
                        <td>{dish.prep_time === "-1" ? 'NA' : dish.prep_time}</td>
                        <td>{dish.cook_time}</td>
                        <td>{dish.flavor_profile}</td>
                        <td>{dish.course}</td>
                        <td>{dish.state === "-1" ? 'NA' : dish.state}</td>
                        <td>{dish.region === "-1" ? 'NA' : dish.region}</td>
                    </tr>
                ))}
            </tbody>
        </table>

        <Pagination
            onPrev={onPrevPage}
            onNext={onNextPage}
            disablePrev={currentPage === 1}
            disableNext={currentPage >= totalPages}
            currentPage={currentPage}
            totalPages={totalPages}
        />
    </div>
);

export default DishTable;