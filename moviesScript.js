const addBtn      = document.getElementById('addBtn');
const removeBtn   = document.getElementById('removeBtn');
const moviesList  = document.getElementById('moviesList');
const newMovieBox = document.getElementById('movieTitleBox');

function addNewMovie() {
    let movieTitleText = newMovieBox.value;

    let movieItem = document.createElement('li');
    let movieTitle = document.createTextNode(movieTitleText);
    movieItem.appendChild(movieTitle);
    moviesList.appendChild(movieItem);

    newMovieBox.value = null;
}

function removeAllMovies() {
    let allMovies = moviesList.children; //allMovies is an ARRAY of li elements
    
    while (allMovies.length > 0) {
        allMovies.item(0).remove();
    }
}


addBtn.addEventListener('click', addNewMovie);
removeBtn.addEventListener('click', removeAllMovies);
