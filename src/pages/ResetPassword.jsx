import React, { useContext } from "react";
import Header from "../components/Header";

import { Form, Button, Card, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";

import { AuthContext } from "../contexts/authContext";
import { useForm } from "../hooks/UseForm";
import { AuthActions } from "../constants/actions";
import { resetPassword } from "../firebaseConfig";

export const ResetPassword = () => {
  const { Authstate } = useContext(AuthContext);
  const { dispatch } = useContext(AuthContext);
  let { errorMessage } = Authstate;
  let { successMessage } = Authstate;
  let { isLoading } = Authstate;

  const formData = {
    email: "",
  };
  const { email, onResetForm, onInputChange } = useForm(formData);

  async function handleSubmit(e) {
    dispatch({ type: AuthActions.checking });
    e.preventDefault();

    try {
      await resetPassword(email);
      dispatch({ type: AuthActions.actionSuccess, successMessage: 'Por Favor Revise su Correo Electronico' });
      onResetForm();
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
              <h2 className="text-center p-2 bg-acqua mb-0">Reinicio de Contraseña</h2>
              {!!errorMessage === true ? (
                <Alert
                  style={{ marginInline: "auto", width: "50%" }}
                  className="text-center mt-3 mb-0"
                  variant="danger"
                >
                  {errorMessage}
                </Alert>
              ) : null}
              {!!successMessage === true ? (
                <Alert
                  style={{ marginInline: "auto", width: "50%" }}
                  className="text-center mt-3 mb-0"
                  variant="success"
                >
                  {successMessage}
                </Alert>
              ) : null}
              <Form
                className={errorMessage || successMessage ? "p-3 pt-0" : "p-3"}
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

                <Button disabled={isLoading} className="w-100" type="submit">
                  Enviar
                </Button>
              </Form>
              
              <div className="w-100 text-center mb-3">
                No tienes una cuenta? <Link to="/signup">Regístrate</Link>
              </div>
            </Card.Body>
          </Card>
        </div>
      </div>
    </>
  );
};
