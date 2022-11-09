import { Routes, Route } from "react-router-dom";
import Navigator from "./Navigator/Navigator";
import Home from "./Home/Home";
import Movies from "./Movies/Movies";
import MovieDetails from "components/MovieDetails/MovieDetails";
import Cast from "./Cast/Cast";
import Reviews from "./Reviews/Reviews";

const App = () => {
  return (
    <div>
      <Navigator/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />}/>
        <Route path="/movies/:movieId" element={<MovieDetails />} >
          <Route path="/movies/:movieId/cast" element={<Cast />} />
          <Route path="/movies/:movieId/reviews" element={<Reviews />} /> 
        </Route>
        <Route path="*" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;