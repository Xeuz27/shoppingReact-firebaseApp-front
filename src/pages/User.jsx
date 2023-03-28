import React, { useContext } from "react";
import {
  Button,
  Card,
  FormControl,
  FormGroup,
  FormLabel,
  Alert,
  Form,
} from "react-bootstrap";
import { AuthContext } from "../contexts/authContext";
import Header from "../components/Header";
import { useForm } from "../hooks/UseForm";
import { updateUserPassword, updateUserEmail, updateDisplayName } from "../firebaseConfig";
import { AuthActions } from "../constants/actions";
import { firebaseContext } from "../contexts/firebaseContext";

export const User = () => {
  const { auth } = useContext(firebaseContext);
  const { Authstate } = useContext(AuthContext);
  const { dispatch } = useContext(AuthContext);
  let { errorMessage } = Authstate;
  let { successMessage } = Authstate;

  const formData = {
    name: "",
    lastName: "",

    user: "",
    email: "",
    password: "",
    password2: "",
  };
  const {
    name,
    lastName,

    email,
    password,
    password2,
    onInputChange,
    onResetForm,
  } = useForm(formData);

  const handleClick = (e) => {
    e.preventDefault();
    if (password !== password2) {
      return dispatch({
        type: AuthActions.actionFailed,
        errorMessage: "contraseñas no coinciden",
      });
    }
    if (password.length >= 6) {
      updateUserPassword(auth.currentUser, password);
      dispatch({
        type: AuthActions.actionSuccess,
        successMessage: "Contraseña Actualizada, por favor logeate de nuevo",
      });
      setTimeout(() => {
        dispatch({type: AuthActions.logOut})
      }, 3000);
    }
    if (email && email !== Authstate.email) {
      updateUserEmail(auth.currentUser, email);
      dispatch({
        type: AuthActions.actionSuccess,
        successMessage: "correo Actualizado, por favor logeate de nuevo",
      });
      setTimeout(() => {
        dispatch({type: AuthActions.logOut})
      }, 3000);
    }
    if (name && lastName) {
      updateDisplayName(auth.currentUser, {displayName: name+' '+lastName, photoUrl: null })
      dispatch({ type: AuthActions.setdisplayName, displayName: name+' '+lastName });
      dispatch({
        type: AuthActions.actionSuccess,
        successMessage: "usuario Actualizado",
      });
    }
    onResetForm();
  };

  return (
    <>
      <Header />
      <div className="signInContainerLoginPage">
        <div className="columnLoginPage">
          

          <Card className="p-0">
            <Card.Body>
            <h2 className="text-center p-2 bg-acqua mb-0">perfil de usuario</h2>
              {errorMessage && <Alert variant="danger"> {errorMessage} </Alert>}
              {successMessage && (
                <Alert variant="success"> {successMessage} </Alert>
              )}

              <Form className="p-3">
                
                <FormGroup>
                  <FormLabel>Nombre Completo</FormLabel>
                  <FormControl
                    placeholder={"alejandro josé"}
                    type="text"
                    name="name"
                    value={name}
                    onChange={onInputChange}
                  />
                </FormGroup>

                <FormGroup>
                  <FormLabel>Apellidos</FormLabel>
                  <FormControl
                    placeholder={"Pérez Mendoza"}
                    type="text"
                    name="lastName"
                    value={lastName}
                    onChange={onInputChange}
                  />
                </FormGroup>

                <FormGroup>
                  <FormLabel>Cambiar Correo</FormLabel>
                  <FormControl
                    placeholder="Deja en Blanco para Ignorar"
                    type="email"
                    name="email"
                    value={email}
                    onChange={onInputChange}
                  />
                </FormGroup>

                <FormGroup>
                  <FormLabel>Cambiar Contraseña</FormLabel>
                  <FormControl
                    placeholder="******* | Deja en Blanco para Ignorar"
                    type="password"
                    name="password"
                    value={password}
                    onChange={onInputChange}
                  />
                </FormGroup>

                <FormGroup>
                  <FormLabel>Confirmar Contraseña</FormLabel>
                  <FormControl
                    placeholder="******* | Deja en Blanco para Ignorar"
                    type="password"
                    name="password2"
                    value={password2}
                    onChange={onInputChange}
                  />
                </FormGroup>

                <Button onClick={handleClick}>verificar</Button>
              </Form>
            </Card.Body>
          </Card>
        </div>
      </div>
    </>
  );
};
