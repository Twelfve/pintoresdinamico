//Importamos los paquetes que requerimos
const express = require('express');
const hbs = require('hbs');

//Creamos la aplicacion
const app = express();

//Definimos el motor de plantillas
app.set('view engine', 'hbs');

app.use(express.static(__dirname + '/public'));

//Arrancamos el servidor web
app.listen(3000, ()=>{
    console.log('Escuchando el puerto 3000')
})