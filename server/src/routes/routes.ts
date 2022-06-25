import express from 'express'
import { createShortUrl, handleRedirect, getAnalytics } from "../controller/shortURL.controller"
import validateResource from '../middleware/validateResource'
import shortUrlSchema from '../schemas/shortUrlSchema'

const router = express.Router()

router.post("/", validateResource(shortUrlSchema), createShortUrl)
router.get("/:shortId", handleRedirect)
router.get("/analytics", getAnalytics)

export { router as mainRouter }