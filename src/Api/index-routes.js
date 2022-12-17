const { Router } = require('express')  // requiero router, pero es express quien me lo trae.

// Router es para generar nuevas rutas desde el server.
const router = new Router() // ----> y es router, el que me permite crear nuevsa rutas

//---------------- Routes ---------------------
// Aca desde mi applicacion, con el metodo get, cuando visiten la ruta inicial de mi aplicacion = ('/'),

//app.get('/', (req, res) =>{
   
router.get('/', (req, res) =>{    // si pongo '/test' --> en el buscador para que aparezca el objeto ---> '/test'
    const data = {
        'name': 'Gonzalo',
        'age': '47',
        'address': 'St. Thomas West View 12450'
    };
    res.json(data)   // con el metodo json = convierte en json. Entre los parentesis, 
    //puedo devolver algo. En este caso --> data
});









// ahora para permitir exportarlo y usarlo para ccrear otras rutas desde otros archivos, lo exporto

module.exports = router;

// con la peticion GET = estoy pidiendo algo...