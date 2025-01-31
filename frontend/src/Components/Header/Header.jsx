import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useDishes } from "../DishProvider";
// import { DishContext } from "./DishProvider";
import SearchBar from "./SearchBar";
import SuggestionsList from "./SuggestionsList";

const Header = () => {
    const { dishes } = useDishes();
    const navigate = useNavigate();
    const [inputDish, setInputDish] = useState("");
    const [suggestions, setSuggestions] = useState([]);
    const [emptySearch, setEmptySearch] = useState(false)
    const navigateHomePage = () => {
        // setInputDish("");
        navigate("/");
    };

    const navigateDishSuggestion = () => {
        // setInputDish("");
        navigate("/suggestions");
    };

    const searchDish = (suggestion) => {
        // const suggestion = e.target.value;
        // setInputDish(suggestion);

        if (suggestion === "") {
            setSuggestions([]);
        } else {
            const filteredDishes = dishes.filter(
                (dish) =>
                    dish.name.toLowerCase().includes(suggestion.toLowerCase()) ||
                    dish.ingredients.toLowerCase().includes(suggestion.toLowerCase()) ||
                    dish.region.toLowerCase().includes(suggestion.toLowerCase()) ||
                    dish.state.toLowerCase().includes(suggestion.toLowerCase())
            );
            setSuggestions(filteredDishes);
        }
    };

    const handleSuggestionClick = (dish) => {
        setSuggestions([]);
        setEmptySearch(true)
        navigate(`/dishdetails/${dish.name}`);
    };

    return (
        <header className="header">
            <div className="nav-item" onClick={navigateHomePage}>
                Home
            </div>
            <div className="nav-item" onClick={navigateDishSuggestion}>
                Dish Suggestions
            </div>

            <div className="search-bar-container">
                <SearchBar onSearch={searchDish} emptySearch={emptySearch}/>
                {suggestions.length > 0 && (
                    <SuggestionsList
                        suggestions={suggestions}
                        onSelect={handleSuggestionClick}
                    />
                )}

            </div>
            {/* <div className="search-bar-container">
                <input
                    className="search-bar"
                    value={inputDish}
                    onChange={(e) => searchDish(e)}
                    placeholder="Search dishes..."
                />
                {suggestions.length > 0 && (
                    <ul className="suggestions-list">
                        {suggestions.map((dish, index) => (
                            <li
                                key={index}
                                className="suggestion-item"
                                onClick={() => handleSuggestionClick(dish)}
                            >
                                {dish.name}
                            </li>
                        ))}
                    </ul>
                )}
            </div> */}
        </header>
    );
};

export default Header;
