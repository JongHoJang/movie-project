// 본인의 API 키를 넣어주셔야 합니다.
const API_KEY = "59194452085a74c1cb8aae1c975a492a";
const baseUrl = "https://api.themoviedb.org/3/movie/";
const pages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // 요청할 페이지 번호

//
//
//Popular Movies
// 단일 페이지의 데이터를 요청하고 처리
async function fetchMovies(page) {
  const url = `${baseUrl}popular?api_key=${API_KEY}&language=en&page=${page}`;
  const response = await fetch(url); // url로 fetch 요청(get)
  const data = await response.json(); // json형태로 데이터 가져옴
  return data.results; // 영화 데이터만 반환
}

// 단일 페이지의 데이터를 map 함수를 통해 pages를 돌며 가져옴
async function fetchAllMovies(pages) {
  const promises = pages.map((page) => fetchMovies(page));
  const results = await Promise.all(promises);
  console.log(results);
  console.log(results.flat());
  return results.flat(); // 2차원 배열을 1차원으로 변환
}

// 페이지 데이터를 요청하고 처리하는 함수
fetchAllMovies(pages)
  .then((movies) => {
    const movieContainer = document.getElementById("movie-container");
    movies.forEach((movie) => {
      const card = createMovieCard(movie);
      movieContainer.appendChild(card);
    });
  })
  .catch((error) => console.error("Error:", error));

//
//
//Rated Movie Card
async function fetchRatedMovies(page) {
  const url = `${baseUrl}top_rated?api_key=${API_KEY}&language=en&page=${page}`;
  const response = await fetch(url);
  const data = await response.json();
  return data.results;
}

async function fetchRatedAllMovies(pages) {
  const promises = pages.map((page) => fetchRatedMovies(page));
  const results = await Promise.all(promises);
  console.log(results);
  console.log(results.flat());
  return results.flat();
}

fetchRatedAllMovies(pages)
  .then((movies) => {
    const movieContainer = document.getElementById("rated-movie-container");
    movies.forEach((movie) => {
      const card = createRatedMovieCard(movie);
      movieContainer.appendChild(card);
    });
  })
  .catch((error) => console.error("Error:", error));

//
//
// Now Playing Movie Card
async function fetchNowPlayingMovies(page) {
  const url = `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=ko&region=kr&page=${page}`;
  const response = await fetch(url);
  const data = await response.json();
  return data.results;
}

async function fetchNowPlayingAllMovies(pages) {
  const promises = pages.map((page) => fetchNowPlayingMovies(page));
  const results = await Promise.all(promises);
  return results.flat();
}

fetchNowPlayingAllMovies(pages)
  .then((movies) => {
    const resultCountElement = document.querySelector(".result-count");
    resultCountElement.textContent = `현재 한국에서 상영 중인 영화: ${movies.length}편`;

    const movieContainer = document.getElementById(
      "now-playing-movie-container"
    );
    movies.forEach((movie) => {
      const card = createNowPlayingMovieCard(movie);
      movieContainer.appendChild(card);
    });
  })
  .catch((error) => console.error("Error:", error));
