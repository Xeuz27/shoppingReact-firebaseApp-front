import React, { useContext } from "react";
import {
  Button,
  Card,
  FormControl,
  FormGroup,
  FormLabel,
  Alert,
} from "react-bootstrap";
import { AuthContext } from "../contexts/authContext";
import { useForm } from "../hooks/UseForm";
import { AuthActions } from "../constants/actions";
import { createUser } from "../APi/request";

export default function AddUser() {
  const { Authstate } = useContext(AuthContext);
  const { dispatch } = useContext(AuthContext);
  let { errorMessage } = Authstate;
  let { successMessage } = Authstate;

  const formData = {
    id: "",
    displayName: '',
  };
  const { displayName, id, onInputChange, onResetForm } = useForm(formData);


  const handleClick = async () => {
    const response = await createUser(id, displayName);
    if( response.data.results === 200  ) {
      dispatch({
        type: AuthActions.actionSuccess,
        successMessage: "Usuario agregado con exito",
      })
      onResetForm();
    } else if (response.data.results === 500) (
      dispatch({
        type: AuthActions.actionFailed,
        error: "ER_DUP_ENTRY",
      })
    )
  };
  return (
    <Card>
      <h2 className="text-center p-2 bg-acqua mb-0">crear Usuario</h2>
      <Card.Body>
        {!!errorMessage && <Alert variant="danger"> {errorMessage} </Alert>}
        {successMessage && <Alert variant="success"> {successMessage} </Alert>}
        <FormGroup className="mb-3">
          <FormLabel>Numero de Cedula</FormLabel>
          <FormControl
            placeholder={"numeros enteros sin espacios o puntos ej: '28243491'"}
            type="text"
            name="id"
            required
            value={id}
            onChange={onInputChange}
          />
        </FormGroup>

        <FormGroup className="mb-3">
          <FormLabel>Nombre Completo</FormLabel>
          <FormControl
            placeholder={"alejandro Perez Mendoza"}
            type="text"
            required
            name="displayName"
            value={displayName}
            onChange={onInputChange}
          />
        </FormGroup>

        <Button onClick={handleClick}>Agregar</Button>
      </Card.Body>
    </Card>
  );
}
