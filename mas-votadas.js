let movies = require ('./movies.js')

let masVotadas = `<b><h1>Más Votadas.</h1></b> <hr>
<u><h2>Total de películas</u>: </h3>`;
let seleccionadas = [];
for (i = 0; i < movies.length; i++) {    
    if (movies[i].vote_average > 7) {
        seleccionadas.push(movies[i]); 
    };
};
masVotadas += `<h2> ${seleccionadas.length} películas</h2> </br></br> 
<u>Rating promedio</u>:`
let promedio = 0;
for ( i = 0; i < seleccionadas.length; i++){
    promedio += seleccionadas[i].vote_average;
}
promedio = promedio / seleccionadas.length;
masVotadas += promedio + `</br></br> <u>Listado de películas</u>: </br>`;  

seleccionadas = seleccionadas.sort( function (a, b){
    if (a.vote_average > b.vote_average) return -1;
    if (a.vote_average < b.vote_average) return 1;
    return 0;
});
let listado = `<ol>`;
	for ( i = 0; i < seleccionadas.length; i++){
    	listado += `<li> <u>${seleccionadas[i].title}</u> </br>${seleccionadas[i].overview}  </br> <b>${seleccionadas[i].vote_average}</b></li>`
	};
	listado += `</ol>`;
	masVotadas += listado;


module.exports = masVotadas;
