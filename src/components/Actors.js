import React from "react";
import { actors } from "../data";

function Actors() {
  
  const renderActors = actors.map((actor) => {
    return <div>
      <h2>{actor.name}</h2>
      <ul>
        {actor.movies.map((movie) => {
          return <li>{movie}</li>
        })}
      </ul>
    </div>
  })
  
  return <div>{renderActors}</div>;
}

export default Actors;
