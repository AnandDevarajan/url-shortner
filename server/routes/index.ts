import express from 'express'
import { createShortUrl } from "../controller/shortURL.controller"

const router = express.Router()

router.post("/", createShortUrl)


export { router as mainRouter }