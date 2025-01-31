import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDishes } from "./DishProvider";

const DishSuggester = () => {
    const { dishes } = useDishes();

    const navigate = useNavigate();
    const [selectedIngre, setSelectedIngre] = useState([])
    const [suggestions, setSuggestions] = useState([])
    const [uniqueIngredients, setUniqueIngredients] = useState([])

    useEffect(() => {
        const ingredientSet = new Set();
        const ingredients = [];
        dishes.forEach(dish => {
            dish.ingredients.split(", ").forEach(ing => {
                const normalized = ing.trim().toLowerCase();
                if (!ingredientSet.has(normalized)) {
                    ingredientSet.add(normalized);
                    ingredients.push(ing.trim());
                }
            });
        });
        setUniqueIngredients(ingredients)
    }, [dishes])

    const handleIngreSelect = (ingredient, isChecked) => {
        const normalized = ingredient.toLowerCase();
        setSelectedIngre(prev =>
            isChecked
                ? [...prev, normalized]
                : prev.filter(ing => ing !== normalized)
        );
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

            <h3>Select available ingredients: </h3>
            {uniqueIngredients.length > 0 && uniqueIngredients.map((ingredient) => (
                <div key={ingredient} className="dish-ingredients">
                    <input
                        type="checkbox"
                        id={ingredient}
                        checked={selectedIngre.includes(ingredient.toLowerCase())}
                        onChange={(e) => handleIngreSelect(ingredient, e.target.checked)}
                    />
                    <label>{ingredient}</label>
                </div>
            ))}
        </>
    )
}

export default DishSuggester