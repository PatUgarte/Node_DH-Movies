const textos = require(__dirname + "/src/index.js");

let routeSystem = {
    route: (url) => {
        // Route System
        switch (url) {
            // Home
            case "/":
                return textos.homePageString;
            // En cartelera
            case '/en-cartelera':
                return textos.enCarteleraString;
            // Mas votadas
            case "/mas-votadas":
                return textos.masVotadasString;
            // Sucursales
            case "/sucursales":
                return textos.sucursalesString;
            // Contacto
            case "/contacto":
                return textos.contactoString;
            // Preguntas frecuentes
            case "/preguntas-frecuentes":
                return textos.preguntasFrecuentesString;
            // Default
            default:
                return textos.defaultString;
        }
    }
}

module.exports = routeSystem;