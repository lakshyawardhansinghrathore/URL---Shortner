import { createShortUrlService } from "../services/short_url_services.js"

export const createShortUrl = async (req, res) => {
    console.log(req.body);
    const { url } = req.body
    const shortUrl = await createShortUrlService(url)
    res.send(process.env.APP_URL + shortUrl)

}