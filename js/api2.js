// 영화 카드 만드는 함수
function createMovieCard(movie) {
  const card = document.createElement("div");
  card.className = "movie-card";
  card.innerHTML = `
    <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${
    movie.title
  }">
    <h3>${movie.title}</h3>
    <p>${movie.overview}</p>
    <span class="rating">Rating: ${movie.vote_average.toFixed(2)}</span>
  `;
  card.addEventListener("click", () => alert(`Movie ID: ${movie.id}`));

  ratingColor(movie.vote_average, card);

  return card;
}
