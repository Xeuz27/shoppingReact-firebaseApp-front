import React from 'react'
import { Nav } from "react-bootstrap";

export default function PackageTable(data) {

    if (data.packageItems.length !== 0 ) {
        return ( 
            <div className='signInContainer'>

                    <h2> Lista de Productos </h2>
                <div className='tableContainer'>
                    <table className="paleBlueRows">
                        <thead>
                            <tr>
                                <th> # de pedido </th>
                                <th> # de cédula </th>
                                <th> producto </th> 
                                <th> foto </th>
                            </tr>
                        </thead>

                        <tbody>
                            {data.packageItems.map( (element, index) => (
                                <tr key={index}>
                                    <td> {element.idPackage}</td>
                                    <td> {element.idUser}</td>
                                    <td> {element.productName}</td> 
                                    <td> <img src={element.productPhoto} alt='foto del producto' /></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div> 
                    <button>
                        <Nav.Link href="/order">Atras</Nav.Link>
                    </button>
            </div>
        )
    } else {
        return 
    }

  
}
