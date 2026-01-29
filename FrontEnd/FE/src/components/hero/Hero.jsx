import "./hero.css";
import { useContext } from "react";
import { PostContext } from "../../context/PostContext";
import CardPost from "../cardPost/CardPost";
import { Container, Row, Col } from "react-bootstrap";
const Hero = () => {
  const { allPosts, setAllPosts } = useContext(PostContext);

  console.log(allPosts);
  return (
    <>
      <Container>
        <Row className="justify-content-between mt-3">
          <Col xs={6} md={8} xl={9}>
            {allPosts.slice(0, 20).map((post) => (
              <CardPost
                key={post._id}
                title={post.title}
                cover={post.cover}
                author={post.author}
                content={post.content}
              ></CardPost>
            ))}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Hero;
