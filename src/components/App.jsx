import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import Navigator from "./Navigator/Navigator";

// import Home from "./Home/Home";
// import Movies from "./Movies/Movies";
// import MovieDetails from "components/MovieDetails/MovieDetails";
// import Cast from "./Cast/Cast";
// import Reviews from "./Reviews/Reviews";
const Home = lazy(() => import("./Home/Home"));
const Movies = lazy(() => import("./Movies/Movies"));
const MovieDetails = lazy(() => import("components/MovieDetails/MovieDetails"));
const Cast = lazy(() => import("./Cast/Cast"));
const Reviews = lazy(() => import("./Reviews/Reviews"));

const App = () => {
  return (
    <div>
      <Navigator/>
      <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />}/>
        <Route path="/movies/:movieId" element={<MovieDetails />} >
          <Route path="/movies/:movieId/cast" element={<Cast />} />
          <Route path="/movies/:movieId/reviews" element={<Reviews />} /> 
        </Route>
        <Route path="*" element={<Home />} />
      </Routes>
      </Suspense>
    </div>
  );
};

export default App;