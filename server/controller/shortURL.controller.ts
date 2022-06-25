import { Request, Response } from "express"
import shortUrl from "../models/shortURL.model"


export const createShortUrl = async (req: Request, res: Response) => {
    const { destination } = req.body
    const newUrl = await shortUrl.create({ destination })
    return res.send(newUrl)
}

export const handleRedirect = async (req: Request, res: Response) => {
    const { shortId } = req.params
    const short = await shortUrl.findOne({ shortId }).lean()
    if (short) {
        res.redirect(short.destination)
    } else {
        res.status(404)
    }
}