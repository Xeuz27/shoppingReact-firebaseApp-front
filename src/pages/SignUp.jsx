import React, { useContext } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";
import Header from "../components/Header";
import { AuthActions } from "../constants/actions";
import { AuthContext } from "../contexts/authContext";
import { signup } from "../firebaseConfig";
import { useForm } from "../hooks/UseForm";

export default function SignUp() {
  const Navigate = useNavigate();
  const { Authstate } = useContext(AuthContext);
  const { dispatch } = useContext(AuthContext);
  
  let { errorMessage } = Authstate;
  let { isLoading } = Authstate;

  const formData = {
    email: "",
    password: "",
    password2: "",
  };
  const { email, password, password2, onInputChange } = useForm(formData);

  async function handleSubmit(e) {
    dispatch({ type: AuthActions.checking });
    e.preventDefault();

    if (password !== password2) {
      dispatch({
        type: AuthActions.actionFailed,
        error: "Contraseñas no coinciden",
      });
      return;
    }

    try {
      // todo: check if the response is the same as login, to doubleckeck what is sent to reducer from the sign up function
      const SignUpResponse = await signup(email, password);
      dispatch({ type: AuthActions.logIn, user: SignUpResponse.user });
      Navigate("/user");
    } catch (error) {
      dispatch({ type: AuthActions.logInFailed, error: error.code });
    }
  }

  return (
    <>
      <Header />
      <div className="signInContainerLoginPage">
        <div className="columnLoginPage">
          <Card>
            <Card.Body className="p-0">
              <h2 className="text-center p-2 bg-acqua mb-0">Registro</h2>
              {/* {error && <Alert variant="danger"> {error} </Alert>} */}
              {!!errorMessage === true ? (
                <Alert
                  style={{ marginInline: "auto", width: "50%" }}
                  className="text-center mt-3 mb-0"
                  variant="danger"
                >
                  {errorMessage}
                </Alert>
              ) : null}
              <Form className={errorMessage ? "p-3 pt-0" : "p-3"} onSubmit={handleSubmit}>
                <Form.Group className="mb-3" id="email">
                  <Form.Label>Correo</Form.Label>
                  <Form.Control
                    placeholder="tuCorreo@gmail.com"
                    type="email"
                    required
                    name="email"
                    value={email}
                    onChange={onInputChange}
                  ></Form.Control>
                </Form.Group>
                <Form.Group className="mb-3" id="password">
                  <Form.Label>Contraseña</Form.Label>
                  <Form.Control
                    placeholder="*******"
                    type="password"
                    required
                    name="password"
                    value={password}
                    onChange={onInputChange}
                  ></Form.Control>
                </Form.Group>
                <Form.Group className="mb-3" id="password2">
                  <Form.Label>Confirma la Contraseña</Form.Label>
                  <Form.Control
                    placeholder="*******"
                    type="password"
                    required
                    name="password2"
                    value={password2}
                    onChange={onInputChange}
                  ></Form.Control>
                </Form.Group>

                <Button disabled={isLoading} className="w-100" type="submit">
                  Registrarse
                </Button>
              </Form>

              <div className="w-100 text-center mb-3">
                Ya tienes una cuenta? <Link to="/login">Inicia Sesión</Link>
              </div>
            </Card.Body>
          </Card>
        </div>
      </div>
    </>
  );
}
