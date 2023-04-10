import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";

export default function Locker() {
  return (
    <>
            {/* check typos  */}

      <Header />
      <div className="previewContainer previewContainerModifier">
        <main className="container">
          <div className="content">
            <h1>Servicio de Casillero</h1>
            <p>
              El servicio de casillero es completamente GRATIS. Con{' '}
              <Link to="/home">PorTuCompraUSA</Link> tendras una dirección en
              USA para recibir tus compras y reenviarlas a tu destino.
            </p>
            <h2>Cómo?</h2>
            <p>
              - Contactanos via Whatsapp para proporcionarte tu dirección en
              USA.
            </p>
            <p>
              - Compra con tu tarjeta internacional en cualquier sitio web
              norteamericano y envíalo a la dirección proporcionada
              anteriormente.
            </p>
            <p>
              - Recuerda colocar tu nombre y apellido en el envío más
              PorTuCompra ejemplo:
            </p>
            <p>
              Maria Pérez (PorTuCompra). Así podremos diferenciar el paquete con
              tu nombre.
            </p>
            <p>
              - Recibiremos tus compras y se te mantendra informado vía Whatsapp
              de los articulos recibidos en nuestro almacen.
            </p>
            <p>
              - Se te consultará cuándo deséas que sea enviada la mercancía que
              recibimos y lo que contenga el interior de la caja que enviaremos
              y LISTO!
            </p>
            <p>
              - Procedemos con el pago y su caja sera envíada a tu destino el jueves
              siguiente.
            </p>
            <p>
              - Recibiremos paqueteria hasta los dias miércoles de semana de
              envio.
            </p>
          </div>
        </main>
      </div>
    </>
  );
}
