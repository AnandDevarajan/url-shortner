import express from 'express'
import { createShortUrl, handleRedirect, getAnalytics } from "../controller/shortURL.controller"
import validateResource from '../middleware/validateResource'
import shortUrlSchema from '../schemas/shortUrlSchema'

const router = express.Router()

router.get("/analytics", getAnalytics)
router.get("/:shortId", handleRedirect)
router.post("/", validateResource(shortUrlSchema), createShortUrl)



export { router as mainRouter }