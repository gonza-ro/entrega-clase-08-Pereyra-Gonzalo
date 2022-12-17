const { Router } = require('express')
const router = new Router();
const under = require('underscore');

// llamo a los datos de la base
const productos = require('../productos.json')




//------------------------ GET ----------------------------

router.get('./Api/productos', (req, res) => {  // ...puedo guiar al usuario. O con solo el '/'
    res.json(productos)   // el prod sale por el navegador y puede ser leido por el usuario
    // por convension cuando hacemos una API ---> /api/...nombre o carpeta u objeto, o too un recurso!!!
})


router.get('./Api/productos/:id', (req, res) => {
  res.json(productos.id)  
})


// --------------------------- POST ----------------------
// En cambio las peticiones POST --> sirven para decirle al servidor que 
// queremos almacenar algo
router.post('./Api/productos', (req, res) =>{
    //console.log(req.body);  // datos que la app quiere almacenar. Es decir recibe el server y lo manda a la DB.
    // por ejemplo solo quiero obtener el name, o alguna otra cosa.
    // dentro de las llaves son const, para guardar datos que me llegan.
    const { title, price, Thumbnail } = req.body;

    // Aca podemos hacer validaciones, usando por ej, un IF...---> de los datos recibidos de arriba


    const id = productos.length + 1  // --> a la cantidad de el arreglo,le sumo un ultimo Id.


    if( title && price && Thumbnail ){  // aca compruebo que estan todos los datos
        
        
        const newPro = {...req.body, id}; // creo un obj nuevo para almacenar, el obj.. body, 
        // ademas arriba vamos a sumarle un ID.
    
        productos.push(newPro);
        res.json(productos); // --> aca guardo y devuelvo actualizado el array
    }else {
        //res.send('Peticion Erronea')        // aca incluso podés devolver un JSON..
        // o por ejemplo algun código de estado
        //por ejemplo: 
        res.status(500).json({error: 'Se interrumpio la conexion'})
        // algo salio mal con el pedido de guarda del usuario
    }


    //res.send('Hola gente....llegué')    // --> Y acá el servidor devuelve algo...RECIBIDO
})


//------------------------ PUT -------------------------
router.put('./Api/productos:id', (req, res) =>{           // este metodo sirvve para actualizar un dato
    const { id } = req.params;  //obtengo el Id que estoy recibiendo desde params ( por parametro )
    const { first_name, Last_name, Email } = req.body;   // con esta lines compruebo los datos que quiero actualizar
    if( first_name && Last_name && Email ){                   // aca puedo hacer comprobaciones
        under.each(productos, (pro, i) =>{
            if(pro.id === id){        // a partir de aca actualizo cada uno de los campos
                pro.first_name = first_name;
                pro.Last_name = Last_name;
                pro.Email = Email;
            }
        })
        res.json(productos);
    }else{
        res.status(500).json({error: 'Hubo un error'})
    }
;})            





//---------------------- DELETE --------------------
// en la linea de comandos del mismo se pone(usando el DELETE), 
//http://localhost:5000/api/pro/id --> este ID es el que queres eliminar
// aca le precede, antes del slaye, pro/api/....hasta llegar al id
router.delete('./:id', (req, res) => {
    const {id} = req.params;   // aca defino el ID como variable
    //console.log(req.params);
    under.each(productos, (pro, i) =>{       // el each es un metodo de array de JS, que recorre, el array de productos
        if( pro.id === id ){         // si el ID de la pro, es === al ID que estoy recibiendo
            productos.splice(i, 1);    // splice es un metodo de array, al confirmar el ID, elimino, el 
            // indice (i), y la cantidad de una pro, por eso el (1)
        }
    })
    res.send('Eliminado');
})  


module.exports = router;





