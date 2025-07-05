import gallinas from '../../assets/gallinas1.jpeg'
import galpon from '../../assets/galpon1.jpeg'
import patos from '../../assets/patos1.jpeg'
import vacas from '../../assets/vacas1.jpeg'
import peces from '../../assets/piscicultura1.jpeg'
//? css
import './style.css'
//? dependencies
import { Link } from 'react-router-dom'
import { PublicRoutes } from '../../models/routes'
import { Products } from '../Productos/Products'
import { useContextProvider } from '../../context/imgContext'


function CategoriaProducto() {

    const { contextValue, setContextValue} = useContextProvider();
    
    function categoria(item) {
        switch(item){
            case "Gallina":
                console.log("Gallina");
            break;
        }
    }

    return (
        <>
            <main className='main'>
                <h1>Productos</h1>
                <section>
                    <figure>
                        <Link to={PublicRoutes.Products} onClick={() => {categoria("Gallinas")}}  element={<Products />}>
                            <img src={gallinas} alt="gallinas" />
                            <figcaption>gallinas</figcaption>
                        </Link>
                    </figure>
                    <figure>
                        <Link to={PublicRoutes.Products} element={<Products />}>
                            <img src={galpon} alt="gallinas" />
                            <figcaption>galpon</figcaption>
                        </Link>
                    </figure>
                    <figure>
                        <Link to={PublicRoutes.Products} element={<Products />}>
                            <img src={patos} alt="gallinas" />
                            <figcaption>patos</figcaption>
                        </Link>
                    </figure>
                    <figure>
                        <Link to={PublicRoutes.Products} element={<Products />}>
                            <img src={vacas} alt="gallinas" />
                            <figcaption>vacas</figcaption>
                        </Link>
                    </figure>
                    <figure>
                        <Link to={PublicRoutes.Products} element={<Products />}>
                            <img src={peces} alt="gallinas" />
                            <figcaption>peces</figcaption>
                        </Link>
                    </figure>
                </section>
            </main>
        </>
    )
}
export { CategoriaProducto }