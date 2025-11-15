import express from "express";
import { nanoid } from "nanoid"
import dotenv from "dotenv";
import connectDB from "./src/config/mongo.config.js";
dotenv.config("./.env")
import urlSchema from "./src/models/short_url.model.js";


const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.post("/api/create", middleware, (req, res) => {
    const { url } = req.body
    const shortUrl = nanoid(7)
    const newUrl = new urlSchema({
        full_url: url,
        short_url: shortUrl
    })
    newUrl.save()
    res.send(nanoid(7))
})

app.get("/:id", async (req, res) => {
    const { id } = req.params
    const url = await urlSchema.findOne({ short_url: id })
    if (url) {
        res.redirect(url.full_url)
    } else {
        res.status(404).send("Not found")
    }
})

app.listen(3000, () => {
    connectDB();
    console.log("Server is running on http://localhost:3000");
})
