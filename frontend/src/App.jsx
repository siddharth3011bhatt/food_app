import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import Dishes from "./Components/Dishes/Dishes";
import DisheDetails from "./Components/DishDetails";
import axios from "axios";
import DishSuggester from './Components/DishSuggester'
import { DishProvider } from "./Components/DishProvider";

function App() {
  const [dishes, setDishes] = useState([])

  const fetchDishes = () => {
    axios.get('http://localhost:8000/api/dishes')
      .then((response) => {
        setDishes(response.data)
      })
      .catch((error) => console.log('Error while fetching =>', error))
  }

  useEffect(() => {
    fetchDishes()
  }, [])

  return (
    <>
      <DishProvider>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Dishes />}></Route>
            <Route path="/dishdetails/:dishName" element={<DisheDetails />} />
            <Route path="/suggestions" element={<DishSuggester />} />
          </Routes>
        </Router>
      </DishProvider>
    </>
  );
}

export default App;
