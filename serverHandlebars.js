const express = require('express')
const app = express()

app.use('/public', express.static('public'))

const PORT = 8080

const server = app.listen(PORT, () => console.log(`Servidor HTTP esta escuchando en el puerto ${PORT}`))

server.on('error', err => console.log(`Error en servidor: ${err}`))