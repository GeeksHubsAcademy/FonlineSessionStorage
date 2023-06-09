
let inputName = document.getElementById("name");

const saveData = () => {


    //Ahora guardo en el sessionStorage....

    sessionStorage.setItem("nombre", inputName.value);

    //////////////////////////////////////////////////

    //Ahora redirigire a otra página

    window.location.href = "./pages/about.html";
}