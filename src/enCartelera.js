const fileSystem = require("fs");
let moviesJsonPath = process.cwd() + "/data/movies.json";
let moviesJson = JSON.parse(fileSystem.readFileSync(moviesJsonPath, { encoding: "utf8" }));

function getStringPeliculasConDatos(arrayPeliculas, conCalificacion) {
    let stringPeliculasConDatos = "";
    for (const unaPelicula of arrayPeliculas) {
        stringPeliculasConDatos += "    > " + unaPelicula.title.toUpperCase();
        if (conCalificacion) {
            stringPeliculasConDatos += "  (" + unaPelicula.vote_average + ")";
        }
        stringPeliculasConDatos += "\n" + unaPelicula.overview + "\n\n";
    }
    return stringPeliculasConDatos;
}

let enCartelera = {
    texto: `EN CARTELERA
            
                
Total de películas​: ${moviesJson.total}
    
    
Listados de películas:
    
${getStringPeliculasConDatos(moviesJson.results, false)}`
}

module.exports = enCartelera;