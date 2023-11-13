
import peliculas from './peliculas.js'
console.log(peliculas); 

// filtrar por género.
function filtrarPeliculasPorGenero(idGenero) {
    return peliculas.filter(pelicula => pelicula.genre_ids.incluides(idGenero));
}

// ver las películas en html.
function mostrarPeliculas(idGenero) {
    const peliculasGenero = filtrarPeliculasPorGenero(idGenero);

const contenedorGenero = document.getElementById(`genero-${idGenero}`);

peliculasGenero.forEach(pelicula => {
const div Pelicula = document.createElement('div');
divPelicula.classList.add('pelicula');

const img = document.createElement('img');
img.src = `https://image.tmdb.org/t/p/w500${pelicula.poster_path}`;
img.alt = pelicula.title;

const titulo = document.createElement('h2');
titulo.textContent = pelicula.title;

divPelicula.appendChild(img);
divPelicula.appendChild(titulo);
contenedorGenero.appendChild(divPelicula);
});
}

mostrarPeliculas para cada género
mostrarPeliculas(28); // Acción
mostrarPeliculas(53); // Thriller
mostrarPeliculas(12) // Aventura