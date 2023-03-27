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
                <button onClick={getData}> get data </button>
            )
    } else {
        return (
                <>
                    <h2> Lista de Usuarios </h2>
                    <div className='tableContainer'>
                        <table className="paleBlueRows">
                            <thead>
                                <tr>
                                    <th> # de cédula </th>
                                    <th> nombre completo </th>
                                    <th> correo </th>
                                    <th> fecha de registro </th>
                                </tr>
                            </thead>
                            <tbody>
                                {usersData.map( (element, index) => (
                                    <tr key={index}>
                                        <td> {element.userId}</td>
                                        <td> {element.displayName}</td>
                                        <td> {element.email}</td>
                                        <td> {element.signUpDate}</td>
                                    </tr>
                                ))}
                            </tbody> 
                        </table>
                    </div>          
                </>        
        )
    }                                                        
}
                        