class Productos {
    constructor() {

        // Este array es mi persistencia de datos ( simula una base de datos )
        this.productos =[]
            
        this.id = 0
   }

   mostrar(id) {
        let prod = this.productos.find(prod => prod.id == id)
        return prod || {error : 'Sin Producto'}
    }

    mostrarTodos() {
        return this.productos.length ? this.productos : {error : 'No hay productos'}
    }

    guardaID(prod) {
        prod.id = ++this.id
        this.productos.push(prod)
    }

    actualizaPro(prod,id) {
        prod.id = Number(id);
        let index = this.productos.findIndex( prod => prod.id == id)
        this.productos.splice(index,1,prod)
    }

    borrar(id) {
        let index = this.productos.findIndex( prod => prod.id == id)
        return this.productos.splice(index,1)
    }

}

export default Productos;