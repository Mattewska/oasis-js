import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
//? components and models
import { PublicRoutes } from './models/routes'
import { AboutMe } from './pages/AboutMe/AboutMe'
import { Header } from './components/Header/Header'
import { Products } from './pages/Productos/Products'
import { Donar } from './pages/Donar/Donar'
import { CategoriaProducto } from './pages/CategoriaProducto/CategoriaProducto'

function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<AboutMe />} />
          <Route path={PublicRoutes.CategoriaProducto} element={<CategoriaProducto />} />
          <Route path={PublicRoutes.AboutMe} element={<AboutMe />} />
          <Route path={PublicRoutes.Products} element={<Products />} />
          <Route path={PublicRoutes.Donar} element={<Donar />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export { App }
