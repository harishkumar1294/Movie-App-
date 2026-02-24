const API_KEY = "b81387c1";
const BASE_URL = "https://www.omdbapi.com/";

export const searchMovies = async (query) => {
  const response = await fetch(
    `${BASE_URL}?apikey=${API_KEY}&s=${query}`
  );
  const data = await response.json();
  return data.Search || [];
};