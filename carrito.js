class carrito {
    constructor() {
        this.carrito = [];
        this.id = 0;
    }

    crearCarrito() {
        this.id += 1;
        this.carrito.push({ id: this.id, timestamp: Date.now(), productos: [] });
        return this.id;
    }

    eliminarCarrito(id) {
        const carritoId = this.carrito.find(carrito => carrito.id === parseInt(id));
        this.carrito.splice(this.carrito.indexOf(carritoId), 1);
    }

    listarCarrito(id) {
        const carritoId = this.carrito.find(carrito => carrito.id === parseInt(id));
        return carritoId;
    }

    agregarProducto(id, producto) {
        const carritoId = this.carrito.find(carrito => carrito.id === parseInt(id));
        carritoId.productos.push(producto);
    }

    eliminarProducto(id, producto) {
        const carritoId = this.carrito.find(carrito => carrito.id === parseInt(id));
        carritoId.productos.splice(carritoId.productos.indexOf(producto), 1);
    }

}

module.exports = carrito;