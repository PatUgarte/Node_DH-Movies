const contacto = require(__dirname + "/contacto.js");
const enCartelera = require(__dirname + "/enCartelera.js");
const homePage = require(__dirname + "/homePage.js");
const masVotadas = require(__dirname + "/masVotadas.js");
const preguntasFrecuentes = require(__dirname + "/preguntasFrecuentes.js");
const sucursales = require(__dirname + "/sucursales.js");
const notFound = require(__dirname + "/default.js");

let textosURL = {
    contactoString: contacto.texto,
    enCarteleraString: enCartelera.texto,
    homePageString: homePage.texto,
    masVotadasString: masVotadas.texto,
    preguntasFrecuentesString: preguntasFrecuentes.texto,
    sucursalesString: sucursales.texto,
    defaultString: notFound.texto,
}

module.exports = textosURL;