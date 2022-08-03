import React, { useState, useEffect } from "react";
import "./App.css";
import MoviesList from "./components/movieslist/MoviesList";
import NavBar from "./components/navbar/NavBar";
import AddMovie from "./components/modal/AddMovie";
import { data } from "./data";
import Moviedetail from "./components/Moviedetail/Moviedetail";
import {Route,Routes} from "react-router-dom"



function App() {
  const [movies, setMovies] = useState(data);
  const [search, setSearch] = useState("");
  const [rate, setRate] = useState(0);

  return (
    <div className="App">
      <NavBar setSearch={setSearch} setRate={setRate} rate={rate} />
      <section>
        <AddMovie movies={movies} setMovies={setMovies} />
      </section>
      <Routes>
        <Route
          exact
          path="/"
          element={<MoviesList movies={movies} search={search} rate={rate} />}
        />
        <Route exact path="/movie/:id" element={<Moviedetail movies={movies} />} />
      </Routes>
    </div>
  );
}

export default App;
