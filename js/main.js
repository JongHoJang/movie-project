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

function ratingColor(rate, card) {
  const $rating = card.querySelector("span");
  $rating.className = "rating"; // 초기화

  // 평점에 따른 클래스 추가
  if (rate < 6) {
    $rating.classList.add("low");
  } else if (rate >= 6 && rate < 8) {
    $rating.classList.add("medium");
  } else {
    $rating.classList.add("high");
  }
}

document.getElementById("search-input").addEventListener("input", () => {
  const query = document.getElementById("search-input").value.toLowerCase();
  const movieCards = document.querySelectorAll(".movie-card");

  movieCards.forEach((card) => {
    const title = card.querySelector("h3").textContent.toLowerCase();
    if (title.includes(query)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
});
