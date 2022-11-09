import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { getReviews } from 'api/api';
import styles from './Reviews.module.css';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [noReviews, setNoReviews] = useState(null);

  const fetchReviews = async () => {
    try {
      const coments = await getReviews(movieId);
      if (coments.length === 0) {
        setNoReviews('Sorry, there is no reviews for this movie.');
      } else {
        setReviews(coments);
      };
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchReviews();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <ul>
        {noReviews ? noReviews : reviews.map(({id, author, content}) => (
          <li key={id} className={styles.item}>
            <p className={styles.author}>Author: {author}</p>
            <p className={styles.text}>{content}</p>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Reviews;