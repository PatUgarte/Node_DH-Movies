const fileSystem = require("fs");
const currentWorkingDir = process.cwd();
const theatersJsonPath = currentWorkingDir + "/data/theaters.json";
const theatersJson = JSON.parse(fileSystem.readFileSync(theatersJsonPath, { encoding: "utf8" }));
const { theatersFunctions } = require(currentWorkingDir + "/customFunctions.js");

let sucursales = {
    texto: `SUCURSALES
    
    
Total de salas​: ${theatersJson.total}
    
    
Listado de salas: 
    
${theatersFunctions.theaterString(theatersJson)}`
};

module.exports = sucursales;