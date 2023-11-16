import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';

const BEARER_TOKEN =
  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjZWJjYWNmNWVlYmRmMjMyZTdhYjExODRlMjU1ODcxMyIsInN1YiI6IjY1NTRmNGU4ZDRmZTA0MDBmZTA1ZTBkYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.YKsEf0YfTyl_7IU5zZn_FupO_ldSPljU4udltn5Ma_0';

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${BEARER_TOKEN}`,
  },
});

const fetchMovieDetails = async movieId => {
  try {
    const response = await axiosInstance.get(`/movie/${movieId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching movie details:', error);
    return null;
  }
};

const fetchMovieVideos = async movieId => {
  try {
    const response = await axiosInstance.get(`/movie/${movieId}/videos`);
    return response.data;
  } catch (error) {
    console.error('Error fetching movie videos:', error);
    return null;
  }
};

const fetchUpcomingMovies = async () => {
  try {
    const response = await axiosInstance.get('/movie/upcoming');
    return response.data.results || [];
  } catch (error) {
    console.error('Error fetching upcoming movies:', error);
    return [];
  }
};

export {fetchUpcomingMovies, fetchMovieDetails, fetchMovieVideos};
