const fileSystem = require("fs");
const currentWorkingDir = process.cwd();
const moviesJsonPath = currentWorkingDir + "/data/movies.json";
const moviesJson = JSON.parse(fileSystem.readFileSync(moviesJsonPath, { encoding: "utf8" }));
const { movieFunctions } = require(currentWorkingDir + "/customFunctions.js");

let enCartelera = {
    texto: `EN CARTELERA
            
                
Total de películas​: ${moviesJson.total}
    
    
Listados de películas:
    
${movieFunctions.movieString(moviesJson.results, false)}`
};

module.exports = enCartelera;