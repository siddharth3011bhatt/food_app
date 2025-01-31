const csvParser = require("csv-parser");
const fs = require("fs");

let dishes = [];

// Load dishes from CSV
fs.createReadStream("./assests/indian_food.csv")
    .pipe(csvParser())
    .on("data", (row) => {
        dishes.push(row);
    })
    .on("end", () => {
        console.log("Dishes successfully extracted from CSV file.");
    });

const getAllDishes = () => {
    return dishes;
};

const getSuggestions = (selectedIngre) => {
    return dishes.filter((dish) =>
        dish.ingredients.toLowerCase().split(", ").every((ingredient) =>
            selectedIngre.includes(ingredient.trim())
        )
    );
}

module.exports = { getAllDishes, getSuggestions }