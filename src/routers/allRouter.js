import express from "express"
import { Createrouter } from "../controller/eventControllers.js"
const router = express.Router()
router.use("/createEvent",Createrouter)

export default router