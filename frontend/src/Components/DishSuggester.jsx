import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const DishSuggester = ({ dishes }) => {
    const navigate = useNavigate();
    const [selectedIngre, setSelectedIngre] = useState([])
    const [suggestions, setSuggestions] = useState([])

    const handleIngreSelect = (ingredients) => {
        setSelectedIngre([...selectedIngre, ...ingredients.split(", ").map(ing => ing.trim())]);
    }


    const fetchSuggestedDishes = async () => {
        try {
            let response = await axios.post('http://localhost:8000/api/dishes/suggestions', {
                selectedIngre
            })
            if (response.status === 200) {
                setSuggestions(response.data)
            }

        } catch (error) {
            console.log('Error fetching the dishes', error)
        }
    };

    const navigateToDetails = (dish) => {
        navigate(`/dishdetails/${dish.name}`);
    }


    return (
        <>
            <div className="util-button">
                <button disabled={selectedIngre.length === 0} onClick={fetchSuggestedDishes}>Search Dishes</button>
                <button onClick={() => { setSuggestions([]); setSelectedIngre([]) }}>Reset</button>
            </div>

            {suggestions.length > 0 ? (
                <>
                    <h3>Dishes that can be made from selected ingredients:</h3>
                    {suggestions.map((dish, index) => (
                        <p key={index} onClick={() => navigateToDetails(dish)}>
                            {dish.name}
                        </p>
                    ))}

                </>
            ) : (
                ""
            )}

            <h3>Ingredient List: </h3>

            {dishes.map((dish, index) => (
                <div
                    className="dish-ingredients"
                    key={index}
                    onClick={() => handleIngreSelect(dish.ingredients)}>
                    {dish.ingredients}
                </div>
            ))}
        </>
    )
}

export default DishSuggester