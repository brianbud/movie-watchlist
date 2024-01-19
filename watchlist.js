const indexPageEl = document.querySelector('#index-page');

indexPageEl.addEventListener('click', () => {
  console.log('clicked');
  location.replace(`./index.html`);
});

console.log(localStorage.getItem('wishlist'));
