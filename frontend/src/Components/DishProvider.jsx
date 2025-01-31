import React, { useContext, createContext, useState, useEffect } from "react";
import axios from "axios";

const DishContext = createContext();

export const DishProvider = ({ children }) => {
    const [dishes, setDishes] = useState([])
    const [loading, setLoading] = useState(true)

    const fetchDishes = async() => {
        try {
            let response = await axios.get('http://localhost:8000/api/dishes')
            setDishes(response.data)
        } catch (error) {
            console.log('Error while fetching the dishes')
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchDishes();
    }, [])

    return (
        <DishContext.Provider value={{ dishes, loading }}>
            {children}
        </DishContext.Provider>
    )
}


export const useDishes = () => useContext(DishContext);