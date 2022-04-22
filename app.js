require('dotenv').config();
const express = require('express');
const app = express();

const port = process.env.PORT;
const hbs = require('hbs');

//partials registred
hbs.registerPartials(__dirname + '/views/partials');

//cargando motor de plantillas
app.set('view engine', 'hbs');

//middleware static content
app.use( express.static('public') );

app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'Frank Campo',
        title: 'Nodejs powered'
    });
});

app.get('/generic', (req, res) => {
    res.render('generic', {
        nombre: 'Frank Campo',
        title: 'Nodejs powered'
    });
});

app.get('/elements', (req, res) => {
    res.render('elements', {
        nombre: 'Frank Campo',
        title: 'Nodejs powered'
    });
});

app.get('*', (req, res) => {
    res.sendFile(__dirname + '/public/404.html');
});

app.listen(port);