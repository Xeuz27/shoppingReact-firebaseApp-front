import "../index.css";
import { useState, useEffect } from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";

export default function Home() {
  const [isReadyForInstall, setIsReadyForInstall] = useState(false);

  useEffect(() => {
    window.addEventListener("beforeinstallprompt", (event) => {
      // Prevent the mini-infobar from appearing on mobile.
      event.preventDefault();
      console.log("👍", "beforeinstallprompt", event);
      // Stash the event so it can be triggered later.
      window.deferredPrompt = event;
      // Remove the 'hidden' class from the install button container.
      setIsReadyForInstall(true);
    });
  }, []);
  async function downloadApp() {
    console.log("👍", "butInstall-clicked");
    const promptEvent = window.deferredPrompt;
    if (!promptEvent) {
      // The deferred prompt isn't available.
      console.log("oops, no prompt event guardado en window");
      return;
    }
    // Show the install prompt.
    promptEvent.prompt();
    // Log the result
    const result = await promptEvent.userChoice;
    console.log("👍", "userChoice", result);
    // Reset the deferred prompt variable, since
    // prompt() can only be called once.
    window.deferredPrompt = null;
    // Hide the install button.
    setIsReadyForInstall(false);
  }
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
              {isReadyForInstall && <button onClick={downloadApp}>Descargar APP</button>}
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
