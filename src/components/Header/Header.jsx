import { Link } from 'react-router-dom'
import { PublicRoutes } from '../../models/routes'
import { AboutMe } from '../../pages/AboutMe/AboutMe'
import { Products } from '../../pages/Productos/Products'
import './header.css'
import Donar from '../../pages/Donar/Donar'

function Header() {
    return (
        <>
            <header>
                <ul>
                    <li><Link to={PublicRoutes.AboutMe} element={<AboutMe />}>Sobre mi</Link></li>
                    <li><Link to={PublicRoutes.Products} element={<Products />}>Productos</Link></li>
                    <li><Link to={PublicRoutes.Donar} element={<Donar />}>Donar</Link></li>
                </ul>
            </header>
        </>
    )
}

export { Header }