import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from './config/DB.js'
import userRoute from "./routes/userRoutes.js";
import chatRouter from "./routes/chatRoutes.js";

dotenv.config()

const app = express();
await connectDB();
// middleware

app.use(cors());
app.use(express.json());

// routes

app.get("/", (req, res) => {
  res.send("Server is live");
});
app.use("/api/user", userRoute);
app.use("/api/chat",chatRouter)
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is Running on ${PORT}`);
});