import Chat from "../models/Chat.js"


export const createChat = async (req,res) => {
    try {
        const userId = req.user._id

        const chatData = {
            userId,
            messages: [],
            name: "New Chat",
            userName:req.user.name
        
        }

        await Chat.create(chatData)
        res.json({sucess:true,message:"Your chat sucessfully created "})
    } catch (error) {
        res.json({
            sucess: false,
            message:error.message
        })
    }
}


// api for get chat

export const getChat = async (req, res) => {
    try {
        const userId = req.user._id;
        const chats = await Chat.find({ userId }).sort({ updatedAt: -1 })
        
        res.json({sucess:true,chats})
    } catch (error) {
         res.json({
            sucess: false,
            message:error.message
        })
    }
}


export const deleteChat = async (req, res) => {
    try {
        const userId = req.user._id
        const { chatId } = req.body
        await Chat.deleteOne({ _id: chatId, userId })
        
        res.json({
            sucess: true,
            message:"Chat Deleted"
        })
        
    } catch (error) {
         res.json({
            sucess: false,
            message:error.message
        })
    }
}