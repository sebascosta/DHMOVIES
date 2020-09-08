let movies = require('./movies.js');

var cartelera =`<h1>En cartelera</h1> 
<h5>Total de peliculas disponibles: ${movies.length}</h5>`
var lista = `<ol>`
for ( var i= 0; i<movies.length; i++){
    lista+= `<li>${movies[i].title}</b>`
    lista+= `<b>${movies[i].overview} </li></b> ` 
    }
lista += `</ol>`
cartelera+=lista;

module.exports = cartelera
