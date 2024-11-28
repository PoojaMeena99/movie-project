"use client"
import React, { useState } from 'react';
import styles from './movie.css';
import Head from './head.js';
import Row from './movie_row.js';
import Footer from './footer.js';
import { movie_list } from './movie_list.js';

const Page = () => {
  const [sortedMovies, setSortedMovies] = useState(movie_list);

  const sortMoviesByLikes = () => {
    const sortedByLikes = [...sortedMovies].sort((a, b) => b.likes - a.likes);
    setSortedMovies(sortedByLikes);
  };


  return (
    <div>
      <Head />
      {sortedMovies.map((movie) => (
        <Row

          key={movie.id}
          image={movie.image}
          name={movie.movie}
          year={movie.year}
          time={movie.time}
          junor={movie.junor}
          description={movie.description}
          movie={movie}
          onLikeDislike={sortMoviesByLikes}
        />
      ))}
      <Footer />
    </div>
  );
};

export default Page;

