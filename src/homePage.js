const fileSystem = require("fs");
let moviesJsonPath = process.cwd() + "/data/movies.json";
let moviesJson = JSON.parse(fileSystem.readFileSync(moviesJsonPath, { encoding: "utf8" }));

function getStringPeliculasOrdenadasAlfabeticamente({ results }) {
    let peliculasOrdenadasAlfabeticamente = results.sort((a, b) => a.title > b.title ? 1 : -1);
    let stringTitulosDePeliculas = "";
    for (const { title } of peliculasOrdenadasAlfabeticamente) {
        stringTitulosDePeliculas += "\t\t\t > " + title + "\n";
    }
    return stringTitulosDePeliculas;
}

let homePage = {
    texto: `HOMEPAGE

Bienvenidos a DH Movies el mejor sitio para encontrar las mejores películas, incluso mucho mejor que Netflix, Cuevana y PopCorn​ Time. 
    
    
Total de películas en cartelera​: ${moviesJson.total}
    
    
Listados de películas:
    ${getStringPeliculasOrdenadasAlfabeticamente(moviesJson)}
    
Recordá que podés visitar las secciones: 
                                      i. En Cartelera
                                     ii. Más Votadas
                                    iii. Sucursales
                                     iv. Contacto
                                      v. Preguntas Frecuentes`
}

module.exports = homePage;