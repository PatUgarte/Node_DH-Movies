const fileSystem = require("fs");
const currentWorkingDir = process.cwd();
const moviesJsonPath = currentWorkingDir + "/data/movies.json";
const moviesJson = JSON.parse(fileSystem.readFileSync(moviesJsonPath, { encoding: "utf8" }));
const { movieFunctions } = require(currentWorkingDir + "/customFunctions");

let mvm = movieFunctions.mostValuableMovies(moviesJson);

let masVotadas = {
    texto: `MÁS VOTADAS
			

Total de películas​: ${mvm.length}
    
    
Rating promedio: ${movieFunctions.average(mvm)}
    
    
Listados de películas:
    
${movieFunctions.movieString(mvm, true)}`
};

module.exports = masVotadas;