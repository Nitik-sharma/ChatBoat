import React from 'react'
import './index.css'
import Sidbar from './Components/Sidbar'
import { Route, Routes } from 'react-router-dom'
import Chatboat from './Components/Chatboat'
import Message from './Components/Message'
import Credits from './Pages/Credits'
import Community from './Pages/Community'
function App() {
  return (
    <>
      <div className="dark:bg-gradient-to-b from-[#212421] to-[#000000] dark:text-white">
        <div className=" flex  h-screen w-screen">
          <Sidbar />
          <Routes>
            <Route path="/" element={<Chatboat />} />
            <Route path="/credits" element={<Credits />} />
            <Route path="/community" element={<Community />} />
            <Route path="/message" element={<Message />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App