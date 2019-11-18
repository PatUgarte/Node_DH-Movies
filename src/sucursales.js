const fileSystem = require("fs");
let theatersJsonPath = process.cwd() + "/data/theaters.json";
let theatersJson = JSON.parse(fileSystem.readFileSync(theatersJsonPath, { encoding: "utf8" }));

function getStringSucursales ({results}) {
    let stringSucursales = "";
    for (const unaSucursal of results) {
        stringSucursales += "    > " + unaSucursal.name.toUpperCase();
        stringSucursales += "    (" + unaSucursal.address + ")";
        stringSucursales += "\n" + unaSucursal.description + "\n\n";
    }
    return stringSucursales;
}

let sucursales = {
    texto: `SUCURSALES
    
    
Total de salas​: ${theatersJson.total}
    
    
Listado de salas: 
    
${getStringSucursales(theatersJson)}`
}

module.exports = sucursales;