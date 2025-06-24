import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
//? components and models
import { PublicRoutes } from './models/routes'
import { AboutMe } from './pages/AboutMe/AboutMe'
import { Header } from './components/Header/Header'
import { Products } from './pages/Productos/Products'
import { Donar } from './pages/Donar/Donar'
import { CategoriaProducto } from './pages/CategoriaProducto/CategoriaProducto'
import { useState } from 'react'

function App() {
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

    const [ productos, setProductos ] = useState([]);

    function categorizarProductos(categoriaProductos){
        const productosCategorizado = productsArray.filter((item) => item.categoria === categoriaProductos);
        setProductos(productosCategorizado);
    };

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<AboutMe />} />
          <Route path={PublicRoutes.CategoriaProducto} element={<CategoriaProducto categorias={categorizarProductos} />} />
          <Route path={PublicRoutes.AboutMe} element={<AboutMe />} />
          <Route path={PublicRoutes.Products} element={<Products value={productos} />} />
          <Route path={PublicRoutes.Donar} element={<Donar />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export { App }
