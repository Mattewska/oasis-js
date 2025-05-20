import { BrowserRouter } from 'react-router-dom'
import './App.css'
//? components and models
import { PublicRoutes } from './models'
import AboutMe from './pages/AboutMe'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<AboutMe />} />
          <Route path={PublicRoutes.AboutMe} element={<AboutMe />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
