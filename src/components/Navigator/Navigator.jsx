import { NavLink } from 'react-router-dom';
import styles from './Navigator.module.css';

const getStyle = ({ isActive }) =>
  isActive ? { color: 'red' } : { color: 'black' };

const Navigator = () => {
  return (
    <nav className={styles.nav}>
      <NavLink to="/" className={styles.link} style={getStyle}>
        Home
      </NavLink>
      <NavLink to="/movies" className={styles.link} style={getStyle}>
        Movies
      </NavLink>
    </nav>
  );
};

export default Navigator;
