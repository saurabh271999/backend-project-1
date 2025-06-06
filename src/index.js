import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config(); // loads .env from root

console.log("MONGODB_URI:", process.env.MONGODB_URI);

connectDB();
