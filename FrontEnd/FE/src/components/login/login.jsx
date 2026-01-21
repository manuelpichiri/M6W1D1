import "./loginStyle.css";
import { Container, Row, Col } from "react-bootstrap";
import { InputText } from "primereact/inputtext";
import { useState } from "react";
import { FloatLabel } from "primereact/floatlabel";
import { Button } from "primereact/button";
import { Password } from "primereact/password";
const Login = () => {
  const [userValue, setUserValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  console.log(userValue);
  console.log(passwordValue);
  return (
    <>
      <Container>
        <Row>
          <Col
            xs={6}
            md={6}
            className=" d-flex justify-content-center align w-100 h-100 "
          >
            <div className="bg-white w-50 h-100 p-4 rounded-3 ">
              <div className="flex justify-content-center ">
                <FloatLabel>
                  <InputText
                    id="username"
                    value={userValue}
                    onChange={(e) => setUserValue(e.target.value)}
                  />
                  <label htmlFor="username">Username</label>
                </FloatLabel>
              </div>
              <div className="flex justify-content-center mt-4 ">
                <FloatLabel>
                  <Password
                    inputId="password"
                    value={passwordValue}
                    onChange={(e) => setPasswordValue(e.target.value)}
                  />
                  <label htmlFor="password">Password</label>
                </FloatLabel>
              </div>
              <div className="mt-3">
                <Button
                  label="Login"
                  severity="help"
                  outlined
                  className="w-50 rounded-5"
                />
              </div>
              <div className="mt-2">
                <a href="#" className="text-decoration-none">
                  Forgot Password?
                </a>
              </div>
              <div className="d-flex mt-3 justify-content-between">
                <span>Don't have an account?</span>
                <a href="#" className="text-decoration-none">
                  Sign Up
                </a>
              </div>

              <div>
                <h3>Or</h3>
              </div>
              <div>
                <span>Sign up with Social</span>
                <div className="d-flex justify-content-between">
                  <span>Google</span>
                  <span>Git</span>
                  <span>Linkedin</span>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Login;
