import express from "express";
import { nanoid } from "nanoid"
import dotenv from "dotenv";
import connectDB from "./src/config/mongo.config.js";
dotenv.config("./.env")
import short_url from "./src/routes/short_url.route.js";



const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use("/api/create", short_url)

// app.get("/:id", async (req, res) => {
//     const { id } = req.params
//     const url = await urlSchema.findOne({ short_url: id })
//     if (url) {
//         res.redirect(url.full_url)
//     } else {
//         res.status(404).send("Not found")
//     }
// })

app.listen(3000, () => {
    connectDB();
    console.log("Server is running on http://localhost:3000");
})
