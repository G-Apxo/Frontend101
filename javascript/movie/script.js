const API_URL = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1"
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280'
const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query="'

const main = document.getElementById('main')
const form = document.getElementById('form')
const search = document.getElementById("search")

getMovies(API_URL)
function getMovies(url){
    fetch(url)
    .then(res => res.json())
    .then(data => {
        showMovies(data.results)
        if(data.results.length === 0){
            main.innerHTML = `<h1 class="no-movies">No movies found</h1>`
        }
    }).catch((error) => {
        error = "An error occured while fetching the movies"
        main.innerHTML = `<h1 class="no-movies">${error}</h1>`
    })
    
}


function showMovies(movies){
    main.innerHTML = ""
    movies.map((movie)=> {
        const {title, poster_path, vote_average, overview } = movie
        const movieEl = document.createElement("div")
        movieEl.classList.add("movie")
        movieEl.innerHTML = `
            <img src="${IMG_PATH + poster_path}"  alt="${title}">
            <div class="movie_info"> 
                <h3>${title}</h3>
                <span class="vote ${getClassByRate(vote_average)}">${vote_average.toFixed(1)}</span>
            </div>
            <div class="overview">
                ${overview}
            </div>
        `
        main.appendChild(movieEl)
    })
}
function getClassByRate(vote){
    if (vote >=7) {
        return "green"
    } else if (vote >=5){
        return "orange"
    } else {
        return "red"
    }
}

form.addEventListener("submit", (e) => {
    e.preventDefault()
    const searchTerm = search.value

    if(searchTerm && searchTerm !== "") {
        getMovies(SEARCH_API + searchTerm)
        search.value = ""
    } else {
        window.location.reload()
    }
})


