
import React, { useContext } from 'react'
import { useState } from 'react';
import { Alert } from 'react-bootstrap';
import { getPackageData } from '../APi/request';
import Header from '../components/Header';
import PackageTable from '../components/packageTable'
import { AuthActions, } from '../constants/actions';
import { AuthContext } from '../contexts/authContext';

export default function CheckOrder() {
    const { Authstate } = useContext(AuthContext);
    const { dispatch } = useContext(AuthContext);

    let { errorMessage } = Authstate;
    let { isLoading } = Authstate;
    
    const [packageItems, setPackageItems] = useState(null);
    const [id, setId] = useState("");
    const [idOrder, setIdOrder] = useState("");
    
    const handleOrder = async (e) => {
        dispatch({type: AuthActions.checking})
        e.preventDefault();
        try {
            const data = await getPackageData(id, idOrder);
            setPackageItems(data);
        } catch (error) {
            dispatch({type: AuthActions.actionFailed, error: error.code})
        }
    }
    
    return (
        <>
            <Header />
            {packageItems === null &&
               (<div className='signInContainer'>
                    <div className="column" id="orderForm">
                        <div>
                            <h3>Ingresa el número de tu Pedido</h3>
                            <span>para ver su estado</span>
                        </div>
                        {isLoading === true ? <Alert>...Loading</Alert> : null }
                        {!!errorMessage === true ? <Alert variant='danger'>{errorMessage}</Alert> : null }
                        <form method="POST" onSubmit={handleOrder} >
                            <label>cédula de identidad</label>
                            <input onChange={(val) => setId(val.target.value)} type="text" placeholder="1222333" name="id" id="id" required />
                            <label>número de pedido</label>
                            <input onChange={(val) => setIdOrder(val.target.value)} type="text" placeholder="1A5Z32" name="idOrder" id="idOrder" required />
                            <input type="submit" value="Enviar" name="submitButton" /> 
                        </form>
                        {/* shopping page isnt available yet  */}
                        {/* <a href="register.php" className="signInMessage">Todavia no tienes un Pedido? Compra Aqui</a> */}
                    </div>
                </div>)}
            {packageItems && (<PackageTable packageItems={packageItems}  />)}
        </>
    )
}
