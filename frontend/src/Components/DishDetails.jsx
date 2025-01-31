import React from "react";
import { useParams } from "react-router-dom";
import { useDishes } from "./DishProvider";

const DisheDetails = () => {
    const { dishes } = useDishes();
    const { dishName } = useParams();
    const currentDish = dishes.find((dish) => dish.name === dishName)

    if (!currentDish) {
        return <div className="not-found">Dish Not Found!</div>;
    }

    return (
        <div className="dish-details-container">
            <div className="dish-card">
                <h2 className="dish-title">{currentDish.name}</h2>
                <div className="dish-info">
                    <p>{currentDish.name} can be prepared using <span>{currentDish.ingredients}</span> ingredients!</p>
                    <p><span>Region:</span> {currentDish.region}</p>
                    <p><span>Diet:</span> {currentDish.diet}</p>
                    <p><span>Prep Time:</span> {currentDish.prep_time} mins</p>
                    <p><span>Cooking Time:</span> {currentDish.cook_time} mins</p>
                    <p><span>Flavour Profile:</span> {currentDish.flavor_profile}</p>
                    <p><span>Course:</span> {currentDish.course}</p>
                    <p><span>State:</span> {currentDish.state}</p>
                </div>
            </div>
        </div>
    )
}

export default DisheDetails