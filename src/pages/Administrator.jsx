import React, { useReducer } from 'react'
import Header from '../components/Header'
import { OrderContext } from "../contexts/orderContext";
import { initialOrderState, OrderReducer } from "../reducers/orderReducer";

const Administrator = ({Children}) => {
  const [Orderstate, orderDispatch] = useReducer(OrderReducer, initialOrderState)

  return (
    <>
    <OrderContext.Provider value={{Orderstate: Orderstate, orderDispatch}}> 
    <Header />
    <div className="signInContainerLoginPage">
      <div className="columnLoginPage">
        {Children}
      </div>
    </div>
    </OrderContext.Provider>
    </>
  )
}

export default Administrator