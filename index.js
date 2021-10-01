const express = require("express")
const path = require("path")
const app = express()
const port = process.env.PORT || 3000

app.set("view engine", "ejs")
app.use(express.static(path.join(__dirname, "public")))
app.use(express.urlencoded())

var pokedex = [
    {
        number: 0,
        poke: "Bulbasaur"
    }
]

app.get("/", (req, res) => {
    res.render("index", { pokedex })
})

// app.get("/new", (req, res) => {
//     res.render("new")
// })

// app.post("/submit", (req, res) => {
//     const { number, poke, type, image, description, height, weight, category, skill } = req.body
//     let pokeNew = { number, poke, type, image, description, height, weight, category, skill }
//     pokedex.push(pokeNew)
// })

app.listen(port, () => console.log(`Servidor rodando em http://localhost:${port}`))