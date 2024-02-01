// Defino la url de la api, el contenedor de resultados y el formulario de busqueda.
const urlApi = "https://api.sampleapis.com/movies/animation";
const divSection = document.getElementById('resultadoPeli');
const searchFormulario = document.getElementById('buscarformulario');
// Creo una función para buscar películas al enviar el formulario.
function buscarPelicula(event){
    event.preventDefault();
    // Obtengo el nombre escrito en la busqueda y lo convierto a minúsculas.
    const buscarPeliInput = document.getElementById('buscarPeli');
    const searchTerm = buscarPeliInput.value.toLowerCase();
    // Realizo la llamada a la api y proceso la respuesta.
    fetch(urlApi)
        .then(function(response){
            return response.json();
        })
        .then(function(json){
            divSection.innerHTML = ''; // Esto es para limpiar resultados anteriores encontrados.
            // Itero sobre las películas y muestro aquellas que coincidan en la busqueda.
            for(let i = 0; i < json.length; i++){
                const title = json[i].title.toLowerCase();
                if(title.includes(searchTerm)){
                    // Creo elementos html para mostrar la película.
                    let articlePost = document.createElement("article");
                    let articleTitulo = document.createElement("h2");
                    let articleImage = document.createElement("img");
                    let articleImdbId = document.createElement("p");
                    // Configuro los elementos con datos de la película.
                    articleTitulo.innerHTML = json[i].title;
                    articleImage.src = json[i].posterURL;
                    articleImdbId.innerHTML = json[i].imdbId;
                    // Agrego elementos al contenedor de resultados.
                    articlePost.appendChild(articleTitulo);
                    articlePost.appendChild(articleImage);
                    articlePost.appendChild(articleImdbId);
                    divSection.appendChild(articlePost);
                }
            }
        });
}
// Pongo en escucha el elemento de envío del formulario para activar la busqueda de películas.
searchFormulario.addEventListener('submit', buscarPelicula);
// Para cambiar el color de fondo del cuerpo (body) al hacer clic en el botón "Modo oscuro de la página".
const btnColor = document.getElementById('btnColor');
let fondoNegro = false;
function colorFondo(){
    if(fondoNegro){
        document.body.style.backgroundColor = 'white';
    } else {
        document.body.style.backgroundColor = 'black';
    }
    fondoNegro = !fondoNegro;
}
// Pongo el evento de clic en el botón para cambiar el color de fondo. 
btnColor.addEventListener('click', colorFondo);