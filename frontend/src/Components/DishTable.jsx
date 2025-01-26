import React, { useState } from "react";
const itemsPerPage = 10

const DishTable = ({ dishes, onNextPage, onPrevPage, disableNext, disablePrev, handleRowClick, handleColumnSort }) => {        
    return (
        <div className="table-container">
            <h2>Available Dishes</h2>
            <table>
                <thead>
                    <tr>
                        <th onClick={() => handleColumnSort('name')}>Name</th>
                        <th>Region</th>
                        <th>Diet-Plan</th>
                        <th onClick={() => handleColumnSort('prep_time')}>Prep-Time</th>
                        <th onClick={() => handleColumnSort('cook_time')}>Cooking-Time</th>
                        <th>Flavour</th>
                        <th>Course</th>
                        <th>State</th>
                        <th>Region</th>
                    </tr>
                </thead>
                <tbody>
                    {dishes.map((dish, index) => (
                        <tr key={index} onClick={() => handleRowClick(dish)}>
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
            <div className="pagination">
                <button onClick={onPrevPage} disabled={disablePrev}>
                    Previous Page
                </button>
                <button onClick={onNextPage} disabled={disableNext}>
                    Next Page
                </button>
            </div>
        </div>
    );
};

export default DishTable;
