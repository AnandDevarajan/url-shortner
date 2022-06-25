import express from 'express'
import { createShortUrl,handleRedirect} from "../controller/shortURL.controller"

const router = express.Router()

router.post("/", createShortUrl)
router.get("/:shortId", handleRedirect)

export { router as mainRouter }