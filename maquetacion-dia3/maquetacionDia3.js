const informacion = [];

function saveInfo() {
    const nombre = document.getElementById("nombre").value;
    const origin = document.getElementById("origen").value;
    const destination = document.getElementById("destino").value;
    const numbPerson = document.getElementById("num_personas").value;
    const date1 = document.getElementById("fecha").value;

const infoPerson = {
    nombre: nombre,
    origin: origin,
    destination: destination,
    numbPerson: numbPerson,
    date1: date1
};
    informacion.push(infoPerson);
    
}
const infolist = document.getElementById("listaDestin");

function filterdestins () {

    const filteredList = informacion.filter( solicitud => {
        const searchCondition = solucitud.destination.toLowerCase() === 'galicia' ;
        const searchCondition2 = solucitud.destination.toLowerCase() === 'mayorca';
        const searchCondition3 = solicitud.destination.toLowerCase() === 'canarias'; 

        return searchCondition || searchCondition2 || searchCondition3;
    })
        displayinfo(filteredList);
}        
function displayinfo (filteredList){
        clearList();

        filteredList.forEach(solicitud1 => {
        const solicitud = document.createElement('li');
        solicitud.textContent = `nombre: ${solicitud1.nombre} - destino: ${solicitud1.destination} - numb_personas: ${solicitud1.numbPerson}`;
        infolist.appendChild(solicitud);
      });
    }

function clearList () {
    infolist.innerHTML = '';
}



