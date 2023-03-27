import React, { useContext } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";
import Header from "../components/Header";
import { AuthContext } from "../contexts/authContext";
import { login, singInWithGoogle } from "../firebaseConfig";
import { useForm } from "../hooks/UseForm";
import { AuthActions } from "../constants/actions";

export default function Login() {
  const Navigate = useNavigate();
  const { Authstate } = useContext(AuthContext);
  const { dispatch } = useContext(AuthContext);

  const formData = {
    email: "",
    password: "",
  };

  let { errorMessage } = Authstate;
  let { isLoading } = Authstate;
  const { email, password, onInputChange, onResetForm } = useForm(formData);

  async function handlegoogleSignin (e) {
    dispatch({type: AuthActions.checking})
    e.preventDefault() 
    await singInWithGoogle()
  }


  async function handleSubmit(e) {
    e.preventDefault();
    dispatch({ type: AuthActions.checking });
    try {
      const logInResponse = await login(email, password);
      dispatch({ type: AuthActions.logIn, user: logInResponse.user });
      onResetForm();
      Navigate("/profile");
    } catch (error) {
      dispatch({ type: AuthActions.actionFailed, error: error.code });
    }
  }

  return (
    <>
      <Header />
      <div className="signInContainerLoginPage">
        <div className="columnLoginPage">
          <Card>
            <Card.Body className="p-0">
              <h2 className="text-center p-2 bg-acqua mb-0">Inicia Sesión</h2>
              {!!errorMessage === true ? (
                <Alert
                  style={{ marginInline: "auto", width: "50%" }}
                  className="text-center mt-3 mb-0"
                  variant="danger"
                >
                  {errorMessage}
                </Alert>
              ) : null}
              <Form
                className={errorMessage ? "p-3 pt-0" : "p-3"}
                onSubmit={handleSubmit}
              >
                <Form.Group className="mb-4" id="email">
                  <Form.Label>Correo</Form.Label>
                  <Form.Control
                    placeholder="tuCorreo@dominio.com"
                    type="email"
                    required
                    name="email"
                    value={email}
                    onChange={onInputChange}
                  ></Form.Control>
                </Form.Group>
                <Form.Group className="mb-4" id="password">
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
                <Button disabled={isLoading} className="w-100" type="submit">
                  Inicia sesión
                </Button>
                <Button onClick={handlegoogleSignin}className="w-100 btn-danger mt-3" type="submit">
                  Inicia sesión con Google
                </Button>
              </Form>
              <div className="w-100 text-center mb-3">
                <Link to="/password-forget">Olvidaste la Contraseña?</Link>
              </div>
              <div className="w-100 text-center mb-3">
                No tienes una cuenta? <Link to="/signup">Regístrate</Link>
              </div>
            </Card.Body>
          </Card>
        </div>
      </div>
    </>
  );
}
