import { gameNews } from "../data/games-data.js";
const gameNewsContainer = document.querySelector('.js-game-news-section');

      
const urlParams = new URLSearchParams(window.location.search);
const gameId = urlParams.get('id');


let matchingGame;

gameNews.forEach((game) => {
  if (gameId === game.id) {
    matchingGame = game;
  }
});

gameNewsContainer.innerHTML = `
  <div class="container">
    <div class="row game-news-row">
      <div class="game-news col-lg-6">
      ${matchingGame.fullNews}
      </div>

      <div class="game-image col-lg-6">
      <img src="${matchingGame.image}" class="card-img-top" alt="..."/>
      </div>
    </div>
  </div>


  <div class="container whats-new-container">
    <div class="row">
      <div class="game-image col-lg-6">
      <img src="${matchingGame.gamePlayImage}" class="card-img-top" alt="..."/>
      </div>

      <div class="game-whats-new col-lg-6">
      ${matchingGame.whatsNew}
      </div>
    </div>
  </div>


  <div class="container game-news-conclusion-container">
    <div class="row">
      <p>${matchingGame.conclusion}</p>
    </div>
  </div>

  <div class="container game-news-conclusion-container">
    <div class="row">
      <p class="p1">⭐ <span class="bt">Rating:</span> ${matchingGame.rating}</p>
        <p class="p1">🎮 <span class="bt">Platforms:</span> ${matchingGame.platforms}</p>
        <p class="p1">🎮 <span class="bt">Genre:</span> ${matchingGame.genre}</p>
        <p class="p1">📅 <span class="bt">Release Date:</span> ${matchingGame.releaseDate}</p>
        <a href="#" class="btn btn-outline-light">🔗 Official Game Website</a>
    </div>
  </div>

`




/*<div class="game-info col-lg-6">
        <h2>${matchingGame.name}</h2>
        <p class="p1">⭐ <span class="bt">Rating:</span> ${matchingGame.rating}</p>
        <p class="p1">🎮 <span class="bt">Platforms:</span> ${matchingGame.platforms}</p>
        <p class="p1">🎮 <span class="bt">Genre:</span> ${matchingGame.genre}</p>
        <p class="p1">📅 <span class="bt">Release Date:</span> ${matchingGame.releaseDate}</p>
        <a href="#" class="btn btn-outline-light">🔗 Official Website</a>
      </div>

      <div class="game-image col-lg-6">
      <img src="${matchingGame.image}" class="card-img-top" alt="..."/>
      </div>*/