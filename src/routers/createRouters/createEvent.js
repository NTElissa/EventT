import { Express } from "express";
import { createEventController, getEventController, getAllEventsController } from "../controller/eventControllers.js"
const Createrouter = express.Router()
Createrouter.use("/createEvent",createEventController)

export default Createrouter