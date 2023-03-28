import React, { useContext } from "react";
import {
  Button,
  Card,
  FormControl,
  FormGroup,
  FormLabel,
  Table,
} from "react-bootstrap";
import { useForm } from "../hooks/UseForm";
import { ProductActions } from "../constants/actions";
import { OrderContext } from "../contexts/orderContext";
import { createOrder } from "../APi/request";
// import { IKContext, IKUpload } from "imagekitio-react";

export default function AddOrder() {
  const { Orderstate } = useContext(OrderContext);
  const { orderDispatch } = useContext(OrderContext);
  // const [img, setimg] = useState([]);

  const formData = {
    clientId: "",
    idOrder: "",
    status: "",

    productName: "",
    descripcion: "",
    price: "",
    quantity: "",
  };
  const {
    idOrder,
    clientId,
    status,
    productName,
    descripcion,
    price,
    quantity,
    onInputChange,
    onResetForm,
  } = useForm(formData);

  const handleAddOrder = () => {
    orderDispatch({
      type: ProductActions.createOrder,
      orderId: idOrder,
      clientId: clientId,
      status: status,
    });
    onResetForm();
  };

  const handleCreateOrder = async () => {
    createOrder(idOrder, clientId, Orderstate.products);
    onResetForm();
  };

  const handleAddProduct = () => {
    orderDispatch({
      type: ProductActions.addProduct,
      name: productName,
      descripcion: descripcion,
      price: price,
      quantity: quantity,
    });
    onResetForm();
  };
  return (
    <>
      {/*  add margin top 250px to first card */}
      <Card style={{ marginTop: "480px" }}>
        <h2 className="text-center p-2 bg-acqua mb-0">Crear Paquete</h2>
        <Card.Body>
          {/* {!!errorMessage && <Alert variant="danger"> {errorMessage} </Alert>}
          {successMessage && (
            <Alert variant="success"> {successMessage} </Alert>
          )} */}
          <FormGroup className="mb-3">
            <FormLabel>Número de Paquete</FormLabel>
            <FormControl
              placeholder={
                "Números enteros o letras sin espacios o puntos ej: '85ab7f'"
              }
              type="text"
              name="idOrder"
              value={idOrder}
              onChange={onInputChange}
            />
          </FormGroup>

          <FormGroup className="mb-3">
            <FormLabel>Número de cedula del cliente</FormLabel>
            <FormControl
              placeholder={
                "Números enteros sin espacios o puntos ej: '23505303'"
              }
              type="text"
              name="clientId"
              value={clientId}
              onChange={onInputChange}
            />
          </FormGroup>

          <FormGroup className="mb-3">
            <FormLabel>status del pedido</FormLabel>
            <FormControl
              placeholder={"por comprar, comprado, por empaquetar, etc"}
              type="text"
              name="status"
              value={status}
              onChange={onInputChange}
            />
          </FormGroup>

          <Button onClick={handleAddOrder}>Agregar</Button>
        </Card.Body>
      </Card>

      <Card>
        <Card.Body>
          <FormGroup className="mb-3">
            <FormLabel>nombre de producto</FormLabel>
            <FormControl
              placeholder={"iphone 12 pro max"}
              type="text"
              name="productName"
              value={productName}
              onChange={onInputChange}
            />
          </FormGroup>
          <FormGroup className="mb-3">
            <FormLabel>descripción</FormLabel>
            <FormControl
              placeholder={
                "telefono marca apple, color negro con caja y cargador"
              }
              type="text"
              name="descripcion"
              value={descripcion}
              onChange={onInputChange}
            />
          </FormGroup>
          <FormGroup className="mb-3">
            <FormLabel>precio</FormLabel>
            <FormControl
              placeholder={"numeros enteros sin letras o espacios ej: '450'"}
              type="text"
              name="price"
              value={price}
              onChange={onInputChange}
            />
          </FormGroup>
          <FormGroup className="mb-3">
            <FormLabel>cantidad</FormLabel>
            <FormControl
              placeholder={
                "numeros enteros o letras sin espacios o puntos ej: '12'"
              }
              type="text"
              name="quantity"
              value={quantity}
              onChange={onInputChange}
            />
          </FormGroup>
          {/* <FormGroup className="mb-3">
            <FormLabel>subir foto del producto</FormLabel>
            <FormControl
              placeholder={"por favor seleccione una foto si esta disponible"}
              type="file"
              onChange={setimg}
              name="file"
              id="file"
              accept="image/png,image/jpeg"
            />
            <IKContext publicKey="your_public_api_key" authenticationEndpoint="https://www.your-server.com/auth">
          // Simple file upload and response handling
          <IKUpload
            onError={onError}
            onSuccess={onSuccess}
          /> </IKContext>
          </FormGroup> */}
          <Button onClick={handleAddProduct}> agregar al paquete</Button>
        </Card.Body>
      </Card>

      <Card>
        <Card.Body>
          <Button onClick={handleCreateOrder} className="w-100 btn btn-primary">
            guardar paquete
          </Button>
        </Card.Body>
      </Card>

      {Orderstate.products.length > 0 ? (
        <div className="tableContainer">
          <Table className="paleBlueRows">
            <thead>
              <tr>
                <th>nombre de producto</th>
                <th>descripcion</th>
                <th>precio</th>
                <th>cantidad</th>
                <th>foto</th>
              </tr>
            </thead>
            <tbody>
              {Orderstate.products.map((product) => (
                <tr>
                  <td>{product.name}</td>
                  <td>{product.descripcion}</td>
                  <td>{product.price} $</td>
                  <td>{product.quantity} UND</td>
                  <td>{product.photourl}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      ) : null}
    </>
  );
}
