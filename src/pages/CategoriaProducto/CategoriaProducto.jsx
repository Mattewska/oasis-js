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
import { useState } from 'react'

function CategoriaProducto() {
    const productsArray = [
        {
            nombre: "gallina",
            categoria: "Gallinas",
            descripcion: "gallina blanca, lista para sacrificar",
        },
        {
            nombre: "Huevos",
            categoria: "Gallinas",
            descripcion: "Huevos blancos AAA"
        },
        {
            nombre: "Leche",
            categoria: "Gallinas",
            descripcion: "leche de vaca pura, lista para tomar"
        },
        {
            nombre: "Queso campesino",
            categoria: "Gallinas",
            descripcion: "Queso fresco por libras"
        },
        {
            nombre: "Mojarra",
            categoria: "peces",
            descripcion: "mojarra roja, por libras"
        },
        {
            nombre: "Bagre",
            categoria: "peces",
            descripcion: "bagre por libras"
        },
        {
            nombre: "Tiburon",
            categoria: "peces",
            descripcion: "Tiburon por libras"
        }
    ];

    const [productos, setProductos] = useState([]);

    const aux = (categoriaProductos) => {
        const productosCategorizado = productsArray.filter((item) => item.categoria === categoriaProductos);
        setProductos(productosCategorizado);
    };
    return (
        <>
            <main className='main'>
                <h1>Productos</h1>
                <section>
                    <figure>
                        <Link to={PublicRoutes.Products} onClick={() => {aux("Gallinas")}} key={productos.nombre} value={productos} element={<Products />}>
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