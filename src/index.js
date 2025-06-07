import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config(); // loads .env from root

console.log("MONGODB_URI:", process.env.MONGODB_URI);

connectDB()
.then(() => {
    app.listen(process.env.PORT || 8000, () => {
        console.log(`Server is running at port: ${process.env.PORT}`)
    })
})
.catch((err) => {
console.log("MONGO db connection failed !!!", err)
})
