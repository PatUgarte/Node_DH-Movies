const fileSystem = require("fs");
const currentWorkingDir = process.cwd();
const faqsJsonPath = currentWorkingDir + "/data/faqs.json";
const faqsJson = JSON.parse(fileSystem.readFileSync(faqsJsonPath, { encoding: "utf8" }));
const { faqFunctions } = require(currentWorkingDir + "/customFunctions.js");

let preguntasFrecuentes = {
    texto: `PREGUNTAS FRECUENTES
    
    
Total de preguntas: ${faqsJson.total}
    
    
Listado de preguntas:
${faqFunctions.faqString(faqsJson)}`
};

module.exports = preguntasFrecuentes;