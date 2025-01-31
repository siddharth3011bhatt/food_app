// components/SuggestionsList.jsx
const SuggestionsList = ({ suggestions, onSelect }) => {
    return (
        <ul className="suggestions-list" role="listbox">
            {suggestions.map((dish) => (
                <li
                    key={dish.name}
                    className="suggestion-item"
                    onClick={() => onSelect(dish)}
                    role="option"
                    tabIndex={0}
                >
                    {dish.name}
                </li>
            ))}
        </ul>
    );
};

export default SuggestionsList;