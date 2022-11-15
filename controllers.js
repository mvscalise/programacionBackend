const Contenedor = require('./contenedor')

const productosControlers = (req, res) => {
    return res.send( 'productos')
}

const randomControllers = (req, res) => {
    return res.send( 'random')
}

module.exports = {
    productosControlers,
    randomControllers
}