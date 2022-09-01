class producto {
    	constructor(administrador) {

            this.productos = []
            this.administrador = administrador
            this.id = 0
        }

        listar(id) {
                const productId = this.productos.find(product => product.id === parseInt(id))
                return productId
            }
        
            listarAll() {
                return this.productos
            }
        
            guardar(prod) {
                if(this.administrador){
                        this.id += 1
                        const newProduct = {
                        id: this.id,
                        timestamp: Date.now(),
                        nombre: prod.nombre,
                        descripcion: prod.descripcion,
                        codigo: prod.codigo,
                        foto: prod.foto,
                        precio: prod.precio,
                        stock: prod.stock
                        }
                        this.productos.push(newProduct)
                        return newProduct
                }else{
                    return "No tiene permisos para realizar esta acción"
                }
        
            }
        
            actualizar(prod, id) {
                if(this.administrador){
                        const newProduct = {
                        id: parseInt(id),
                        nombre: prod.nombre,
                        precio: prod.precio,
                        url: prod.imagenURL
                        }
                        this.borrar(id)
                        this.productos.push(newProduct)
                }else{
                    return "No tiene permisos para realizar esta acción"
                }
            }
        
            borrar(id) {
                if(this.administrador){
                        const productId = this.productos.find(product => product.id === parseInt(id))
                        this.productos.splice(this.productos.indexOf(productId), 1)
                }else{
                        return "No tiene permisos para realizar esta acción"
                }
            }
}

module.exports = producto;