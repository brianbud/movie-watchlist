const searchBtn = document.querySelector('#search');
const inputEl = document.querySelector('input');
const moviesEl = document.querySelector('.movies');
searchBtn.addEventListener('click', async () => {
  const res = await fetch(
    `http://www.omdbapi.com/?s=${inputEl.value}&apikey=c558ae09`
  );
  const movies = await res.json();
  displayMovieInfo(movies.Search);
});

async function displayMovieInfo(moviesArr) {
  let html = '';

  for (let movie of moviesArr) {
    const res = await fetch(
      `http://www.omdbapi.com/?i=${movie.imdbID}&apikey=c558ae09`
    );
    const data = await res.json();
    console.log(data);
    html += `
    <div class="movie-item">
    <div><img src="${data.Poster}"></div>
    <div>
        <div><span>${data.Title}</span> <span>⭐ ${data.imdbRating}</span></div>
        <div><span>${data.Runtime}</span>${data.Genre}<span></span><button id="${movie.imdbID}">Watchlist</button></div>
        <div>${data.Plot}</div>
    </div>
    </div>
    `;
  }
  moviesEl.innerHTML = html;

  for (let movie of moviesArr) {
    let button = document.getElementById(movie.imdbID);
    button.addEventListener('click', (e) => {
      console.log(e.target.id);
    });
  }
}
