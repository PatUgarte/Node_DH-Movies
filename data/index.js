const fileSystem = require("fs");

let moviesJSON = JSON.parse(fileSystem.readFileSync(__dirname + "/movies.json", { encoding: "utf8" }));
let theatersJSON = JSON.parse(fileSystem.readFileSync(__dirname + "/theaters.json", { encoding: "utf8" }));
let faqsJSON = JSON.parse(fileSystem.readFileSync(__dirname + "/faqs.json", { encoding: "utf8" }));

const data = {
    movies: moviesJSON,
    theaters: theatersJSON,
    faqs: faqsJSON,
};

module.exports = data;