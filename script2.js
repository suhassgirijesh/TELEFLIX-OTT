let defaultval = "avengers";

function findmovie() {
    let searchmovie = document.getElementById("searchhere");
    let searchval = searchmovie.value.trim();
    defaultval = searchval || "avengers";
    console.log("Search:", searchval);
    getMovie();
}

async function getMovie() {
    try {
        let response = await fetch(`https://www.omdbapi.com/?s=${defaultval}&apikey=d58ebf4c`);
        let movies = await response.json();

        let omdMovies = document.getElementById("showmoviedetails");
        omdMovies.innerHTML = "";

        if (movies.Search) {
            movies.Search.map((movie) => {
                omdMovies.innerHTML += `
                    <div class="moviecard">
                        <h3>${movie.Title}</h3>
                        <div class="movieimg">
                            <img src="${movie.Poster === "N/A" ? "./no-image-available.jpg" : movie.Poster}" alt="${movie.Title}">
                        </div>
                        <p>${movie.Year}</p>
                    </div>
                `;
            });
        } else {
            omdMovies.innerHTML = `<p>No movies found for "${defaultval}".</p>`;
        }
    } catch (error) {
        console.error("Failed to fetch movie data:", error);
        document.getElementById("showmoviedetails").innerHTML = `<p>Error loading movies. Please try again later.</p>`;
    }
}

// Initial load
getMovie();
