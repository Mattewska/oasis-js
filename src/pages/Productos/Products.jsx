import gallinas from '../../assets/gallinas1.jpeg'
import galpon from '../../assets/galpon1.jpeg'
import patos from '../../assets/patos1.jpeg'
import vacas from '../../assets/vacas1.jpeg'
import peces from '../../assets/piscicultura1.jpeg'
//? css
import './products.css'


function Products() {
    return (
        <>
            <main className='main'>
                <h1>Productos</h1>
                <section>
                    <figure>
                        <img src={gallinas} alt="gallinas" />
                        <figcaption>gallinas</figcaption>
                    </figure>
                    <figure>
                        <img src={galpon} alt="gallinas" />
                        <figcaption>galpon</figcaption>
                    </figure>
                    <figure>
                        <img src={patos} alt="gallinas" />
                        <figcaption>patos</figcaption>
                    </figure>
                    <figure>
                        <img src={vacas} alt="gallinas" />
                        <figcaption>vacas</figcaption>
                    </figure>
                    <figure>
                        <img src={peces} alt="gallinas" />
                        <figcaption>peces</figcaption>
                    </figure>
                </section>
            </main>
        </>
    )
}
export { Products }