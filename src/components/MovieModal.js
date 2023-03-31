import React from "react";
import classes from "./MovieModal.module.css";

const MovieModal = (props) => {
  const imdbUrl = `https://www.imdb.com/find/?q=${props.name}&ref_=nv_sr_sm`;
  return (
    <div className={classes.backdrop}>
      <div className={classes.modal}>
        {props.image && (
          <img
            src={props.image.medium}
            alt={`${props.name}.jpg`}
            // width="300"
            // height="400"
          ></img>
        )}
        <h2>{props.name}</h2>
        <p>{props.summary.slice(3, -4)}</p>
        <button onClick={() => window.open(imdbUrl, "_blank")}>
          View on IMDb
        </button>
        <br />
        <button className="close-button" onClick={props.onClose}>
          close
        </button>
      </div>
    </div>
  );
};

export default MovieModal;
