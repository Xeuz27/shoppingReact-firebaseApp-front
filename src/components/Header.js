import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../imgs/logoyoha.jpg";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../contexts/authContext";
import { Roles } from "../constants/roles";
import { logout } from "../firebaseConfig/functions";
import { AuthActions } from "../constants/actions";
import { useCheckAuth } from "../hooks/UseCheckAuth";


export default function Header() {
  const Navigate =  useNavigate()
  const {dispatch} = useContext(AuthContext) 
  const {Authstate} = useContext(AuthContext); 
  useCheckAuth()
  const handleLogOut = async () => {
    await logout()
    dispatch( {type: AuthActions.logOut} )
    Navigate('/services')
  }
  return (
    <>
      <div className="topBar">
        <div className="logoContainer logo">
          <a href="/home">
            <img src={logo} alt="portucomprausa logo" />
          </a>
        </div>

        <ul className="navLinks">
          
          {/* {Authstate.role === Roles.admin ? <li><Link to='/administrator'>administrator</Link></li> : null} */}
           {Authstate.role === Roles.user ? <Link to="/user">
            <li>user</li>
          </Link> : null} 
          <li>
            <Link to="/home">inicio</Link>
          </li>
          <li>
            <Link to="/order">Ver Pedido</Link>
          </li>
          {/* todo: create shopping component and navlink */}
          {/* <li>Hacer Compras</li> */}
          <li>
            <Link to="/services">Nuestros Servicios</Link>
          </li>
          <li><Link to="/locker">Servicio de Casillero</Link></li>
          {!!Authstate.email ? <li><button onClick={handleLogOut}>sign out</button></li>: <li> <Link to='/login'>Log In</Link> </li>}
        </ul>

        <ul className="rightItems">
          <li>
            <a href="seach.php">
              <i className="fa-solid fa-magnifying-glass"></i>
            </a>
          </li>
          <li>
            <a href="profile.php">
              <i className="fa-solid fa-user"></i>
            </a>
          </li>
          <li>
            <a href="logout.php">
              <i className="fa-solid fa-sign-out-alt"></i>
            </a>
          </li>
          <li>
            <input type="checkbox" id="click" />
            <label htmlFor="click" className="menu-btn">
              <i className="fa-solid fa-bars"></i>
            </label>
          </li>
        </ul>
      </div>

      {/* <div style={{
      backgroundColor:'#f2f2f2' 
    }}>
    <Nav  classNameName="justify-content-end">
      <Nav.Item>
        <Nav.Link href="/locations">locations</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/about">sobre nosotros</Nav.Link>
      </Nav.Item>
    </Nav>
    </div> */}
    </>
  );
}
