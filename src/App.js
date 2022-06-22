import React, { useState } from "react";
import "./App.css";
// https://www.omdbapi.com/?i=tt3896198&apikey=f64df59f

// import Button from "@restart/ui/esm/Button"; same thing, sometime this does not work
import { Alert, Container } from "react-bootstrap";
import { SearchForm } from "./components/SearchForm";
import CustomCard from "./components/CustomCard";
import { MovieList } from "./components/MovieList";
import { fetchMovieInfo } from "./helpers/axiosHelper";

const App = () => {
  const [movie, setMovie] = useState({});
  const [showError, setShowError] = useState("");
  const [movieList, setMovieList] = useState([]);

  const handleOnsubmit = async (str) => {
    const result = await fetchMovieInfo(str);
    setMovie(result);
    if (result.Response === "True") {
      setMovie(result);
      setShowError("");
    } else {
      setMovie({});
      setShowError(result.Error);
    }
    // result.Response === "False" ? setShowError(result.Error) : setShowError("");
  };

  const movieSelect = (movie) => {
    setMovieList([...movieList, movie]);
    // So that it will disspear from the first state after we search
    setMovie({});
  };

  const deleteMovie = (imdbID) => {
    if (window.confirm("Are you sure you want to delete the movie?")) {
      const filterArray = movieList.filter((item) => {
        return item.imdbID !== imdbID;
      });
      setMovieList(filterArray);
    }
  };

  return (
    <div className="wrapper">
      {/* <div className="container"></div>  same*/}
      <Container>
        <SearchForm handleOnsubmit={handleOnsubmit} />
        <div className="mt-4 d-flex justify-content-center">
          <div>
            {/* What is movie.imdbID - it will remove the card at the initail phase*/}
            {movie.imdbID && (
              <CustomCard
                movie={movie}
                movieSelect={movieSelect}
                inSearchForm={true}
              />
            )}
            {showError && <Alert variant="danger">{showError}</Alert>}
          </div>
        </div>

        <hr />

        <MovieList movieList={movieList} deleteMovie={deleteMovie} />
        <hr />
      </Container>
    </div>
  );
};

export default App;
