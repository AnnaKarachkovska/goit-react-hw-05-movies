import axios from 'axios';

const instanceAxiosMovies = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
});

export const getTrends = async () => {
  const { data } = await instanceAxiosMovies(`/trending/movie/day?api_key=9d2b0029c30fb6f0691793e32bc4db6f`);
  return data.results;
};

export const getMovie = async (id) => {
  const { data } = await instanceAxiosMovies(`/movie/${id}?api_key=9d2b0029c30fb6f0691793e32bc4db6f&language=en-US`);
  return data;
};

export const getCast = async (id) => {
  const { data } = await instanceAxiosMovies(`/movie/${id}/credits?api_key=9d2b0029c30fb6f0691793e32bc4db6f&language=en-US`);
  return data.cast;
};

export const getReviews = async (id) => {
  const { data } = await instanceAxiosMovies(`/movie/${id}/reviews?api_key=9d2b0029c30fb6f0691793e32bc4db6f&language=en-US&page=1`);
  return data.results;
};

export const searchMovie = async (query) => {
  const { data } = await instanceAxiosMovies(`/search/movie?api_key=9d2b0029c30fb6f0691793e32bc4db6f&language=en-US&query=${query}&page=1&include_adult=false`);
  return data.results;
};