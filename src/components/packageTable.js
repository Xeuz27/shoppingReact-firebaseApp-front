import React from "react";
import { useNavigate } from "react-router-dom";


export default function PackageTable(data) {
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
                <th> precio </th>
                <th> cantidad </th>
                <th> foto </th>
              </tr>
            </thead>

            <tbody>
              {data.packageItems.map((item, index) => (
                <tr key={index}>
                  <td> {item.name}</td>
                  <td> {item.descripcion}</td>
                  <td> {item.price} $</td>
                  <td> {item.quantity} UND</td>
                  <td>
                    <img src={item.productPhoto} alt={`foto de ${item.name}`} />
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
