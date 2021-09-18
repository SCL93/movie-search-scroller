const APIURL =
    "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const IMGPATH = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI =
    "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";


// ** - TODO - Refactor search, currently adds new movies to bottom, not clearing old innerHTML


getMovies(SEARCHAPI + "marvel");


async function getMovies(url){
    const resp = await fetch(url);
    const respData = await resp.json();
    console.log(respData);

    respData.results.forEach(movie => {
        const { overview, poster_path, title, vote_average} = movie;

        // create div container for each element 
        const movieEl = document.createElement('div');

        movieEl.classList.add('movie','grow');

        movieEl.innerHTML = `
        <img 
            src="${IMGPATH + poster_path}" 
            alt="${title}">
        <div class="movie-info">
            <h3>${title}</h3>
            <span>
                <div>${vote_average}</div>
            </span>
        </div>
        <div class="overview">
            <h3>Synopsis:</h3>
            ${overview}
        </div>
        `;

        document.body.appendChild(movieEl);
    });
}

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const searchTerm = search.value;

    if (searchTerm) {
        getMovies(SEARCHAPI + searchTerm);
        search.value = "";
    }
});


