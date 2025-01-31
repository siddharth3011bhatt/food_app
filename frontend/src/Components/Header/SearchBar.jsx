// components/SearchBar.jsx
import { useState, useEffect } from 'react';
// import { useDishes } from '../contexts/DishContext';

const SearchBar = ({ onSearch, emptySearch }) => {
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        if (emptySearch) {
            setSearchTerm('')
        }
    }, [emptySearch])

    const handleChange = (e) => {
        const value = e.target.value;
        setSearchTerm(value);
        onSearch(value);
    };

    return (
        <input
            type="text"
            className="search-bar"
            value={searchTerm}
            onChange={handleChange}
            placeholder="Search dishes..."
            aria-label="Search dishes"
        />
    );
};

export default SearchBar;