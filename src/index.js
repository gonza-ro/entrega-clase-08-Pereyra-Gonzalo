const express = require('express');
const app = express();

// ------------ Settings --------------
app.set('port', process.env.PORT || 8080);



//------------- Middleware -----------
app.use(express.json())   // con esto a mi server le estoy permitiendo recibir y entender formatos JSON 
// con todo esto ya estamos preparado para soportar los datos que vamos a recibir en el servidor. 
app.use(express.urlencoded({extended: false}))     // con esto podemos entender y recibir datos desde un formulario, proveniente de una page html



//------------------- Rutas --------------------
app.use(require('/Api'));   // requiero /Api

//Aca puedo determinar que entren si o si a la API/productos --> así = '/Api/productos'
app.use( '/Api/' ,require('/Api/productos'));



//--------------- Starting Server ---------------
app.listen(app.get('port'), () =>{
    console.log(`Server en puerto:  ${app.get(port)}`)
})