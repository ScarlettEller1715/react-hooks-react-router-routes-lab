import React from "react";
import { movies } from "../data";

function Movies() {
  
  const renderedMovies = movies.map((movie) => {
    return <div>
      <h2>{movie.title}</h2>
      <p>{movie.time}</p>
      <ul>
        {movie.genres.map((genre) => {
          return <li>{genre}</li>
        })}
      </ul>
    </div>
  })
  
  return <div>
    <h1>Movies Page</h1>
    {renderedMovies}
  </div>;
}

export default Movies;
