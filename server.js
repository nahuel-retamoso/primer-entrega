const express = require('express');
const { Router } = express
const ProductosApi = require('./producto.js')
const CarritoApi = require('./carrito.js')

const productosApi = new ProductosApi(true)
const carritoApi = new CarritoApi()

const productosRouter = new Router()
const carritoRouter = new Router()

productosRouter.use(express.json())
productosRouter.use(express.urlencoded({ extended: true }))

carritoRouter.use(express.json())
carritoRouter.use(express.urlencoded({ extended: true }))

const app = express()
app.use(express.static('public'))
app.use('/api/productos', productosRouter)
app.use('/api/carrito', carritoRouter)

productosRouter.get('/:id', (req, res) => {
    res.json(productosApi.listar(req.params.id))
}   )

productosRouter.post('/', (req, res) => {
    res.json(productosApi.guardar(req.body))
}   )

productosRouter.put('/:id', (req, res) => {
    res.json(productosApi.actualizar(req.body, req.params.id))
}   )

productosRouter.delete('/:id', (req, res) => {
    res.json(productosApi.borrar(req.params.id))
}   )

carritoRouter.post('/', (req, res) => {
    res.json(carritoApi.crearCarrito())
}   )

carritoRouter.delete('/:id', (req, res) => {
    res.json(carritoApi.borrarCarrito(req.params.id))
}   )

carritoRouter.get('/:id/productos', (req, res) => {
    res.json(carritoApi.listarCarrito(req.params.id))
}   )

carritoRouter.post('/:id/productos', (req, res) => {
    res.json(carritoApi.agregarProducto(req.params.id, req.body))
}   )

carritoRouter.delete('/:id/productos/:id_prod', (req, res) => {
    res.json(carritoApi.borrarProducto(req.params.id, req.params.id_prod))
}   )