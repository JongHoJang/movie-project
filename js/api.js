// 본인의 API 키를 넣어주셔야 합니다.
const API_KEY = "59194452085a74c1cb8aae1c975a492a";
const URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en&page=1`;

fetch(URL)
  .then((response) => response.json())
  .then((data) => {
    const movies = data.results;
    const movieContainer = document.getElementById("movie-container");
    movies.forEach((movie) => {
      const card = createMovieCard(movie);
      movieContainer.appendChild(card);
    });
  })
  .catch((error) => console.error("Error:", error));
