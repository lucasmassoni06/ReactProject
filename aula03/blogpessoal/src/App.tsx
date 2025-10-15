import NavBar from './components/navbar/Navbar'
import Home from './pages/home/Home'
import Footer from "./components/footer/Footer"
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
    <BrowserRouter>
    <NavBar />
    <div className='min-h-[80hv]'>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path='/home' element={<Home />} />
    </Routes>
    </div>
    <Footer />
    </BrowserRouter >
    </>
  )
}

export default App