//? css
import './products.css'


function Products({ value }) {
    return (
        <>
            <main className='main'>
                <h1>Productos</h1>
                <section>
                    <div>
                        <p>{ value }</p>
                    </div>
                </section>
            </main>
        </>
    )
}
export { Products }