const searchBtn = document.querySelector('#search');
const inputEl = document.querySelector('input');
const moviePosterEl = document.querySelector('.movie-poster');
const movieTitleEl = document.querySelector('.movie-title');

searchBtn.addEventListener('click', async () => {
  const res = await fetch(
    `http://www.omdbapi.com/?s=${inputEl.value}&apikey=c558ae09`
  );
  const movies = await res.json();
  displayMovieInfo(movies.Search);
});

function displayMovieInfo(moviesArr) {
  let html = '';
  moviesArr.forEach((movie) => {
    console.log(movie);
    html += `<div>${movie.Title}</div>`;
  });

  movieTitleEl.innerHTML = html;
}
