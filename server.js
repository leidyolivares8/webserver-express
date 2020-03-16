//codigo de la pagina web npm express
const express = require('express');
const app = express(); // nos permite utilizar express como deseamos
const hbs = require('hbs');

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public')); // sevir contenido estatico,desplegar una pagina web , midelware instruccion que se va ejecutar siempre no importa lo que la persona pida
// folder que queremos servir que sea puclico


hbs.registerPartials(__dirname + '/views/parciales')
    // Express HBS engine
app.set('view engine', 'hbs'); //@npm hbs


app.get('/', (req, res) => {
    //res.send('Hola mundo')  EL send detecta el objeto y lo serializa en formato JSON
    //res.render() El render renderizar el archivo home.hbs
    res.render('home', {
        nombre: 'leidy',
        anio: new Date().getFullYear()

    });

})

app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${port}`);
})