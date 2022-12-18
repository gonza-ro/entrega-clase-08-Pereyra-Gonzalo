const express = require('express');
const Productos = require('./Api/productos.js');

let productos = new Productos()

// ------------ Settings --------------

const PORT = 8080

app.set('port', process.env.PORT || 8080);


//--------------- Starting Server ---------------
const server = app.listen(PORT, () => {
    console.log(`Servidor http en puerto ${server.address().PORT}`)
})
server.on("error", error => console.log(`Error en servidor ${error}`))


//------------- Middleware -----------
app.use(express.static('public'))  
// me permite cargar archivos y contenido desde el diresctorios public

app.use(express.json())   // con esto a mi server le estoy permitiendo recibir y entender formatos JSON 
 
app.use(express.urlencoded({extended: true}))     // con esto podemos entender y recibir datos desde un formulario, proveniente de una page html

const router = express.Router(); 
// router de express.Ayuda a crear manejadores de rutas encadenables



//------------------- Rutas --------------------
app.use( '/Api', router);
app.use(require('./Api/productos.js'));



//----------------- Peticiones ----------------

//-- GET --
router.get('/Api/productos/mostrar', (req,res) => {
    res.json(productos.mostrarTodos())
})

router.get('./Api/productos/mostrar/:id', (req,res) => {
    let { id } = req.params
    res.json(productos.mostrar(id))
})


//-- POST --
router.post('./Api/productos/guardarID', (req,res) => {
    let producto = req.body
    producto.guardarID(producto)
    res.json(producto)
})


//-- PUT --
router.put('./Api/productos/actualizarPro/:id', (req,res) => {
    let { id } = req.params
    let producto = req.body;
    producto.actualizarPro(producto,id)
    res.json(producto)
})


//-- DELETE --
router.delete('/productos/borrar/:id', (req,res) => {
    let { id } = req.params
    let producto = productos.borrar(id)
    res.json(producto)
})


