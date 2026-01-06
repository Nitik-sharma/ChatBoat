import  React, { useEffect, useState } from 'react'
import { createContext, useContext } from "react";
import { useNavigate } from 'react-router-dom';
import { dummyChats, dummyUserData } from '../assets/assets';

const AppContext = createContext()

export const AppContextProvider = ({ children }) => {
   
    const navigate = useNavigate()
    const [user, setUser] = useState(null)
    const [chat,setChat]=useState([])
    const [selectedChat, setSelectedChat] = useState()
    const [theme, setTheme] = useState(localStorage.getItem(("theme") || "light"))
    
    const fetchData =async () => {
        setUser(dummyUserData)
         
    }

    const fetchChat = async () => {
        setChat(dummyChats)
        setSelectedChat(dummyChats[0])
    }

    console.log(chat)

    useEffect(() => {
        if (user) {
            fetchChat()
            
        } else {
            setChat([])
            setSelectedChat(null)
        }
        
    }, [user])
    
    // for theme

    useEffect(() => {
        if (theme === 'dark') {
           document.documentElement.classList.add("dark")
        } else {
            document.documentElement.classList.remove("dark")
       } 
    },[theme])

    useEffect(() => {
     fetchData()   
    }, [])
    
    const value = {
         navigate,chat,setChat,user,setUser,selectedChat,setSelectedChat,fetchData,theme,setTheme
     };

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
}


export const useAppContext=()=>useContext(AppContext)