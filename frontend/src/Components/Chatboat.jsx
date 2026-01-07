import React, { useEffect, useState } from 'react'
import { useAppContext } from '../Contex/AppContext'
import { assets } from '../assets/assets'
import Message from './Message'

function Chatboat() {
  const { selectedChat } = useAppContext();
  const [ messages, setMessages ] = useState([])
  const [loading, setLoading] = useState(false)
  
  useEffect(() => {
    if (selectedChat) {
      setMessages(selectedChat.messages || []);
      
   }
  },[selectedChat])
  
  return (
    <div className=" flex-1 flex flex-col  justify-between m-5 md:m-10 xl:mx-30  max-md:mt-14  2xl:pr-40">
      {/* ChatBoat */}
      <div className="flex-1 mb-5 overflow-y-auto">
        {messages.length === 0 && (
          <div className="  text-primary flex justify-center items-center h-full">
            <img
              src={assets.logo_full}
              alt="Logo"
              className=" w-full max-w-56 sm:max-w-68"
            />
            <p className=" mt-5 text-4xl sm:text-6xl text-center text-gray-400">
              Ask me anything
            </p>
          </div>
        )}

        {messages.map((msg, index) => (
          <Message key={index} messages={msg} />
        ))}
      </div>

      {/* form */}
      <form action="" method="post">
        <input type="text" />
      </form>
    </div>
  );
}

export default Chatboat
