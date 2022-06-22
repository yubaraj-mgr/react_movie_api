import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

// why i think so that we can destructe it movie = {}
const CustomList = ({ movie = {}, movieSelect, inSearchForm, deleteMovie }) => {
  const { Title, Poster, imdbRating, Plot } = movie;

  return (
    <Card
      style={{ width: "100%" }}
      className="mt-3 d-flex flex-row justify-content-between h-100"
    >
      <div style={{ width: "200px" }}>
        <Card.Img variant="top" src={Poster} className="h-100" />
      </div>
      <Card.Body>
        <Card.Title>ListView: {Title}</Card.Title>
        <Card.Title> Rating:{imdbRating}</Card.Title>
        <div>{Plot}</div>
        {inSearchForm ? (
          <div className="d-flex justify-content-between mt-3">
            {/* ()=> func() invoking a function on click */}
            <Button
              variant="primary"
              onClick={() => movieSelect({ ...movie, mood: "happy" })}
            >
              Happy
            </Button>
            <Button
              variant="danger"
              onClick={() => movieSelect({ ...movie, mood: "romantic" })}
            >
              Romantic
            </Button>
          </div>
        ) : (
          <div className="d-grid gap-2">
            <Button
              variant="danger"
              size="lg"
              onClick={() => deleteMovie(movie.imdbID)}
            >
              Delete Movie
            </Button>
          </div>
        )}
      </Card.Body>
    </Card>
  );
  // <Card style={{ width: "18rem" }}>
  //   <Card.Img variant="top" src={movie.Poster} />
  //   <Card.Body>
  //     <Card.Title>{Title}</Card.Title>
  //     <Card.Title> Rating:{imdbRating}</Card.Title>
  //     {inSearchForm ? (
  //       <div className="d-flex justify-content-between mt-3">
  //         {/* So that it won't invokce on the loading time and ony invoke when we click*/}
  //         <Button
  //           variant="primary"
  //           onClick={() => movieSelect({ ...movie, mood: "happy" })}
  //         >
  //           Happy
  //         </Button>
  //         <Button
  //           variant="danger"
  //           onClick={() => movieSelect({ ...movie, mood: "romantic" })}
  //         >
  //           Romantic
  //         </Button>
  //       </div>
  //     ) : (
  //       <div className="d-grid gap-2">
  //         <Button
  //           variant="danger"
  //           size="lg"
  //           onClick={() => deleteMovie(movie.imdbID)}
  //         >
  //           Delete Movie
  //         </Button>
  //       </div>
  //     )}
  //   </Card.Body>
  // </Card>
};

export default CustomList;
