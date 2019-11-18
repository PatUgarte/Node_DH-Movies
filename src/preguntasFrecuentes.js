const fileSystem = require("fs");
let faqsJsonPath = process.cwd() + "/data/faqs.json";
let faqsJson = JSON.parse(fileSystem.readFileSync(faqsJsonPath, { encoding: "utf8" }));

function getStringFAQ ({results}) {
    let stringFAQ = "";
    for (const unaFAQ of results) {
        stringFAQ += "\n\t> " + unaFAQ.faq_title.toUpperCase();
        stringFAQ += "\n\n" + unaFAQ.faq_answer + "\n\n";
    }
    return stringFAQ;
}

let preguntasFrecuentes = {
    texto: `PREGUNTAS FRECUENTES
    
    
Total de preguntas: ${faqsJson.total}
    
    
Listado de preguntas:
${getStringFAQ(faqsJson)}`
}

module.exports = preguntasFrecuentes;