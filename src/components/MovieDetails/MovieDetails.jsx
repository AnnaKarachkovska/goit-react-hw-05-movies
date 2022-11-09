import { useState, useEffect } from 'react';
import { useParams, Link, Outlet, useLocation } from 'react-router-dom';

import { getMovie } from 'api/api';
import styles from './MovieDetails.module.css';

const MovieDetails = () => {
  const { movieId } = useParams();
  
  const [movie, setMovie] = useState({});
  const [poster, setPoster] = useState('');
  const [year, setYear] = useState('');

  const location = useLocation();
  const backLinkHref = location.state?.from ?? "/";

  const fetchMovie = async () => {
    try {
      const movie = await getMovie(movieId);
      setMovie(movie);
      setPoster(`https://image.tmdb.org/t/p/w500${movie.poster_path}`);
      setYear(movie.release_date.slice(0,4));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchMovie();
    // eslint-disable-next-line
  }, []);

  let genres;
  if (movie.genres !== undefined) {
    genres = movie.genres.map(genre => genre.name).join(', ');
  } else {
    genres = 'Sorry, there is no genres.';
  }
  
  return (
    <>
      <Link className={styles.backBtn} to={backLinkHref}>Go back</Link>
      <div className={styles.container}>
      <img src={poster} alt="Movie poster" className={styles.img} />
      <div>
        <h3 className={styles.title}>{movie.title} ({year})</h3>
        <p className={styles.text}>User score: {movie.vote_average}</p>
        <h4 className={styles.subtitle}>Overview</h4>
        <p className={styles.text}>{movie.overview}</p>
        <h4 className={styles.subtitle}>Genres</h4>
        <p className={styles.text}>{genres}</p>
      </div>
      </div>
      <div className={styles.thumb}>
      <p>Additional information</p>
      <ul>
        <li className={styles.item}>
          <Link to={`/movies/${movieId}/cast`} className={styles.link}>Cast</Link>
        </li>
        <li>
          <Link to={`/movies/${movieId}/reviews`} className={styles.link}>Reviews</Link>
        </li>
      </ul>
      </div>
      <Outlet/>
    </>
  );
};

export default MovieDetails;
