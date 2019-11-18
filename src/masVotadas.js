const fileSystem = require("fs");
let moviesJsonPath = process.cwd() + "/data/movies.json";
let moviesJson = JSON.parse(fileSystem.readFileSync(moviesJsonPath, { encoding: "utf8" }));

function getStringPeliculasConDatos(arrayPeliculas, conCalificacion) {
    let stringPeliculasConDatos = "";
    for (const unaPelicula of arrayPeliculas) {
        stringPeliculasConDatos += "    > " + unaPelicula.title.toUpperCase();
        if (conCalificacion) {
            stringPeliculasConDatos += "    (" + unaPelicula.vote_average + ")";
        }
        stringPeliculasConDatos += "\n" + unaPelicula.overview + "\n\n";
    }
    return stringPeliculasConDatos;
}

function getPeliculasMasVotadas({results}) {
    return results.filter(({ vote_average }) => vote_average >= 7 ? true : false);
}

function getPromedioPeliculasMasVotadas({results}) {
    let peliculas = getPeliculasMasVotadas(moviesJson);
    let cantidad = peliculas.length;
    let promedio = peliculas.reduce((prom, { vote_average }) => prom += vote_average / cantidad, 0);
    return promedio.toFixed(2);
}

let masVotadas = {
    texto: `MÁS VOTADAS
			

Total de películas​: ${getPeliculasMasVotadas(moviesJson).length}
    
    
Rating promedio: ${getPromedioPeliculasMasVotadas(moviesJson)}
    
    
Listados de películas:
    
${getStringPeliculasConDatos(getPeliculasMasVotadas(moviesJson), true)}`
}

module.exports = masVotadas;