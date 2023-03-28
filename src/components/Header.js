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
  let cerrado = true;
  let menu = document.getElementById("enlaces");
  let abrirMenu = document.getElementById("open");

  const Navigate = useNavigate();
  const { dispatch } = useContext(AuthContext);
  const { Authstate } = useContext(AuthContext);
  useCheckAuth();
  const handleLogOut = async () => {
    await logout();
    dispatch({ type: AuthActions.logOut });
    Navigate("/home");
  };

  function apertura() {
    if (cerrado) {
      menu.style.width = "180px";
      cerrado = false;
    } else {
      menu.style.width = "0%";
      menu.style.overflow = "hidden";
      cerrado = true;
    }
  }
  window.addEventListener("resize", function () {
    if (this.window.visualViewport.width >= 700) {
      menu.style.removeProperty("width");
      menu.style.removeProperty("overflow");
    }
  });
  window.addEventListener("click", function(e) {
    if (cerrado === false) {
        let span = document.querySelector("span")
        if (e.target !== span && e.target !== abrirMenu) {
            menu.style.width = "0%"
            menu.style.overflow = "hidden";
            cerrado = true
        }
    }
})
  return (
    <>
      <header id="header">
        <nav id="nav" className="nav1">
          <div className="contenedor-nav">
            <div className="logo">
              <Link to="/home">
                <img src={logo} alt="portucomprausa logo" />
              </Link>
            </div>
            <div className="enlaces" id="enlaces">
              
              {Authstate.role === Roles.user || Authstate.role === Roles.admin ? (
                <>
                  <li>
                    <Link to="/profile">Perfil de Usuario</Link>
                  </li>
                </>
              ) : null}
              <li>
                <Link to="/home">Inicio</Link>
              </li>
              <li>
                <Link to="/order">Ver Pedido</Link>
              </li>
              <li>
                <Link to="/services">Nuestros Servicios</Link>
              </li>
              <li>
                <Link to="/locker">Servicio de Casillero</Link>
              </li>
            
              {Authstate.role === Roles.admin ? <>
              <li><Link to="/administrator/getusers"> Ver usuarios</Link></li>
              <li><Link to="/administrator/order"> Crear paquete</Link></li>
              </>: null}
              {!!Authstate.email ? (
                <li>
                  <Link to="/home" onClick={handleLogOut}>
                    Sign Out
                  </Link>
                </li>
              ) : (
                <li>
                  <Link to="/login">Log In</Link>
                </li>
              )}
              {/* todo: create shopping component and navlink */}
              {/* <li>Hacer Compras</li> */}
            </div>
            <div onClick={apertura} className="icono" id="open">
              <span>&#9776;</span>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
/* <div className="topBar">
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
      </div> */
/* <div style={{
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
    </div> */
