//? css
import './products.css'


function Products({ aux, productos }) {
    console.log(productos)
    return (
        <>
            <main className='main'>
                <h1>Productos</h1>
                <section>
                    <div>
                        {/* <h2>{getProductos.nombre}</h2>
                        <h3>{getProductos.descripcion}</h3> */}
                    </div>
                </section>
            </main>
        </>
    )
}
export { Products }