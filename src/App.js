import React, { useState } from "react";

import MoviesList from "./components/MoviesList";
import "./App.css";

function App() {
  const [movies, setMovies] = useState([]);

  const fetchMovieshandler = () => {
    fetch("https://api.tvmaze.com/search/shows?q=all")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        let recievedMovies = [];
        recievedMovies = data.map((ele) => {
          return { score: ele.score, ...ele.show };
        });
        // console.log(recievedMovies);
        setMovies(recievedMovies);
        console.log(recievedMovies[0]);
      });
  };

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMovieshandler}>Fetch Movies</button>
      </section>
      <section>
        <MoviesList movies={movies} />
      </section>
    </React.Fragment>
  );
}

export default App;
