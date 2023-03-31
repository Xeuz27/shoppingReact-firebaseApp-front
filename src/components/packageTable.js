import React from "react";
import { useNavigate } from "react-router-dom";
import { IKContext, IKImage } from "imagekitio-react";


export default function PackageTable(data) {
  const publicKey = "public_rw5MD5lD1Lg+0TkL0gHzyJLMDbI=";
  const authenticationEndpoint = "http://localhost:3001/auth";
  const urlEndpoint = "https://ik.imagekit.io/0oguwfou0i";
  const Navigate =  useNavigate()
const handleBackButton = () =>{
  Navigate('/home')
}
  if (data.packageItems.length !== 0) {
    return (
      <div className="signInContainer">
        <h2> Lista de Productos </h2>
        <div className="tableContainer">
          <table className="paleBlueRows">
            <thead>
              <tr>
                <th> producto </th>
                <th> descripcion </th>
                <th className="numeric"> precio </th>
                <th className="numeric"> cantidad </th>
                 <th> foto </th>
              </tr>
            </thead>

            <tbody>
              {data.packageItems.map((item, index) => (
                <tr key={index}>
                  <td data-title="name"> {item.name}</td>
                  <td data-title="descripcion"> {item.descripcion}</td>
                  <td data-title="price" className="numeric"> {item.price} $</td>
                  <td data-title="quantity" className="numeric"> {item.quantity} UND</td>
                  <td data-title="foto">
                    <IKContext
                      publicKey={publicKey}
                      urlEndpoint={urlEndpoint}
                      authenticationEndpoint={authenticationEndpoint}
                    >
                      <IKImage
                        publicKey={publicKey}
                        urlEndpoint={urlEndpoint}
                        path={item.photoUrl}
                        transformation={[{ height: "auto", width: 80 }]}
                        loading="lazy"
                        height="auto"
                        width="80"
                        alt={`foto de ${item.name}`}
                      />
                    </IKContext>
                    </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <button onClick={handleBackButton} className="btn btn-danger">
           Atras
        </button>
      </div>
    );
  } else {
    return;
  }
}
