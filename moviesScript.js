// 1. Get a reference to the elements on screen
const addBtn      = document.getElementById('addBtn');
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


addBtn.addEventListener('click', addNewMovie);
