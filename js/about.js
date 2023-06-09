
let mensaje = document.getElementById("mensaje");


// mensaje.innerHTML = `${sessionStorage.getItem("nombre")}`;
// let item = localStorage.getItem("nombre")
// mensaje.innerHTML = `${item}`;

let objetoRecuperado = JSON.parse(sessionStorage.getItem("pelis"));

console.log(objetoRecuperado)

mensaje.innerHTML = `${objetoRecuperado.pelicula3}`;