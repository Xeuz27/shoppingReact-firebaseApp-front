import '../index.css';
import Header from '../components/Header';
import { Link } from 'react-router-dom';
import Footer from '../components/footer';

export default function Services (){
    return(
        <>
        {/* check typos  */}
        {/*  add telegram link  */}
        
            <Header />
            <div className="previewContainer previewContainerModifier">
                <main className="container">
                    <div className="content">
                            <h1>Servicio de compras asistídas (Personal Shopper)</h1>
                            <p>Puedes ir de compras en la la ciudad de Orlando, aunque estes en cualquier parte del mundo.</p>
                            <p>A diario estamos publicando en nuestro <Link href="https://t.me/Portucomprausa" target="_blank">Canal de Telegram </Link>allí tienes la mejor referencia de ofertas y articulos disponibles en el momento en las tiendas, es nuestra mejor herramientas para que trabajemos juntos.</p>
                            <p>Es importante que una vez definido el presupuesto, el dinero debe estar abonado en nuestra cuenta para poder comenzar la compras.</p>
                            <p>Todos nuestros servicios incluyen reempaque, a menos que la mercancia requiera un trato especial y se cobraria adicional.</p>
                            <h2>Como comprar?</h2>
                            <p>Se envian fotos y videos de la mercancia que pidas, con sus respectivos precios reales y descuentos <b>(los precios en las tiendas no incluyen impuestos que en Orlando son entre el 6.5% y 7%).</b> Preferimos no trabajar con videollamada porque no se aprecia bien la mercancia y por texto queda en evidencia lo que estás comprando.</p>
                            <p>se Envia detalles de la compra.</p>
                            <p>Hacemos una relacion en detalle de la inversión, gastos en tiendas visitadas, para que puedas llevar control sobre tus gastos.</p>
                            <p>Si te sobra dinero y el monto es menor a 35$ tienes un lapso de 3 meses para utilizarlos en otra inversión o pierdes el dinero, sí el monto es superior a 35$ se realiza la devolución por el metodo acordado con el cliente.</p>
                            <p>Tenemos varias opciones de servicios que se adaptan a tus necesidades...</p>
                            <h2>Envíos</h2>
                            <p>Nosotros contamos con <Link target="_blank" href="https://tucargaexpress.com/">TuCargaExpress</Link> como empresa de confianza para los envios, allí podemos tener mas información y control sobre los estatus y despachos, es por ello que le hemos depositado nuestra confianza. Si el cliente desea realizar el envio con alguna otra empresa, nuestro trabajo termina en el momento en que dejamos la mercancia en el poder de la empresa suministrada por el cliente, de alli en adelante, no nos hacemos responsables.</p>

                            <h2>Servicio de Compras asistidas sin límites</h2>

                            <p>Este es el servicio más utilizado, ya que aquí no tenemos límites de compras, por este servicio se cobra de la sieguente manera</p>

                            <ul>
                                <li>20% sobre el valor de la factura sin mínimo de compras.</li>
                                <li>Sin límite de tiendas ni tiempo.</li>
                                <li>El Costo de servicio mínimo son 35$.</li>
                                <li>Asesoría sobre el presupuesto.</li>
                                <li>Compra sin límites y en vivo.</li>
                            </ul>
                                    
                            <p>Este es el metodo de compras asistidas mas utilizado por todos ya que, en vivo subo historias en instagram y telegram en el momento que estoy comprando, asi no tengan esa tienda en su lista se les puede comprar el producto que deseen.</p>
                            <p>Adicional a esto no te limitamos con tu compra si te gusto algo publicado y lo viste tarde podemos volver y comprarlo <b>(simpre y cuando no estemos en el limite de tiempo de envio).</b></p>

                            <h2>Servicio de compras personalizadas</h2>

                            <p><span>Este es el servicio mas utilizado por emprendedores</span></p>
                            <ul>
                                <li>Este servicio tiene un costo de 15% sobre el valor de la compra.</li>
                                <li>Visitamos solo 4 tiendas de la lista proporcionada <b>(si la tienda no esta en la lista, la anexámos).</b></li>
                                <li>El tiempo de la compra durará el tiempo que esté en la tienda, si la compra la terminamos y deseas que vuelva por otros productos, cambiaria el monto de servicio o eliminaríamos una tienda de la lista.</li>
                                <li>Si entramos a una tienda que fue elegida por tí, te enviamos los productos disponibles en la tienda y no deseas nada será una tienda menos en tu lista.</li>
                            </ul>

                            <h2>Servicio de compras Online</h2>
                            <p>Este es un servicio de compras Online en cualquier página web, sin límites de compras.</p>
                            <ul>
                                <li>Este servicio tiene un costo de 10% sobre el valor de la factura.</li>
                                <li>El servicio mínimo son 35$.</li>
                                <li>En este servicio me encargo de asistirte, realizar el pago y verificar qué cuando llegue la mercancía todo este correcto.</li>
                                <li>Sí la empresa de envío interno (FEDEX, UPS, USPS, entre otras) no entrego el paquete proceder al reclamo y recuperación del mismo, que aunque no creas sucede muy seguido.</li>
                            </ul>
                            <h2>Servicio de compras con lista predeterminada</h2>

                            <p>Este servicio es ideal para realizar compras de cosas comunes que muchas veces necesitamos en el hogar y para tiendas revendedoras.</p>
                            <p>Aquí el cliente debe realizar una lista exacta de los productos que desea comprar.</p>

                            <ul>
                                {/* sin mínimo o sin limite de compras? PREGUNTAR */}
                                <li>Este servicio tiene un costo del 10% sobre la compra.</li>
                                <li>Servicio mínimo son 35$.</li>
                                <li>Sin mínimo de compra.</li>
                                <li>Se visitará solamente 2 tiendas.</li>
                            </ul>

                            <p>Se puede tomar como referencia el <Link href="#">Canal de Telegram</Link> para ver que productos estan disponíbles en el momento.</p>
                            <p>En este servicio no mantenemos contacto durante la compra, a menos qué cuando estemos en la tienda no haya algun producto y te consultemos si deseas realizar algun reemplazo.</p>
                            

                            <h2>Servicio de compras de un solo producto</h2>

                            <p>Este servicio es muy comodo ya que a diario estoy publicando lo que voy comprando o las tiendas que visito y si te gusto solo un producto lo podemos comprar.</p>
                            <p>El servicio tiene un valor de 15% sobre el valor de la factura.</p>
                            <p>El costo de servicio mínimo son 35$.</p>
                            <p>El costo del envío de la mercancía dependerá del volúmen o peso de la misma, tomando en cuenta este caso el envio mínimo son 20$ dependiendo de la ciudad en la que te encuentres.</p>

                            <h2>Servicio de diligencia personal.</h2>

                            <p>Este servicio tiene un costo de 35$ por cada diligencia.</p>
                            <p>Si el sitio donde se realizará la diligencia queda en un rango mayor a 5 millas se cobrará por cada milla adicional recorrida.</p>
                            <p>Si el servicio es por algún paquete extraviado se cobrara el servicio por cada vez que tenga que ir a la empresa de envios, sea Fedex, Ups, Usps, Dhl, entre otros.</p>
                    </div>
                </main>
                <Footer />
            </div>
        </>
    )
}
