import { Link } from 'react-router-dom'
import { PublicRoutes } from '../../models/routes'
import { AboutMe } from '../../pages/AboutMe/AboutMe'
import { Donar } from '../../pages/Donar/Donar'
import { CategoriaProducto } from '../../pages/CategoriaProducto/CategoriaProducto'
import './header.css'

function Header() {
    return (
        <>
            <header className='header'>
                <ul>
                    <li><Link to={PublicRoutes.AboutMe} element={<AboutMe />}>Sobre mi</Link></li>
                    <li><Link to={PublicRoutes.CategoriaProducto} element={<CategoriaProducto />}>Productos</Link></li>
                    <li><Link to={PublicRoutes.Donar} element={<Donar />}>Donar</Link></li>
                </ul>
            </header>
        </>
    )
}

export { Header }