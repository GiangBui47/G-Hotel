import express from "express"
import "dotenv/config.js";
import cors from "cors"
import connectDB from "./config/db.js";
import { clerkMiddleware } from '@clerk/express'
import clerkWebhook from "./controller/clerkWebhook.js";

connectDB();

const app = express()
app.use(cors())

app.use(clerkMiddleware())
app.use(express.json())

//API to clerk webhook
app.use("/api/clerk", clerkWebhook);

app.get('/', (req, res) => (res.send("API is working")))

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
