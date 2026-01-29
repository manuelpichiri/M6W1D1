import "./cardPost.css";
import { Card, Button } from "react-bootstrap";

const CardPost = ({ title, cover, author, content }) => {
  console.log(title);
  return (
    <>
      <Card className="card-with ">
        <div>
          <Card.Img variant="top" src={cover} className="img-card " />
        </div>

        <Card.Body>
          <Card.Title className="ellipsis-card">{title}</Card.Title>
          <Card.Text>{content}</Card.Text>
          <Card.Footer>
            <div className="d-flex align-items-center gap-3">
              <img src={cover} className="avatar-card" />
              <div className="d-flex flex-column">
                <a href="#">{author}</a>
                <span>luglio 6 2025</span>
              </div>
            </div>
          </Card.Footer>
        </Card.Body>
      </Card>
    </>
  );
};

export default CardPost;
