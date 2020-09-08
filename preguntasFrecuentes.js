const faqs = require('./faqs')

let preguntasFrecuentes = `<b>Preguntas Frecuentes.</b> <hr>
<u>Total de preguntas</u>: ${faqs.length} películas </br></br>
<u>Listado de preguntas</u>: </br>`;
let listado = `<ol>`
	for ( i = 0; i < faqs.length; i++){
    	listado += `<li> <b>${faqs[i].faq_title}</b> </br> <i>${faqs[i].faq_answer} </i> </li></br>`
	}
listado += `</ol>`
preguntasFrecuentes += listado;

module.exports = preguntasFrecuentes;