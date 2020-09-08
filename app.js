const http = require('http');
const fs = require('fs');

let movies = require('./movies.js');		
const faqs = require ('./faqs');
const theaters = require ('./theaters');
const { title } = require('process');
const Cartelera = require ('./en-cartelera.js');
const sucursales = require ('./sucursales.js');
const masVotadas = require ('./mas-votadas.js');
const contactos = require ('./contacto.js');
const preguntasFrecuentes = require('./preguntasFrecuentes.js');

// Servidor
http.createServer((req, res) => {
	res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
	
	// Route System
	switch (req.url) {
		// Home
		case '/':

			movies = movies.sort(function (a, b) {
				if (a.title > b.title) {
				  return 1;
				}
				if (a.title < b.title) {
				  return -1;
				}
				return 0;
			  });
	
		let listado = `<ol></ol>`
	
		for ( var i= 0; i<movies.length; i++){
			listado+= `${movies[i].title}<br/>`
		}	
		


	
		
		
		

		let title = ` <h1>Bienvenidos a DH Movies el mejor sitio para ver peliculas </h1>`
		let total =  ` <br> <h3>Con un total de ${movies.length} peliculas:</h3> `
		let visita = `
	
		<br>	
		Recordá que podes visitar las siguientes secciones :
		<br>
		<a href="./en-cartelera"><h4>Peliculas en Cartelera</h4></a>
		
		<a href="./mas-votadas"><h4>Peliculas mas votadas</h4></a>
		
		<a href="./sucursales"><h4>Nuestras sucursales</h4></a>
	
		<a href="./contacto"><h4>Contacto</h4></a>
	
		<a href="./preguntas-frecuentes"><h4>Preguntas frecuentes</h4></a>
		




		` 		
			
		res.end(title + total + listado + visita )

			break;																							
			
		
			
		// En cartelera
		case '/en-cartelera':
			
			
			var cartelera =`<h1>En cartelera</h1> 
			<h3>Total de peliculas disponibles: ${movies.length}</h3>`
			var lista = `<ol>`
			for ( var i= 0; i<movies.length; i++){
				lista+= `<li><b>${movies[i].title} : </b>`
				lista+= `${movies[i].overview} </li> ` 
				}
			lista += `</ol>`
			cartelera+=lista;

			module.exports = cartelera
                    
			res.end(cartelera);
			break;
		case '/mas-votadas':

		
		res.end(masVotadas);
			break;
		case '/sucursales':
			res.end(sucursales);
			break;
		case '/contacto':
			
			res.end(contactos);
			break;
		case '/preguntas-frecuentes':
				
							
			
			res.end(preguntasFrecuentes)
		break;

		default:
			res.end('404 not found')
	}
}).listen(3030, 'localhost', () => console.log('Server running in 3030 port'));