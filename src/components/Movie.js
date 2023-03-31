import React, { useState } from "react";
import classes from "./Movie.module.css";
import MovieModal from "./MovieModal";

const Movie = (props) => {
  const { movie } = props;
  const [showModal, setShowModal] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState({});

  const showSummaryHandler = () => {
    console.log(movie.name);
    setSelectedMovie({
      name: movie.name,
      summary: movie.summary,
      image: movie.image,
    });
    setShowModal(true);
  };

  const closeModalHandler = () => {
    setShowModal(false);
  };

  const [hasValidImage, setValidImage] = useState(false);
  const [url, setUrl] = useState("");
  useState(() => {
    if (movie.image) {
      setValidImage(true);
      setUrl(movie.image.medium);
    }
  }, []);
  return (
    <React.Fragment>
      <li className={classes.movie}>
        {hasValidImage && (
          <img
            src={url}
            alt={`${movie.title}.jpg`}
            width="300"
            height="400"
          ></img>
        )}
        <h2>{movie.name}</h2>
        <h3>Release Date: {movie.premiered}</h3>
        <h4>score: {(movie.score * 10).toFixed(1)}/10</h4>
        <button className="summaryButton" onClick={showSummaryHandler}>
          View summary
        </button>
      </li>
      {showModal && (
        <MovieModal
          name={selectedMovie.name}
          summary={selectedMovie.summary}
          image={selectedMovie.image}
          onClose={closeModalHandler}
        />
      )}
    </React.Fragment>
  );
};

export default Movie;
