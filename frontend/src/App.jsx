import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Dishes from "./Components/Dishes";
import DisheDetails from "./Components/DishDetails";
import axios from "axios";
import DishSuggester from './Components/DishSuggester'

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
      <Router>
        <Header dishes={dishes} />
        <Routes>
          <Route path="/" element={<Dishes dishes={dishes} />}></Route>
          <Route path="/dishdetails/:dishName" element={<DisheDetails dishes={dishes} />} />
          <Route path="/suggestions" element={<DishSuggester dishes={dishes} />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
