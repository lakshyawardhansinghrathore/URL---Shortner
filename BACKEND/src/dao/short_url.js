import { use } from "react";


export const saveShortUrl = async (shortUrl, longUrl, userId) => {
    const newUrl = new urlSchema({
        full_url: longUrl,
        short_url: shortUrl
    })
    if (userId) {
        newUrl.user = userId;
    }
    newUrl.save()
};