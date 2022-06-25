import express, { Request, Response } from 'express'

const router = express.Router()

router.get("/healthcheck", (req: Request, res: Response) => {
    return res.send("App working")
})



export { router as mainRouter }