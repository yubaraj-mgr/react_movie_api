import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

// why i think so that we can destructe it movie = {}
const CustomCard = ({ movie = {}, movieSelect, inSearchForm, deleteMovie }) => {
  const { Title, Poster, imdbRating } = movie;

  return (
    <Card style={{ width: "18rem" }} className="h-100">
      <Card.Img variant="top" src={movie.Poster} className="h-100" />
      <Card.Body>
        <Card.Title>{Title}</Card.Title>
        <Card.Title> Rating:{imdbRating}</Card.Title>
        {inSearchForm ? (
          <div className="d-flex justify-content-between mt-3">
            {/* So that it won't invokce on the loading time and ony invoke when we click*/}
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
};

export default CustomCard;
