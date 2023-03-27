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
import { Roles } from "../constants/roles";
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

  // add functions to update user data,
  // user is only verifyable by signing in with a google pop up
  //ONLY AVAILABLE FUNCTION IS TO RESET PASSWORD
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
    }
    if (email && email !== Authstate.email) {
      updateUserEmail(auth.currentUser, email);
      dispatch({
        type: AuthActions.actionSuccess,
        successMessage: "correo Actualizado, por favor logeate de nuevo",
      });
    }
    if (name && lastName) {
      updateDisplayName(auth.currentUser, {displayName: name+' '+lastName, photoUrl: null })
      dispatch({ type: AuthActions.setdisplayName, displayName: name+' '+lastName });
      dispatch({
        type: AuthActions.actionSuccess,
        successMessage: "usuario Actualizado",
      });
    }

    // try {

    //   // if (!!Authstate.email) {
    //   //   const sentEmail = resetPassword(Authstate.email);
    //   //   if (sentEmail) {
    //   //     dispatch({
    //   //       type: AuthActions.actionSuccess,
    //   //       successMessage: "Por Favor Revise su Correo Electronico",
    //   //     });
    //   //   }
    //   // }
    // } catch (error) {
    //   // dispatch({ type: AuthActions.actionFailed, errorMessage: error.code });
    // }
    onResetForm();
  };

  return (
    <>
      <Header />
      <div className="signInContainerLoginPage">
        <div className="columnLoginPage">
          {Authstate.role === Roles.admin ? (
            <>
              <Card id="authState">
                <ul>
                  {/* add li for first and last names properties */}
                  <li>
                    nombre Completo:
                    {!!Authstate.displayName === true ? (
                      <p>
                        {Authstate.displayName}
                      </p>
                    ) : (
                      "no disponible"
                    )}
                  </li>
                  <li>email: {Authstate.email}</li>
                  <li>
                    isVerified:
                    {Authstate.isVerified === true ? "true" : "false"}
                  </li>
                  <li>role: {Authstate.role}</li>
                </ul>
              </Card>
            </>
          ) : null}

          <Card>
            <Card.Body>
              {errorMessage && <Alert variant="danger"> {errorMessage} </Alert>}
              {successMessage && (
                <Alert variant="success"> {successMessage} </Alert>
              )}

              <Form>
                
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
