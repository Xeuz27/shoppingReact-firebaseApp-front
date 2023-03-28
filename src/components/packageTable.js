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
                <th className="numeric"> precio </th>
                <th className="numeric"> cantidad </th>
                {/* <th> foto </th> */}
              </tr>
            </thead>

            <tbody>
              {data.packageItems.map((item, index) => (
                <tr key={index}>
                  <td data-title="name"> {item.name}</td>
                  <td data-title="descripcion"> {item.descripcion}</td>
                  <td data-title="price" className="numeric"> {item.price} $</td>
                  <td data-title="quantity" className="numeric"> {item.quantity} UND</td>
                  {/* <td data-title="foto">
                    <img src={item.productPhoto} alt={`foto de ${item.name}`} />
                  </td> */}
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
