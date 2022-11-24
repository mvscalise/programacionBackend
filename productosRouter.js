const express = require('express')
const Contenedor = require("./contenedor")
const { Router } = express

const productosRouter = new Router()

const contenedor = new Contenedor("archivo_desafio.json")


productosRouter.get('/', (req, res) => {
    const allProducts = contenedor.getAll()
    return res.json(allProducts)
});

productosRouter.get('/:id', async (req, res) => {
    const {id} = req.params
    const product = await contenedor.getById(id)
   
    product
        ? res.json(product) 
        : res.status(404).json({error: "Producto no encontrado"}); 

})

productosRouter.post('/', (req, res) =>{
    const {body} = req
    const newProduct = contenedor.save(body)

    return res.send(`Producto agregado correctamente: ${newProduct}`)
})

module.exports = productosRouter