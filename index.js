const express = require("express")
const { url } = require("inspector")
const path = require("path")
const app = express()
const port = process.env.PORT || 3000

app.set("view engine", "ejs")
app.use(express.static(path.join(__dirname, "public")))
app.use(express.urlencoded())

var pokedex = [
    {
        number: 1,
        poke: "Bulbasaur",
        type: ["Grass", "Poison"],
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png",
        alt: "Bulbasaur"
    },
    {
        number: 2,
        poke: "Ivysaur",
        type: ["Grass", "Poison"],
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/002.png",
        alt: "Ivysaur"
    },
    {
        number: 3,
        poke: "Venusaur",
        type: ["Grass", "Poison"],
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/003.png",
        alt: "Venusaur"
    }
]

app.get("/", (req, res) => {
    res.render("index", { pokedex })
})

app.get("/new", (req, res) => {
    res.render("new")
})

app.get("/details", (req, res) => {
    res.render("details")
})

app.post("/submit", (req, res) => {
    // let pokePush = { number: req.body.number, name: req.body.name,  }
    // var { number, poke, type, image, description, height, weight, category, skill } = req.body
    // number = req.body.number
    // poke = req.body.poke
    // type = req.body.type
    // image = req.body.image
    // description = req.body.description
    // height = req.body.height
    // weight = req.body.weight
    // category = req.body.category
    // skill = req.body.skill
    pokePush = {
        number: req.body.number,
        poke: req.body.poke,
        type: req.body.type,
        image: req.body.image,
        description: req.body.description,
        height: req.body.height,
        weight: req.body.weight,
        category: req.body.category,
        skill: req.body.skill
    }
    pokedex.push(pokePush)
    res.redirect("/")
})

app.listen(port, () => console.log(`Servidor rodando em http://localhost:${port}`))