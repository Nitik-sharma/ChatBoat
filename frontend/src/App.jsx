import React, { useState } from 'react'
import './index.css'
import Sidbar from './Components/Sidbar'
import { Route, Routes, useLocation } from 'react-router-dom'
import Chatboat from './Components/Chatboat'
import Message from './Components/Message'
import Credits from './Pages/Credits'
import Community from './Pages/Community'
import { assets } from './assets/assets'
import './assets/prism.css'
import Loading from './Pages/Loading'
import Login from './Pages/Login'
function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { pathname } = useLocation()
  
  if(pathname==='/loading') return <Loading/>
  return (
    <>
      {!isMenuOpen && <img src={ assets.menu_icon} className=' w-8 h-8 cursor-pointer absolute top-3 left-3 md:hidden ' onClick={()=>setIsMenuOpen(true)}/>}
      <div className="dark:bg-gradient-to-b from-[#212421] to-[#000000] dark:text-white">
        <div className=" flex  h-screen w-screen">
          <Sidbar isMenuOpen={isMenuOpen} setIsMenuOpen={ setIsMenuOpen} />
          <Routes>
            <Route path="/" element={<Chatboat />} />
            <Route path="/credits" element={<Credits />} />
            <Route path="/community" element={<Community />} />
            <Route path="/login" element={<Login />} />

          </Routes>
        </div>
      </div>
    </>
  );
}

export default App