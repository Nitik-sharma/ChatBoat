import React, { useState } from 'react'
import { useAppContext } from '../Contex/AppContext'
import { assets } from '../assets/assets'
import moment from 'moment'

function Sidbar({isMenuOpen,setIsMenuOpen}) {
  const { chat, setSelectedChat, theme, setTheme, user, navigate } =
    useAppContext();
  console.log(user)
  console.log("chat",chat)
    const[search,setSearch]=useState("")
  return (
    <div>
      <div
        className={`flex flex-col h-screen min-w-72 p-5 dark-bg-gradient-to-b from-[#242124]/30 to-[#000000]/30 border-r border-gray-700  backdrop:blur-3xl transition-all duration-500 max-md:absolute  left-0 z-1 ${
          !isMenuOpen && " max-md:hidden "
        }`}
      >
        <img
          src={theme === "dark" ? assets.logo_full : assets.logo_full_dark}
          alt=""
          className=" w-full max-w-48"
        />

        <button className=" flex justify-center items-center w-full py-2 mt-10 text-white bg-linear-to-l from-purple-600 to-blue-500 rounded-2xl text-sm cursor-pointer">
          <span className=" mr-2">+</span> New Chat
        </button>
        {/* search converstion */}
        <div className=" flex items-center gap-2 p-4 mt-4 border border-gray-400 dark:border-white/20 rounded-md">
          <img
            src={assets.search_icon}
            className=" w-4 not-dark:invert"
            alt=""
          />

          <input
            onChange={(e) => setSearch(e.target.value)}
            value={search}
            type="text"
            name=""
            id=""
            placeholder=" search conversation "
            className=" text-xs placeholder:text-gray-400 outline-none"
          />
        </div>

        {/* recents chats  */}
        {chat.length > 0 && (
          <p className=" mt-4 text-sm font-serif">Recent Chats </p>
        )}
        <div className=" flex-1 overflow-y-scroll mt-3 text-sm space-y-3">
          {chat
            .filter((chat) =>
              chat.messages[0]
                ? chat.messages[0]?.content
                    .toLowerCase()
                    .includes(search.toLowerCase())
                : chat.name.toLowerCase().includes(search.toLowerCase())
            )
            .map((chat) => {
              return (
                <div
                  onClick={() => {
                    navigate("/");
                    setSelectedChat(chat);
                    setIsMenuOpen(false);
                  }}
                  key={chat._id}
                  className="p-2 px-4 dark:bg-[#57317C]/10 border border-gray-300 dark:border-[#80609F]/15 rounded-md cursor-pointer group"
                >
                  <div>
                    <p className="truncate w-full">
                      {chat.messages.length > 0
                        ? chat.messages[0].content.slice(0, 32)
                        : chat.name}
                    </p>
                    <p className=" text-sm text-gray-600 dark:text-gray-300">
                      {moment(chat.updatedAt).fromNow()}
                    </p>
                  </div>
                  <img
                    src={assets.bin_icon}
                    alt=""
                    className=" w-4 hidden  group-hover:block cursor-pointer  not-dark:invert "
                  />
                </div>
              );
            })}
        </div>
        {/* community image */}
        <div
          onClick={() => {
            navigate("/community");
            setIsMenuOpen(false);
          }}
          className=" flex  items-center gap-3 p-3 mt-4  border border-gray-500  dark:border-gray-200 rounded-md cursor-pointer hover:scale-103 transition-all"
        >
          <img
            src={assets.gallery_icon}
            alt=""
            className=" w-4.5 not-dark:invert "
          />
          <div className=" flex flex-col text-sm ">
            <p>comminity images</p>
          </div>
        </div>

        {/* cardit image */}
        <div
          onClick={() => {
            navigate("/credits");
            setIsMenuOpen(false);
          }}
          className=" flex  items-center gap-3 p-3 mt-4  border border-gray-500  dark:border-gray-200 rounded-md cursor-pointer hover:scale-103 transition-all"
        >
          <img
            src={assets.diamond_icon}
            alt=""
            className=" w-4.5 not-dark:invert bg-amber-50 "
          />
          <div className=" flex flex-col text-sm ">
            <p className=" text-xs  text-gray-400">Credits :{user?.credits}</p>
            <p className=" text-xs  text-gray-400">
              Purchase credits to use the gpt
            </p>
          </div>
        </div>

        {/* user icon */}
        <div className=" flex  items-center gap-3 p-3 mt-4  border border-gray-500  dark:border-gray-200 rounded-md cursor-pointer hover:scale-103 transition-all group">
          <img
            src={assets.user_icon}
            alt=""
            className=" w-4.5 not-dark:invert bg-amber-50 "
          />
          <div className=" flex flex-col text-sm ">
            <p className=" text-xs  text-gray-400 font-extrabold">
              User: {user ? user.name : "Login your account"}
            </p>
            {user && (
              <img
                src={assets.logout_icon}
                className=" w-5 mt-4 h-5  cursor-pointer hidden group-hover:block"
              />
            )}
          </div>
        </div>
        <img
          onClick={() => setIsMenuOpen(false)}
          src={assets.close_icon}
          alt=""
          className=" absolute top-3  right-3 h-5   w-6 md:hidden cursor-pointer"
        />
      </div>
    </div>
  );
}

export default Sidbar