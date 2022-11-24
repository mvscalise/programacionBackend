const express = require('express')

const productosRouter = require('./productosRouter')

const app = express()

app.use('/productos', productosRouter)

const PORT = 8080

app.use(express.json())
app.use(express.urlencoded({ extended: true }))



const server = app.listen(PORT, () => console.log(`Servidor HTTP esta escuchando en el puerto ${PORT}`))

server.on('error', err => console.log(`Error en servidor: ${err}`))