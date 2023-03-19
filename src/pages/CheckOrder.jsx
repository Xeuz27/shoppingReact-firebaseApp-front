
import React from 'react'
import { useState } from 'react';
import { getPackageData } from '../APi/request';
import Header from '../components/Header';
import PackageTable from '../components/packageTable'

export default function CheckOrder() {
    // axios.defaults.withCredentials = false;
    
    const [packageItems, setPackageItems] = useState(null);
    // const [usersData, setUsersData] = useState(null);
    const [id, setId] = useState("");
    const [idOrder, setIdOrder] = useState("");
    

    const handleOrder = async (e) => {
        e.preventDefault();
        const data = await getPackageData(id, idOrder);
        setPackageItems(data);
    }

    return (
        <>
            <Header />
            {packageItems === null &&
               (<div className='signInContainer'>
                    <div className="column" id="orderForm">
                        <div>
                            <h3>Ingresa el numero de tu Pedido</h3>
                            <span>para ver su estado</span>
                        </div>
                        <form method="POST" onSubmit={handleOrder} >
                            <label>cédula de identidad</label>
                            <input onChange={(val) => setId(val.target.value)} type="text" placeholder="1222333" name="id" id="id" required />
                            <label>número de pedido</label>
                            <input onChange={(val) => setIdOrder(val.target.value)} type="text" placeholder="1A5Z32" name="idOrder" id="idOrder" required />
                            <input type="submit" value="Enviar" name="submitButton" /> 
                            {/* <button onClick={handleClick}>get users data</button>
                            <button onClick={handlePost}> post users data</button>  */}
                        </form>
                        <a href="register.php" className="signInMessage">Todavia no tienes un Pedido? Compra Aqui</a>
                    </div>
                </div>)}
            {packageItems && (<PackageTable packageItems={packageItems}  />)}
        </>
    )
}
