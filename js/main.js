// 스크롤 인디케이터
window.onscroll = function () {
  myFunction();
};

function myFunction() {
  const winScroll =
    document.body.scrollTop || document.documentElement.scrollTop;
  const height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  const scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}

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

  // 모달창
  card.addEventListener("click", () => {
    const modal = document.getElementById("modalContainer");
    const modalMovieId = document.querySelector(".modalMovieId");
    modalMovieId.innerHTML = `
    <div>
     <img class="modalImg" src="https://image.tmdb.org/t/p/w500${
       movie.poster_path
     }" alt="${movie.title}">
    </div>
        <div>
          <h3>${movie.title}</h3>
          <p>${movie.overview}</p>
          <p>Rating: ${movie.vote_average.toFixed(2)}</p>
          <button class="idBtn">ID값 보기</button>
       </div>`;

    modal.classList.remove("hidden");

    const idBtn = document.querySelector(".idBtn");
    idBtn.addEventListener("click", () => {
      alert(`Movie ID: ${movie.id}`);
    });
  });

  ratingColor(movie.vote_average, card);

  return card;
}

// 모달 관련 요소 선택
const modalCloseBtn = document.getElementById("modalCloseBtn");
const modal = document.getElementById("modalContainer");

// 모달 닫기 버튼 클릭 시 모달 창 숨기기
modalCloseBtn.addEventListener("click", () => {
  modal.classList.add("hidden");
});

// 배경 클릭 시 모달 창 숨기기
window.addEventListener("click", (event) => {
  if (event.target == modal) {
    modal.classList.add("hidden");
  }
});

function ratingColor(rate, card) {
  const $rating = card.querySelector("span");
  $rating.className = "rating"; // 초기화

  // 평점에 따른 클래스 추가
  if (rate === 0) {
    $rating.classList.add("zero");
  } else if (rate < 6) {
    $rating.classList.add("low");
  } else if (rate >= 6 && rate < 8) {
    $rating.classList.add("medium");
  } else {
    $rating.classList.add("high");
  }
}

//검색창
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

//RatedMovie
function createRatedMovieCard(movie) {
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

  // 모달창
  card.addEventListener("click", () => {
    const modal = document.getElementById("modalContainer");
    const modalMovieId = document.querySelector(".modalMovieId");
    modalMovieId.innerHTML = `
    <div>
     <img class="modalImg" src="https://image.tmdb.org/t/p/w500${
       movie.poster_path
     }" alt="${movie.title}">
    </div>
        <div>
          <h3>${movie.title}</h3>
          <p>${movie.overview}</p>
          <p>Rating: ${movie.vote_average.toFixed(2)}</p>
          <button class="idBtn">ID값 보기</button>
       </div>`;

    modal.classList.remove("hidden");

    const idBtn = document.querySelector(".idBtn");
    idBtn.addEventListener("click", () => {
      alert(`Movie ID: ${movie.id}`);
    });
  });

  ratingColor(movie.vote_average, card);

  return card;
}

//
//
// Now Playing Movie Card
function createNowPlayingMovieCard(movie) {
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
  card.addEventListener("click", () => {
    const modal = document.getElementById("modalContainer");
    const modalMovieId = document.querySelector(".modalMovieId");
    modalMovieId.innerHTML = `
    <div>
     <img class="modalImg" src="https://image.tmdb.org/t/p/w500${
       movie.poster_path
     }" alt="${movie.title}">
    </div>
        <div>
          <h3>${movie.title}</h3>
          <p>${movie.overview}</p>
          <p>Rating: ${movie.vote_average.toFixed(2)}</p>
          <button class="idBtn">ID값 보기</button>
       </div>`;

    modal.classList.remove("hidden");

    const idBtn = document.querySelector(".idBtn");
    idBtn.addEventListener("click", () => {
      alert(`Movie ID: ${movie.id}`);
    });
  });
  ratingColor(movie.vote_average, card);

  return card;
}
