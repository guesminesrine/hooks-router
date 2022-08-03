import React from "react";
import {useParams } from "react-router-dom";
import {Link } from "react-router-dom";

const Moviedetail = ({ movies }) => {
  let { id } = useParams();
  let x = movies.filter((movie) => movie.id === id);
  console.log(x);
  console.log(movies);
  console.log(id);
  return (
    <div>
      <h1>{x[0].title}</h1>

      <iframe
        width="560"
        height="315"
        src={x[0].trailer}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
<br></br>
      <Link to="/">Home page</Link>
    </div>
  );
};

export default Moviedetail;
