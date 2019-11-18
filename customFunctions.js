const MIN_TOP_RATED = 7;

function getAlphabeticallySorted({ results }) {
    let sortedMovies = results.sort((a, b) => a.title > b.title ? 1 : -1);
    let movieTitlesString = "";
    for (const { title } of sortedMovies) {
        movieTitlesString += "\t\t\t > " + title + "\n";
    }
    return movieTitlesString;
}

function getMovieString(mostValuabelMovies, withCalification) {
    let movieString = "";
    for (const { title, vote_average, overview } of mostValuabelMovies) {
        movieString += "    > " + title.toUpperCase();
        if (withCalification) {
            movieString += "    (" + vote_average + ")";
        }
        movieString += "\n" + overview + "\n\n";
    }
    return movieString;
}

function getMostValuableMovies({ results }) {
    return results.filter(({ vote_average }) => vote_average >= MIN_TOP_RATED ? true : false);
}

function getAverage(mostValuabelMovies) {
    let summation = mostValuabelMovies.length;
    let average = mostValuabelMovies.reduce((aver, { vote_average }) => aver += vote_average / summation, 0);
    return average.toFixed(2);
}

function getTheaterString({ results }) {
    let theaterString = "";
    for (const { name, address, description } of results) {
        theaterString += "> " + name.toUpperCase();
        theaterString += "\t(" + address + ")";
        theaterString += "\n" + description + "\n\n";
    }
    return theaterString;
}

function getFaqString({ results }) {
    let faqString = "";
    for (const { faq_title, faq_answer } of results) {
        faqString += "\n\t> " + faq_title.toUpperCase();
        faqString += "\n\n" + faq_answer + "\n";
    }
    return faqString;
}

let customFunctions = {
    movieFunctions: {
        alphabeticallySorted: getAlphabeticallySorted,
        movieString: getMovieString,
        mostValuableMovies: getMostValuableMovies,
        average: getAverage,
    },
    theatersFunctions: {
        theaterString: getTheaterString,
    },
    faqFunctions: {
        faqString: getFaqString,
    },
};

module.exports = customFunctions;