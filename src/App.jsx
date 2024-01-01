import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/home/Home'
import Layout from './components/Layout';
import Vans from './pages/vans/Vans';
import VanDetail from './pages/vanDetail/VanDetail';
import About from './pages/about/About';

import "./server"

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout/>} >
            <Route path='/' element={<Home/>}></Route>
            <Route path='/about' element={<About/>}></Route>
            <Route path='/vans' element={<Vans/>}></Route>
            <Route path='/vans/:id' element={<VanDetail/>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App