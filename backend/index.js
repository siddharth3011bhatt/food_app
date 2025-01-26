const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")
const dishesRoute = require("./routes/dishes")

const app = express()
const PORT = 8000

app.use(cors());

app.use(bodyParser.json())

app.use("/api/dishes", dishesRoute)

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})