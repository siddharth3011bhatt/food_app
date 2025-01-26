const express = require("express");
const router = express.Router();
const { getAllDishes, getSuggestions } = require("../services/dishServices");

router.get('/', (req, res) => {
    // res.send("Hello from server")
    const dishes = getAllDishes()
    res.json(dishes)
})

router.post('/suggestions', (req, res) => {
    const { selectedIngre } = req.body
    if (!selectedIngre || !Array.isArray(selectedIngre)) {
        return res.status(400).json({ error: "Invalid input!" })
    }

    const suggestions = getSuggestions(selectedIngre)
    res.send(suggestions)
})

module.exports = router;