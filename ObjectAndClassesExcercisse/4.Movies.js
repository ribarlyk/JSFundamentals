function movies(array) {
    let movies = [];
    for (let elements of array) {
        if (elements.includes("addMovie ")) {
            let [as, name] = elements.split("addMovie ");

            movies.push({ name });
        } else if (elements.includes(" directedBy ")) {
            let [name, director] = elements.split(" directedBy ");
            let movie = movies.find((movieDirector) => movieDirector.name === name);

            if (movie) {
                movie.director = director;
            }
        } else if (elements.includes(" onDate ")) {
            let [name, date] = elements.split(" onDate ");
            let movie = movies.find((movieDate) => movieDate.name === name);

            if (movie) {
                movie.date = date;
            }
        }
    }
    movies.forEach(movies=> {
        if (movies.name && movies.director && movies.date) {
            console.log(JSON.stringify(movies));
        }
    })
}

movies([
    "addMovie Fast and Furious",
    "addMovie Godfather",
    "Inception directedBy Christopher Nolan",
    "Godfather directedBy Francis Ford Coppola",
    "Godfather onDate 29.07.2018",
    "Fast and Furious onDate 30.07.2018",
    "Batman onDate 01.08.2018",
    "Fast and Furious directedBy Rob Cohen",
]);
