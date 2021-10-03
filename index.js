const express = require("express")
const path = require("path")
const app = express()
const port = process.env.PORT || 3000

app.set("view engine", "ejs")
app.set('views', __dirname + '/views');
app.use(express.static(path.join(__dirname, "public")))
app.use(express.urlencoded())

var pokedex = [
    {
        number: 001,
        poke: "Bulbasaur",
        type1: "Grass",
        type2: "Poison",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png",
        alt: "Draw of Bulbasaur: There is a plant seed on its back right from the day this Pokémon is born. The seed slowly grows larger.",
        description: "There is a plant seed on its back right from the day this Pokémon is born. The seed slowly grows larger.",
        height: 0.7,
        weight: 6.9,
        category: "Seed",
        abilities: "Overgrow"
    },
    {
        number: 002,
        poke: "Ivysaur",
        type1: "Grass",
        type2: "Poison",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/002.png",
        alt: "Drawing of Ivysaur: When the bulb on its back grows large, it appears to lose the ability to stand on its hind legs.",
        description: "When the bulb on its back grows large, it appears to lose the ability to stand on its hind legs.",
        height: 1,
        weight: 13,
        category: "Seed",
        abilities: "Overgrow"
    },
    {
        number: 003,
        poke: "Venusaur",
        type1: "Grass",
        type2: "Poison",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/003.png",
        alt: "Drawing of Venusaur: Its plant blooms when it is absorbing solar energy. It stays on the move to seek sunlight.",
        description: "Its plant blooms when it is absorbing solar energy. It stays on the move to seek sunlight.",
        height: 2,
        weight: 100,
        category: "Seed",
        abilities: "Overgrow"
    }
]

app.get("/", (req, res) => {
    res.render("index", { pokedex })
})

app.get("/new", (req, res) => {
    res.render("new")
})

app.get("/details/:pokeIndex", (req, res) => {
    const pokeNumber = req.params.pokeIndex
    const pokemons = pokedex[pokeNumber]
    res.render("details", { details: pokemons })
})

app.post("/submit", (req, res) => {

    pokePush = {
        number: req.body.number,
        poke: req.body.poke,
        type1: req.body.type1,
        type2: req.body.type2,
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