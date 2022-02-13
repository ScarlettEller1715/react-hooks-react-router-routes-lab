import React from "react";
import { directors } from "../data";

function Directors() {
  
  const renderDirectors = directors.map((director) => {
    return <div>
      <h2>{director.name}</h2>
      <ul>
        {director.movies.map((movie) => {
          return <li>{movie}</li>
        })}
      </ul>
    </div>
  })
  
  return <div>{renderDirectors}</div>;
}

export default Directors;
