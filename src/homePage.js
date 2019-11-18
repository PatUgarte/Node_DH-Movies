const fileSystem = require("fs");
const currentWorkingDir = process.cwd();
const moviesJsonPath = currentWorkingDir + "/data/movies.json";
const moviesJson = JSON.parse(fileSystem.readFileSync(moviesJsonPath, { encoding: "utf8" }));
const { movieFunctions } = require(currentWorkingDir + "/customFunctions.js");

let homePage = {
    texto: `HOMEPAGE

Bienvenidos a DH Movies el mejor sitio para encontrar las mejores películas, incluso mucho mejor que Netflix, Cuevana y PopCorn​ Time. 
    
    
Total de películas en cartelera​: ${moviesJson.total}
    
    
Listados de películas:
    ${movieFunctions.alphabeticallySorted(moviesJson)}
    
Recordá que podés visitar las secciones: 
                                      i. En Cartelera
                                     ii. Más Votadas
                                    iii. Sucursales
                                     iv. Contacto
                                      v. Preguntas Frecuentes`
};

module.exports = homePage;