import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';


import { getCast } from 'api/api';
import MovieDetails from 'components/MovieDetails/MovieDetails';
import styles from './Cast.module.css';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  const fetchCast = async () => {
    try {
      const actors = await getCast(movieId);
      setCast(actors);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCast();
  }, []);

  const noPhoto = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN4X9PZ79pQtLSBLjyhQGLT2QHD1B8TJFw2G6rpULjpODvSybDvLYdsREaXw8-qefxr20&usqp=CAU';
  
  return (
    <>
      <ul>
        {cast.map(({id, name, character, profile_path}) => (
          <li key={id}  className={styles.item}>
            <img
              src={profile_path ? `https://image.tmdb.org/t/p/w500${profile_path}` : noPhoto}
              alt=""
              className={styles.img}
            />
            <div>
            <p className={styles.name}>{name}</p>
            <p className={styles.text}>Character: {character}</p>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Cast;