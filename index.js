const searchBtn = document.querySelector('#search');
const inputEl = document.querySelector('input');

searchBtn.addEventListener('click', async () => {
  const res = await fetch(
    `http://www.omdbapi.com/?t=${inputEl.value}&apikey=c558ae09`
  );
  const movies = await res.json();
  console.log(movies);
});
