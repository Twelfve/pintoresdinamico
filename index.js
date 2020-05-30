//Importamos los paquetes que requerimos
const express = require('express');
const hbs = require('hbs');

//Creamos la aplicacion
const app = express();

//Definimos el motor de plantillas
app.set('view engine', 'hbs');

//Vamos a generar los partials
hbs.registerPartials(__dirname + '/views/partials');

//Generamos el sitio estatico
app.use(express.static(__dirname + '/public'));

//Configurar rutas
app.get('/', (req, res)=>{
    res.render('index');
})

app.get('/dali', (req, res)=>{
    res.render('dali');
})

//Arrancamos el servidor web
app.listen(3000, ()=>{
    console.log('Escuchando el puerto 3000')
})