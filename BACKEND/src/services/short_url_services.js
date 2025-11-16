import { generateNanoId } from "../utils/helper.js"
import urlSchema from "../models/short_url.model.js";

export const createShortUrlService = async (url) => {
    const shortUrl = await generateNanoId(7)

    return shortUrl
}