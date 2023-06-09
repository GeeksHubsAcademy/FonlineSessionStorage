
let inputName = document.getElementById("name");

const saveData = () => {


    //Ahora guardo en el sessionStorage....

    // sessionStorage.setItem("nombre", inputName.value);

    // localStorage.setItem("nombre",inputName.value)

    // //clear lo limpia todo...
    // localStorage.clear();

    // //removeItem quita algo en concreto
    // localStorage.removeItem("nombre");

    //////////////////////////////////////////////////

    //Ahora redirigire a otra página





    //guardando un objeto de JavaScript
    let objetoMovies = {
        pelicula1 : "Pulp Fiction",
        pelicula2 : "El señor de los Anillos",
        pelicula3 : "Piratas del Caribe"
    }

    //Tenemos que hacer un JSON stringify para que guarde el objeto películas como un string
    sessionStorage.setItem("pelis", JSON.stringify(objetoMovies));

    window.location.href = "./pages/about.html";
}