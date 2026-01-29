import "./loginStyle.css";
import { Container, Row, Col, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const Login = () => {
  const [logged, setLogged] = useState(false);
  const navigate = useNavigate();
  const [userValue, setUserValue] = useState({ email: "", password: "" });

  const login = async () => {
    try {
      const response = await fetch("http://localhost:4545/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userValue),
      });
      const data = await response.json();
      if (data.token) {
        localStorage.setItem("token", data.token);
        setLogged(true);
      } else {
        return;
      }
      console.log("login ok:", data);
      return data;
    } catch (error) {
      console.log("Errore login", error.message);
    }
  };

  const reidirectAfterLogin5seconds = () => {
    setTimeout(() => {
      navigate(`/Homepage`);
    }, 5000);
  };

  const submitOn = async (e) => {
    e.preventDefault();
    await login();
  };

  const loginWithGitHub = () => {
    window.location.href = `${import.meta.env.VITE_BE_URL}/github`;
  };
  const loginWithGoogle = () => {
    window.location.href = `${import.meta.env.VITE_BE_URL}/google`;
  };

  return (
    <Container>
      <Row>
        <Col
          xs={6}
          md={6}
          className=" d-flex justify-content-center align w-100 h-100 "
        >
          <div className="bg-white w-50 h-100 p-4 borderLogin ">
            <div className="flex justify-content-center ">
              <Form onSubmit={submitOn}>
                <Form.Group>
                  <Form.Label className="d-flex justify-content-center">
                    username/email
                  </Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="example@example.com"
                    value={userValue.email}
                    onChange={(e) =>
                      setUserValue({ ...userValue, email: e.target.value })
                    }
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label htmlFor="inputPassword">Password</Form.Label>
                  <Form.Control
                    type="password"
                    id="inputPassword"
                    value={userValue.password}
                    aria-describedby="passwordHelpBlock"
                    onChange={(e) =>
                      setUserValue({ ...userValue, password: e.target.value })
                    }
                  />
                </Form.Group>
                <button
                  type="submit"
                  className="btn btn-info "
                  onClick={() => {
                    if (logged) reidirectAfterLogin5seconds();
                  }}
                >
                  Login
                </button>
              </Form>
            </div>
          </div>
        </Col>
        <Col
          xs={6}
          md={6}
          className=" d-flex justify-content-center align w-100 h-100 "
        >
          <div className="bg-white w-50 h-100 p-4 borderBottomLogin ">
            <div>
              <a href="#" className="text-decoration-none">
                Forgot Password?
              </a>
            </div>
            <div className="d-flex mt-3 gap-3 justify-content-center">
              <span>Don't have an account?</span>
              <a href="#" className="text-decoration-none">
                Sign Up
              </a>
            </div>

            <div>
              <h3>Or</h3>
            </div>
            <div className="w-100">
              <span>Sign up with Social</span>
              <div className="d-flex justify-content-center gap-2 w-100">
                <button className="btn" type="button" onClick={loginWithGoogle}>
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7AvKmIcAF9QUdS96opCZooZxVua16crDwkg&s"
                    className="icon-login-provider"
                  />
                </button>
                <button className="btn" type="button" onClick={loginWithGitHub}>
                  <img
                    className="icon-login-provider"
                    src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"
                  />
                </button>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
