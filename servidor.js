const Contenedor = require("./contenedor")

const express = require('express')

const app = express()

const PORT = 8080

const contenedor = new Contenedor("archivo_desafio.json")

const generateRandomNumber = (min, max) => {
    return Math.floor((Math.random() * (max+1 -min)) +min)
}

app.get('/', (req, res) => {
    res.send('Bienvenido!')
});

app.get('/productos', (req, res) => {
    const allProducts = contenedor.getAll()
    res.json(allProducts)
});

app.get('/productoRandom', async (req, res) => {
    const allProducts = contenedor.getAll()
    const max = allProducts.length
    const randomNumber = generateRandomNumber(1, max);
    const randomProduct = await contenedor.getById(randomNumber)

    res.json(randomProduct)

})

const server = app.listen(PORT, () => console.log(`Servidor HTTP escuchando en el puerto ${PORT}`))

server.on('error', err => console.log(`Error de servidor: ${err}`))