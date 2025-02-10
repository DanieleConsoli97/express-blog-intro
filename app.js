
const posts = [
    {
        titolo: "Ciambellone",
        contenuto: "Un classico dolce da colazione, soffice e profumato, perfetto per iniziare la giornata.",
        immagine: "images/ciambellone.jpeg",
        tags: ["dolci", "colazione", "ricetta_facile"]
    },
    {
        titolo: "Cracker alla barbabietola",
        contenuto: "Cracker croccanti e colorati, realizzati con barbabietola, ideali per uno snack salutare.",
        immagine: "/images/cracker_barbabietola.jpeg",
        tags: ["snack", "salutare", "barbabietola"]
    },
    {
        titolo: "Pane fritto dolce",
        contenuto: "Una delizia fritta, morbida dentro e croccante fuori, da gustare come dessert.",
        immagine: "/images/pane_fritto_dolce.jpeg",
        tags: ["dolci", "fritto", "dessert"]
    },
    {
        titolo: "Pasta alla barbabietola",
        contenuto: "Un primo piatto originale e colorato, con una cremosa salsa a base di barbabietola.",
        immagine: "/images/pasta_barbabietola.jpeg",
        tags: ["primo_piatto", "barbabietola", "pasta"]
    },
    {
        titolo: "Torta paesana",
        contenuto: "Una torta rustica e golosa, tipica della tradizione contadina, con ingredienti semplici.",
        immagine: "/images/torta_paesana.jpeg",
        tags: ["dolci", "tradizione", "ricetta_facile"]
    }
];

//NOTE - importiamo express da node_module
const express = require('express')
const app = express()
//NOTE - porta 3000
const port = 3000
app.use(express.static("public"))
//NOTE - rotta principale
app.get('/', (req, res) => {
//NOTE - risposta
res.send('Hello Worldw')
})
app.get('/api/bacheca', (req, res) => {
    res.json(posts)
    })
app.listen(port, () => {
console.log(`Example app listening on port ${port}`)
})