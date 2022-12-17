
// es como un endpoint para datos externos...1!!
const { Router } = require('express');
const router = new Router();


const fetch = require('node-fetch');

router.get('/', async (req, res) =>{  // aca antes de mandar algo...( res.send('hello') )
    // usamos fetch : 
    const response = await fetch('https://jsonplaceholder.typicode.com/users')  // fetch esta haciendo una peticion a esta direccion que le estoy pasando
    // la linea de arriba, con la variable response, devuelve un string legible. Y lo tenemos que pasar a json:
    const data = await response.json();
    //console.log(users);
    res.json(data);


    // como la peticion que realiza fetch es asincrona, le va a llevar tiempo. Para traer los datos.
    // Aca donde vamos a usar el metodo = async-await
    // res.send('hello users');
});

module.exports = router;



//para consumir desde otra API, vamos a usar el metodo FETCH. 
// Primero lo instalamos...de esta forma: npm install fetch. Con este modulo
// podemos comenzar a usarlo, y hacerle una peticion get,
// post, put o delete...a otros servicios desde nodejs.


// lo que me llevó investigar esto,.....pero cuando arranqué...no pude parar.....esta muy bueno...1!!