import '../index.css';
import Header from '../components/Header';
import { Nav } from 'react-bootstrap';
import Footer from '../components/footer';

export default function Services (){
    return(
        <>
            <Header />
            <div className="previewContainer previewContainerModifier">
                <main className="container">
                    <div className="content">
                            <h1>Servicio de compras asistidas (Personal Shopper)</h1>
                            <p>Puedes ir de compras en la la ciudad de Orlando, aunque estes en cualquier parte del mundo.</p>
                            <p>A diario estamos publicando en el <Nav.Link href="#" target="_blank" rel="">canal de telegram </Nav.Link>allí tienes la mejor referencia de ofertas y articulos disponibles en el momento en las tiendas, es nuestra mejor herramientas para que trabajemos juntos.</p>
                            <p>Es importante que una vez definido el presupuesto, el dinero debe estar abonado en nuestra cuenta para poder comenzar la compras.</p>
                            <p>Todos nuestros servicios incluyen reempaque, a menos que la mercancia requiera un trato especial y se cobraria adicional.</p>
                            <h2>Como comprar?</h2>
                            <p>Se envian fotos y videos de la mercancia que pidas, con sus respectivos precios reales y descuentos (los precios en las tiendas no incluye impuestos que en Orlando son entre el 6.5% al 7%). Preferimos no trabajar con videollamada porque no se aprecia bien la mercancia y por texto queda en evidencia lo que estas llevando.</p>
                            <p>se Envia detalles de la compra.</p>
                            <p>Hacemos una relacion en detalle de la inversion, gastos de tiendas visitadas, para que puedas llevar control de tus gastos.</p>
                            <p>Si te sobra dinero y el monto es menor a 35$ tienes un lapso de 3 meses para utilizarlos en otra inversion o pierdes el dinero, sí el monto es superior a 35$ se realiza la devolucion por el metodo acordado con el cliente.</p>
                            <p>Tenemos varias opciones de servicios que se adaptan a tus necesidades...</p>
                            <h2>Envíos</h2>
                            <p>Nosotros contamos con <Nav.Link href="#">PortuCargaExpress</Nav.Link> como empresa de confianza para los envios, alli podemos tener mas informacion y control sobre los estatus y despachos, es por ello que le hemos depositado nuestra confianza. Si el cliente desea realizar el envio con alguna otra empresa, nuestro trabajo termina en el momento en que dejamos la mercancia en el poder de la empresa suministrada por el cliente, de allí en adelante, no nos hacemos responsables.</p>

                            <h2>Servicio de Compras asistidas sin límites</h2>

                            <p>Este es el servicio mas utilizado, ya que aqui no tenemos límites de compras por este servicio se cobra de la sieguente manera</p>

                            <ul>
                                <li>20% sobre el valor de la factura sin minimo de compras.</li>
                                <li>Sin limite de tiendas ni tiempo.</li>
                                <li>Costo de servicio minimo son 35$.</li>
                                <li>Asesoria sobre el presupuesto.</li>
                                <li>Compra sin límites y en vivo.</li>
                            </ul>
                                    
                            <p>Este es el metodo de compras asistidas mas utilizado por todos ya que, en vivo subo historias en instagram y telegram en el momento que estoy comprando, asi no tengan esa tienda en su lista puedo comprarles.</p>
                            <p>Adicional a esto no te limitamos con tu compra si te gusto algo publicado y lo viste tarde podemos volver y comprarlo (simpre y cuando no estemos en el limite de tiempo de envio).</p>

                            <h2>Servicio de compras personalizadas</h2>

                            <p><span>Este es el servicio mas utilizado por emprendedores</span></p>
                            <ul>
                                <li>Este servicio tiene un costo de 15% sobre el valor de la compra.</li>
                                <li>Visitamos solo 4 tiendas de la lista proporcionada(si la tienda no esta en la lista, la anexamos).</li>
                                <li>El tiempo de la compra durara el tiempo que esté en la tienda, si la compra la terminamos y deseas que vuelva por otros productos ya cambiaria el monto de servicio o eliminariamos una tienda de la lista.</li>
                                <li>Si entramos a una tienda que fue elegida por ti, te enviamos los productos disponibles en la tienda y no deseas nada sera una tienda menos en tu lista.</li>
                            </ul>

                            <h2>Servicio de compras online</h2>
                            <p>Este es un servicio de compras online en cualquier pagina web, sin límites de compras.</p>
                            <ul>
                                <li>Este servicio tiene un costo de 10% sobre el valor de la factura.</li>
                                <li>El servicio minimo son 35$.</li>
                                <li>En este servicio me encargo de asistirte, realizar el pago y verificar cuando llegue la mercancia que todo este correcto.</li>
                                <li>Si la empresa de envio interno (FEDEX, UPS, USPS, entre otras) no entrego el paquete proceder al reclamo y recuperacion del mismo, que aunque no creas sucede muy a menudo.</li>
                            </ul>
                            <h2>Servicio de compras con lista predeterminada</h2>

                            <p>Este servicio es ideal para realizar compras de cosas comunes que muchas veces necesitamos en el hogar y para tiendas revendedoras.</p>
                            <p>Aqui el cliente debe realizar una lista exacta de los productos que desea comprar.</p>

                            <ul>
                                <li>Este servicio tiene un costo del 10% sobre la compra.</li>
                                <li>Servicio minimo son 35$.</li>
                                <li>Sin minimo de compra.</li>
                                <li>Se visitara solamente 2 tiandas.</li>
                            </ul>

                            <p>Se puede tomar como referencia el <Nav.Link href="#">canal de telgram</Nav.Link> para ver que productos estan disponibles en el momento.</p>
                            <p>En este servicio no mantenemos contacto durante la compra, a menos que cuando estemos en la tienda no haya algun producto y te consultemos si deseas realizar algun reemplazo.</p>
                            

                            <h2>Servicio de compras de un solo producto</h2>

                            <p>Este servicio es muy comodo ya que a diario estoy publicando lo que voy comprando o tiendas que visito y si te gusto solo un producto lo podemos comprar.</p>
                            <p>El servicio tiene un valor de 15% sobre el valor de la factura.</p>
                            <p>El costo de servicio minimo son 35$.</p>
                            <p>El costo del envio de la mercancia dependera del volumen o peso de la misma tomando en cuentam este caso el envio minimo son 20$ dependiendo de la ciudad en la que te encuentres.</p>

                            <h2>Servicio de diligecia personal.</h2>

                            <p>Este servicio tiene un costo de 35$ por cada servicio.</p>
                            <p>Si el sitio donde se realizara la diligencia que en un rango mayor a 5 millas se cobrara por cada milla adicional recorrida.</p>
                            <p>Si el servicio es por algun paquete extraviado se cobrara el servicio por cada vez que me toque ir a la empresa de envios, sea Fedex, Ups, Usps, Dhl, entre otros.</p>
                    </div>
                </main>
                <Footer />
            </div>
        </>
    )
}
