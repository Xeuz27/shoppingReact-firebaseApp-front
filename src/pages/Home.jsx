import "../index.css";
import Header from "../components/Header";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
    {/* correct background position */}
      <Header />
      <div className="previewContainer">
        <div className="previewOverlay">
          <div className="mainDetails">
            <h1>Por Tu Compra USA</h1>
            <h2>Comprar nunca ha sido tan Fácil</h2>
            <div className="buttons">
              <button>
                <i className="fa-solid fa-boxes-packing"></i>
                <Link to="/order">Ver Pedido</Link>
              </button>
              {/* <button>
                <i className="fa-solid fa-cart-shopping"></i>
                <Link to="/shopping">Hacer Compra</Link>
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
/*

            <section class="team contenedor" id="equipo">
             <div class="reveal">
                 <h3>nuestro equipo</h3>
                 <p class="after">conoce a la gente asombrosa y creativa</p>
                 <div class="card">
                     <div class="content-card">
                         <div class="people"><img src="./assets/img/pic-1.png" alt="personauno" /></div>
                         <div class="texto-team">
                             <h4>m</h4>
                             <p>Lorem ipsum dolor sit</p>
                         </div>
                     </div>
                     <div class="content-card">
                         <div class="people"><img src="./assets/img/pic-2.png" alt="personauno" /></div>
                         <div class="texto-team">
                             <h4>k</h4>
                             <p>Lorem ipsum dolor sit</p>
                         </div>
                     </div>
                     <div class="content-card">
                         <div class="people"><img src="./assets/img/pic-3.png" alt="personauno" /></div>
                         <div class="texto-team">
                             <h4>j</h4>
                             <p>Lorem ipsum dolor sit</p>
                         </div>
                     </div>
                 </div>
             </div>
            </section> */
