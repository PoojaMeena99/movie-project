import React from 'react';
import Action from './action.js';
// import LikeDislikeButton from './Rating.js';

const Row = (props) => {

  return (
    <div className="one_row">
      <div>
        <img className="imag_row" src={props.image} alt="Movie Poster" />
      </div>
      <div className="movie_row">
        <h1>{props.name}</h1>
        <p>{props.year}.{props.time} | {props.junor}</p>
        <h3>Description</h3>
        <p>{props.description}</p>
      </div>
      <div>
        <Action
          movie={props.movie}
          onLikeDislike={props.onLikeDislike}
        />
      </div>
    </div>

  );


};
export default Row;
