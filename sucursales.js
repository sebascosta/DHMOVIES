let theaters = require('./theaters');

let sucursales = `<b> Nuestras Salas.</b> <hr>
	<u>Total de salas</u>: ${theaters.length} salas </br></br>
    <u>Listado de salas</u>: </br>`;
    
let listado = `<ol>`
for ( i = 0; i < theaters.length; i++){
    listado += `<li> <u>${theaters[i].name}</u> </br> ${theaters[i].address} </br> ${theaters[i].description}" </li>` 
}
listado += `</ol>`
sucursales += listado;

module.exports = sucursales;