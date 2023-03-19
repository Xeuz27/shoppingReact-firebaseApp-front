import React, { useState } from 'react';
import { getUsersData } from '../APi/request';

export default function UsersTable() {
    
    const [usersData, setUsersData] = useState(null);
    async function getData () {
        const data = await getUsersData()
        setUsersData(data)
    }
    
    if (usersData === null ) {
        return ( 
            <div className='signInContainer'> 
                <button onClick={getData}> get data </button>
            </div>
            )
    } else {
        return (
                <div className='signInContainer'>
                    <h2> Lista de Usuarios </h2>
                    <div className='tableContainer'>
                        <table className="paleBlueRows">
                            <thead>
                                <tr>
                                    <th> # de cédula </th>
                                    <th> nombre </th>
                                    <th> apellido </th> 
                                    <th> correo </th>
                                </tr>
                            </thead>
                            <tbody>
                                {usersData.map( (element, index) => (
                                    <tr key={index}>
                                        <td> {element.id}</td>
                                        <td> {element.firstName}</td>
                                        <td> {element.lastName}</td>
                                        <td> {element.email}</td>
                                    </tr>
                                ))}
                            </tbody> 
                        </table>
                    </div>          
                </div>        
        )
    }                                                        
}
                        