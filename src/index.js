// require("dotenv").config();

import dotenv from "dotenv";
import connectDB from "./db/index.js";


dotenv.config({
    path: "./.env"
});
// Method 1 : connecting to MongoDB using async-await
// (async()=>{
//     try {
//         await mongoose.connect(process.env.MONGO_URL+"/"+DB_NAME);
//         console.log("Connected to MongoDB");
//         app.on("error", (error)=>{
//             console.error("Error in Express app:", error);
//         });
//         app.listen(process.env.PORT, ()=>{
//             console.log(`Server is running on port ${process.env.PORT}`);
//         });
//     } catch (error) {
//         console.error("Error connecting to MongoDB:", error);
//     }
// })();

// Method 2 : connecting to MongoDB using function call
connectDB();