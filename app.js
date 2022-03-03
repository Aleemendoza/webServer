const express = require('express');
var hbs = require('hbs');
const app = express();
require('dotenv').config()

const port = process.env.PORT;
// Handlebars 
app.set('view engine', 'hbs');

app.use(express.static('public/template'))

hbs.registerPartials(__dirname + '/views/partials');

app.get('/', (req, res) => {
  res.render('home', {
    nombre: 'Ale Mendoza',
    titulo: 'Experto Node'
  });
})

app.get('/generic', (req, res) => {
  res.render('generic', {
    nombre: 'Ale Mendoza',
    titulo: 'Experto Node'
  });
})

// app.get('/home', (req, res) => {
//   res.sendFile(__dirname + '/public/template/index.html')
// })

app.get('/elements', (req, res) => {
  res.render('elements', {
    nombre: 'Ale Mendoza',
    titulo: 'Experto Node'
  });
})

app.listen(port, () => {
  console.log('Sirviendo en el puerto 8008')
});