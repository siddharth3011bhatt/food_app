import React from "react";
import { useParams } from "react-router-dom";

const DisheDetails = ({ dishes }) => {

    const { dishName } = useParams();
    const currentDish = dishes.find((dish) => dish.name === dishName)

    if (!currentDish || currentDish === undefined || currentDish === null) {
        return (<>Dish Not Found!</>)
    }

    return (
        <>
            <div>
                <h2>{currentDish.name}</h2>
                <p>Region: {currentDish.region}</p>
                <p>Diet: {currentDish.diet}</p>
                <p>Prep Time: {currentDish.prep_time} mins</p>
                <p>Cooking Time: {currentDish.cook_time} mins</p>
                <p>Flavour Profile: {currentDish.flavor_profile}</p>
                <p>Course: {currentDish.course}</p>
                <p>State: {currentDish.state}</p>
            </div>
        </>
    )
}

export default DisheDetails