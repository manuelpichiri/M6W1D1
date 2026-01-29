import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./notFoundPage.css";

const NotFoundPage = () => {
  return (
    <>
      <Container>
        <Row className="justify-content-center align-items-center">
          <Col xs={6} md={6} className="container-center">
            <div className="bg-white rounded-4">
              <span className="span-bold">404</span>
              <h2>Page Not Found</h2>
              <p>
                The page you are looking for doesn't exist or has benn moved
              </p>
              <Link to={`/Homepage`} className="btn btn-color mb-2">
                GO HOME
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default NotFoundPage;
