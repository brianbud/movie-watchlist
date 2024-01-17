const searchBtn = document.querySelector('#search');
const inputEl = document.querySelector('input');
const moviePosterEl = document.querySelector('.movie-poster');
const movieTitleEl = document.querySelector('.movie-title');

searchBtn.addEventListener('click', async () => {
  const res = await fetch(
    `http://www.omdbapi.com/?t=${inputEl.value}&apikey=c558ae09`
  );
  const movies = await res.json();
  console.log(movies);
  displayMovieInfo(movies);
});

function displayMovieInfo(movies) {
  moviePosterEl.innerHTML = `<img src=${movies.Poster}>`;
  movieTitleEl.innerText = `${movies.Title}`;
}
