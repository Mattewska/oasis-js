//? css
import './products.css'


function Products({ categoria }) {
    console.log(categoria);
    return (
        <>
            <main className='main'>
                <h1>Productos</h1>
                <section>
                    <button onClick={categoria}>test</button>
                </section>
            </main>
        </>
    )
}
export { Products }