let radiografia = [{
    hora: '11:00',
    especialista: 'Ignacio Schulz',
    nombre: 'Francisca Rojas',
    rut: '9878782-1',
    prevision: 'Fonasa'
}, {
    hora: '11:30',
    especialista: 'Federico Subercaseaux',
    nombre: 'Pamela Estrada',
    rut: '15345241-3',
    prevision: 'Isapre'
}, {
    hora: '15:00',
    especialista: 'Fernando Wurthz',
    nombre: 'Armando Luna',
    rut: '16445345-9',
    prevision: 'Isapre'
}, {
    hora: '15:30',
    especialista: 'Ana Maria Godoy',
    nombre: 'Manuel Godoy',
    rut: '17666419-0',
    prevision: 'Fonasa'
}, {
    hora: '16:00',
    especialista: 'Patricia Suazo',
    nombre: 'Ramon Ulloa',
    rut: '14989389-K',
    prevision: 'Fonasa'
}];


let traumatologia = [{
    hora: '8:00',
    especialista: 'Maria Paz Altuzarra',
    nombre: 'Paula Sanchez',
    rut: '15554774-5',
    prevision: 'Fonasa'
}, {
    hora: '10:00',
    especialista: 'Raul Araya',
    nombre: 'Angélica Navas',
    rut: '15444147-9',
    prevision: 'Isapre'
}, {
    hora: '10:30',
    especialista: 'Maria Arriagada',
    nombre: 'Ana Klapp',
    rut: '17879423-9',
    prevision: 'Isapre'
}, {
    hora: '11:00',
    especialista: 'Alejandro Badilla',
    nombre: 'Felipe Mardones',
    rut: '1547423-6',
    prevision: 'Isapre'
}, {
    hora: '11:30',
    especialista: 'Cecilia Budnik',
    nombre: 'Diego Marre',
    rut: '16554741-K',
    prevision: 'Fonasa'
}, {
    hora: '12:00',
    especialista: 'Arturo Cavagnaro',
    nombre: 'Cecilia Mendez',
    rut: '9747535-8',
    prevision: 'Isapre'
}, {
    hora: '12:30',
    especialista: 'Andres Kanacri',
    nombre: 'Marcial Suazo',
    rut: '11254785-5',
    prevision: 'Isapre'
}];


let dental = [{
    hora: '8:30',
    especialista: 'Andrea Zuñiga',
    nombre: 'Marcela Retamal',
    rut: '11123425-6',
    prevision: 'Isapre'
}, {
    hora: '11:00',
    especialista: 'Maria Pia Zañartu',
    nombre: 'Angel Muñoz',
    rut: '9878789-2',
    prevision: 'Isapre'
}, {
    hora: '11:30',
    especialista: 'Scarlett Witting',
    nombre: 'Mario Kast',
    rut: '7998789-5',
    prevision: 'Fonasa'
}, {
    hora: '13:00',
    especialista: 'Francisco Von Teuber',
    nombre: 'Karin Fernandez',
    rut: '18887662-K',
    prevision: 'Fonasa'
}, {
    hora: '13:30',
    especialista: 'Eduardo Viñuela',
    nombre: 'Hugo Sanchez',
    rut: '17665461-4',
    prevision: 'Fonasa'
}, {
    hora: '14:00',
    especialista: 'Raquel Villaseca',
    nombre: 'Ana Sepulveda',
    rut: '14441281-0',
    prevision: 'Isapre'
}];


let nombreDeLaEspecialidad = especialidad => {

    let nombre;

    if (especialidad == radiografia) nombre = "radiografia";
    if (especialidad == traumatologia) nombre = "traumatologia";
    if (especialidad == dental) nombre = "dental";

    return nombre;

};


let resumenPacientes = especialidad => {

    let nombreEspecialidad = nombreDeLaEspecialidad(especialidad);

    let resumen = document.getElementById(`resumen-${nombreEspecialidad}`);

    let ultimoIndice = especialidad.length - 1;

    resumen.innerHTML = `
            <b>Primera atención:</b> ${especialidad[0].nombre} - ${especialidad[0].prevision} | <b>Última atención:</b> ${especialidad[ultimoIndice].nombre} - ${especialidad[ultimoIndice].prevision}
    `;

};


let tablaPacientes = especialidad => {

    let nombreEspecialidad = nombreDeLaEspecialidad(especialidad);

    let tabla = document.querySelector(`#tabla-${nombreEspecialidad} tbody`);

    console.log(tabla);

    especialidad.forEach(paciente => {

        tabla.innerHTML += `
        
            <tr>
            <td>${paciente.hora}</td>
            <td>${paciente.especialista}</td>
            <td>${paciente.nombre}</td>
            <td>${paciente.rut}</td>
            <td>${paciente.prevision}</td>
            </tr>

        `;

    });
};

// Agregando clase al parrafo que venia con la plantilla
let parrafoEstadisticas = document.querySelector("p");

parrafoEstadisticas.className = "fs-4 mb-4";

// Ejecución de funciones para agregar el resumen y las tablas de los pacientes
resumenPacientes(radiografia);
tablaPacientes(radiografia);

resumenPacientes(traumatologia);
tablaPacientes(traumatologia);

resumenPacientes(dental);
tablaPacientes(dental);

//Parallax para la portada
let bgHero = document.querySelector("#bg-hero");
let tituloHero = document.querySelector("#titulo-hero");

let scrollParallax = () => {

    let scrollTop = document.documentElement.scrollTop;

    bgHero.style.transform = `translateY(${scrollTop*(-0.3)}px)`;
    tituloHero.style.transform = `translateY(${scrollTop*(0.4)}px)`;

};

document.addEventListener("scroll", scrollParallax);