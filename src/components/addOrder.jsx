import React, { useContext, useRef } from "react";
import {
  Button,
  Card,
  FormControl,
  FormGroup,
  FormLabel,
} from "react-bootstrap";
import { useForm } from "../hooks/UseForm";
import { ProductActions } from "../constants/actions";
import { OrderContext } from "../contexts/orderContext";
import { createOrder } from "../APi/request";
import { IKContext, IKUpload, IKImage } from "imagekitio-react";

export default function AddOrder() {
  const publicKey = "public_rw5MD5lD1Lg+0TkL0gHzyJLMDbI=";
  const authenticationEndpoint = "https://shopping-react-firebase-app-back.vercel.app/ikauthroute";
  const urlEndpoint = "https://ik.imagekit.io/0oguwfou0i";

  const { Orderstate } = useContext(OrderContext);
  const { orderDispatch } = useContext(OrderContext);

  const inputRefTest = useRef(null);
  const ikUploadRefTest = useRef(null);
  const onError = (err) => {
    console.log("Error", err);
  };

  const onSuccess = (res) => {
    handleAddProduct(res.url);
  };
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
    createOrder(
      Orderstate.orderId,
      Orderstate.clientId,
      Orderstate.products,
      Orderstate.status
    );
    orderDispatch({ type: ProductActions.clearState });
    onResetForm();
  };

  const handleAddProduct = (url) => {
    orderDispatch({
      type: ProductActions.addProduct,
      name: productName,
      descripcion: descripcion,
      price: price,
      quantity: quantity,
      photoUrl: url,
    });
    onResetForm();
  };
  return (
    <>
      {/*  add margin top 250px to first card */}
      {Orderstate.orderId ? null : (
        <>
          <Card>
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
        </>
      )}

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

          {Orderstate.orderId ? (
            <>
              <IKContext
                publicKey={publicKey}
                urlEndpoint={urlEndpoint}
                authenticationEndpoint={authenticationEndpoint}
              >
                <IKUpload
                  folder={"/products-folder"}
                  fileName={`${Orderstate.orderId}+${productName}.png`}
                  onError={onError}
                  onSuccess={onSuccess}
                  // onUploadProgress={onUploadProgress}
                  // onUploadStart={onUploadStart}
                  style={{ display: "none" }} // hide the default input and use the custom upload button
                  inputRef={inputRefTest}
                  ref={ikUploadRefTest}
                />
                {inputRefTest && (
                  <button
                    style={{ marginInline: "auto", display: "block" }}
                    className="btn btn-primary"
                    onClick={() => inputRefTest.current.click()}
                  >
                    añadir foto del producto
                  </button>
                )}
                {/* <p>Abort upload request</p>
        {ikUploadRefTest && <button className="btn btn-danger" onClick={() => ikUploadRefTest.current.abort()}>cancelar subir foto</button>} */}

                {/* {path === null ? null : (
          <>
            <IKImage
              publicKey={publicKey}
              urlEndpoint={urlEndpoint}
              path={path}
              transformation={[{ height: "auto", width: 100 }]}
              loading="lazy"
              height="auto"
              width="100"
            />
          </>
        )} */}
              </IKContext>
            </>
          ) : null}
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
          <table className="paleBlueRows">
            <thead>
              <tr>
                <th>nombre de producto</th>
                <th>descripcion</th>
                <th class="numeric">precio</th>
                <th class="numeric">cantidad</th>
                <th>foto</th>
              </tr>
            </thead>
            <tbody>
              {Orderstate.products.map((product) => (
                <tr>
                  <td data-title="name">{product.name}</td>
                  <td data-title="descripcion">{product.descripcion}</td>
                  <td data-title="price" class="numeric">
                    {product.price} $
                  </td>
                  <td data-title="quantity" class="numeric">
                    {product.quantity} UND
                  </td>
                  <td data-title="foto">
                    <IKContext
                      publicKey={publicKey}
                      urlEndpoint={urlEndpoint}
                      authenticationEndpoint={authenticationEndpoint}
                    >
                      <IKImage
                        publicKey={publicKey}
                        urlEndpoint={urlEndpoint}
                        src={product.photoUrl}
                        quantity="100"
                        height="auto"
                        width="60"
                      />
                    </IKContext>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : null}
    </>
  );
}
