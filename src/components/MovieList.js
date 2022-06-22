import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import CustomCard from "./CustomCard";

export const MovieList = ({ movieList, deleteMovie }) => {
  const [displayList, setDisplayList] = useState([]);
  //  Introduction to use Effect so that we get movieList befroe re-rendering otherwise it is slow and we won't get movieList value
  useEffect(() => {
    setDisplayList(movieList);
    // we use useeffect only when useState does not update after re-render
    // Why [] it is also called dependency,because it prevente infinite re-render, the input value is for render when the input data is changed.
  }, [movieList]);

  const filterMovie = (mood) => {
    if (mood === "all") {
      // return so that we don't want to run other code if mood === "all";
      return setDisplayList(movieList);
    }
    const temArg = movieList.filter((item) => item.mood === mood);

    setDisplayList(temArg);
  };
  return (
    <div>
      <Row>
        <Col className="d-flex justify-content-between">
          <ButtonGroup aria-label="Basic example">
            <Button variant="primary" onClick={() => filterMovie("all")}>
              All
            </Button>
            <Button variant="secondary" onClick={() => filterMovie("happy")}>
              Happy
            </Button>
            <Button variant="info" onClick={() => filterMovie("romantic")}>
              Romantic
            </Button>
          </ButtonGroup>
          <ButtonGroup aria-label="Basic example">
            <Button variant="secondary">Grid</Button>
            <Button variant="secondary">List</Button>
          </ButtonGroup>
        </Col>
      </Row>
      <br />
      <h5>{displayList.length} Movie Found</h5>
      <Row className="mt-5">
        <Col className="d-flex justify-content-between flex-wrap">
          {displayList.map((item, i) => {
            return (
              <CustomCard key={i} movie={item} deleteMovie={deleteMovie} />
            );
          })}
        </Col>
      </Row>
    </div>
  );
};
