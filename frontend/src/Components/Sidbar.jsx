import React, { useState } from 'react'
import { useAppContext } from '../Contex/AppContext'
import { assets } from '../assets/assets'

function Sidbar() {
    const { chat, setSeletedChat, theme, setTheme, user } = useAppContext()
    const[search,setSearch]=useState(" ")
  return (
    <div className=" flex flex-col h-screen min-w-72 p-5 dark-bg-gradient-to-b from-[#242124]/30 to-[#000000]/30 border-r border-gray-700  backdrop:blur-3xl transition-all duration-500 max-md:absolute  left-0 z-1 ">
      <img
        src={theme === "dark" ? assets.logo_full : assets.logo_full_dark}
        alt=""
        className=" w-full max-w-48"
      />

      <button
        className=" flex justify-center items-center w-full py-2 mt-10 text-white bg-gradient-to-l from-purple-600 to-blue-500 rounded-2xl text-sm cursor-pointer 
"
      >
        <span className=" mr-2">+</span> New Chat
      </button>
    </div>
  );
}

export default Sidbar