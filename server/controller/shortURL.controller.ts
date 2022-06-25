import { Request, Response } from "express"
import shortUrl from "../models/shortURL.model"


export const createShortUrl = async (req: Request, res: Response) => {
    const { destinantion } = req.body

    const newUrl = await shortUrl.create({ destinantion })

    return res.send(newUrl)

}