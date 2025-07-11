//? css
import './products.css'
import { useContextProvider } from '../../context/imgContext'


function Products() {

    const context = useContextProvider()
    const productos = context.contextValue;

    return (
        <>
            <main className='main'>
                <h1>Productos</h1>
                <section>
                    <div>
                        <p>{ productos }</p>
                    </div>
                </section>
            </main>
        </>
    )
}
export { Products }