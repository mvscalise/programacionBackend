const express = require('express')
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const productosRouter = require('./productosRouter')

app.use('/api/productos', productosRouter)

const PORT = 8080

const server = app.listen(PORT, () => console.log(`Servidor HTTP esta escuchando en el puerto ${PORT}`))

server.on('error', err => console.log(`Error en servidor: ${err}`))