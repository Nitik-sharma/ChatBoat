import User from "../models/userModel.js";
import jwt from 'jsonwebtoken'
import bcrypt from "bcryptjs";

// generatee token




const generateToken = (id) => {
    return jwt.sign({ id }, process.env.SECRET_JWT, {
        expiresIn: "30d"
    })
}


//Api for register User
export const registerUser = async (req, res) => {
    const { name, email, password } = req.body;
    try {
        const userExists = await User.findOne({ email })

        if (userExists) {
            return res.json({
                success: false, message: "User already exists"
            })
        }
        const user = await User.create({ name, email, password })
        const token = generateToken(user._id)

        res.json({
            success: true, token
        })

    } catch (error) {
        res.json({
            success: false, message: error.message
        })
    }

}

//Api for  the login 
export const loginUser = async (req, res) => {
    const { email, password } = req.body;
    try {

        const user = await User.findOne({ email })
        if (user) {
            const isMatch = await bcrypt.compare(password, user.password)
            if (isMatch) {
                const token = generateToken(user._id);
                return res.json({
                    success: true, token
                })
            }
            res.json({
                success: false, message: "Invalid Email or Password"
            })
        } else {
            res.json({
                success: false, message: "Invalid Email or Password"
            })
        }
    } catch (error) {
        res.json({
            success: false, message: error.message
        })
    }
}

//API to get user data

export const getUser = async (req, res) => {
    try {
        const user = req.user;
        return res.json({ success: true, user })
    } catch (error) {
        return res.json({
            success: false, message: error.message
        })

    }
}