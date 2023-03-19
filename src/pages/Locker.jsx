import React from "react";
import Header from "../components/Header";

export default function Locker() {
  return (
    <>
      <Header />
      <div className="previewContainer previewContainerModifier">
        <main className="container">
          <div className="content">
            <h1>Servicio de Casillero</h1>
            <p>
              El servicio de casillero es completamente GRATIS. Con{" "}
              <a href="index.php">Portucomprausa</a> tendras una direccion en
              USA para recibir tus compras y reenviarlas a tu destino.
            </p>
            <h2>Cómo?</h2>
            <p>
              - Contactanos via Whatsapp para proporcionarte tu direccion en
              USA.
            </p>
            <p>
              - Compra con tu tarjeta internacional en cualquier sitio web
              norteamericano y envialo a la direccion proporcionada
              anteriormente.
            </p>
            <p>
              - Recuerda colocar tu nombre y apellido en el envio mas
              Portucompra ejemplo:
            </p>
            <p>
              Maria Perez (Portucompra) Asi podremos diferenciar el paquete con
              tu nombre.
            </p>
            <p>
              - Recibimos tus compras y te mantendremos informado via Whatsapp
              de los articulos recibidos en nuestro almacen.
            </p>
            <p>
              - Te consultamos cuando deseas que sea enviada la mercancia que
              recibimos y lo que contenga el interior de la caja que enviaremos
              y LISTO!
            </p>
            <p>
              - Procedemos al pago y su caja sera enviada a tu destino el jueves
              siguiente.
            </p>
            <p>
              - Recibiremos paqueteria hasta los dias miercoles de semana de
              envio.
            </p>
          </div>
        </main>
      </div>
    </>
  );
}
