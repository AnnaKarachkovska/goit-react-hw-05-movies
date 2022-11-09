import { useState, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";

import { getTrends } from "api/api";
import styles from './Home.module.css'

const Home = () => {
    const [trendMovies, setTrendMovies] = useState([]);

    const fetchTrends = async () => {
        try {
            const trends = await getTrends();
            setTrendMovies(trends);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchTrends();
        // eslint-disable-next-line
    }, []) 
    
    return (
        <>
        <h2 className={styles.title}>Trending today</h2>
        <ol className={styles.list}> {trendMovies.map(movie => 
        <li key={movie.id} className={styles.item}>
            <Link className={styles.link} to={`/movies/${movie.id}`}>{movie.title}</Link>
        </li>
        )} </ol>
        <Outlet />
        </>
    )
}

export default Home;