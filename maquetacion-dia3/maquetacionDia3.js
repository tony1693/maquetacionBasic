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
    displayinfo(infoPerson);

}
const infolist = document.getElementById("listaDestin");

function filterdestins () {
    const imputDestino = getElementById("destino").value;

    const filteredList = informacion.filter( solicitud => {
        const searchCondition = imputDestino === 'galicia' || solicitud.destination.toLowerCase().includes(imputDestino.toLowerCase());
        const searchCondition1 = imputDestino === 'mayorca' || imputDestino === solicitud.destination.toLowerCase().includes(searchCondition1.toLowerCase());
        const searchCondition2 = imputDestino === 'canarias' || imputDestino === solicitud.destination.toLowerCase().includes(searchCondition2.toLowerCase());

        return searchCondition && searchCondition1 && searchCondition2;
    })
        displayinfo(filteredList);
}        
function displayinfo (filteredList){
        filteredList.forEach(solicitud1 => {
        clearList();
        const solicitud1 = document.createElement('li');
        solicitud1.textContent = `nombre: ${infoPerson.nombre} - destino: ${infoPerson.destination} - numb_personas: ${infoPerson.numbPerson}`;
        infolist.appendChild(solicitud1);
      });
    }

function clearList () {
    infolist.innerHTML = '';
}



