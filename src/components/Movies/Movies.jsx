import { useState, useEffect } from 'react';
import { Link, Outlet, useNavigate, useSearchParams } from 'react-router-dom';

import { searchMovie } from 'api/api';
import styles from './Movies.module.css';

const Movies = () => {
  const navigate = useNavigate();
  const [results, setResults] = useState([]);
  let movie = '';

  const [searchParams] = useSearchParams();
  const name = searchParams.get('query');

  const onSubmit = ev => {
    ev.preventDefault();

    const form = ev.currentTarget;
    const search = form.elements.search.value;

    if (search !== '') {
      movie = search;
      fetchSearch();
    } else {
        return;
    }
    navigate(`/movies?query=${movie}`);
    form.reset();
  };

  const fetchSearch = async () => {
    try {
      const movies = await searchMovie(movie);
      setResults(movies);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (name !== null) {
      movie = name;
      fetchSearch();
    }
  }, [name]);

  return (
    <>
      <form onSubmit={onSubmit} className={styles.form}>
        <label>
          <input
            name="search"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Enter your request..."
            className={styles.input}
          />
        </label>
        <button type="submit" className={styles.btn}>
          Search
        </button>
      </form>

      <ol className={styles.list}>
        {results.map(({ id, title }) => (
          <li key={id} className={styles.item}>
            <Link
              to={`/movies/${id}`}
              state={{ from: `/movies?query=${name}` }}
              className={styles.link}
            >
              {title}
            </Link>
          </li>
        ))}
      </ol>
      <Outlet />
    </>
  );
};

export default Movies;
