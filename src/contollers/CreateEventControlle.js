import Event from '../../model/event.js';

const createEventController = async (req, res) => {
  const { title, description, startTime, endTime, location } = req.body;
  try {
    const newEvent = await Event.create({ title, description, startTime, endTime, location });
    res.status(201).json({
      message: "Event created successfully",
      data: newEvent
    });
  } catch (error) {
    const messageContent = error.message;
    res.status(500).json({
      error: "Server Error",
      message: messageContent
    });
  }
};
const getEventController = async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);
    if (!event) {
      const messageContent = "Event not found";
      const status = 404;
      return errorFunc(res, messageContent, status);
    }
    res.status(200).json({
      message: "Event retrieved successfully",
      data: event
    });
  } catch (error) {
    const messageContent = error.message;
    res.status(500).json({
      error: "Server Error",
      message: messageContent
    });
  }
};

const getAllEventsController = async (req, res) => {
  try {
    const events = await Event.find();
    res.status(200).json({
      message: "All events retrieved successfully",
      data: events
    });
  } catch (error) {
    const messageContent = error.message;
    res.status(500).json({
      error: "Server Error",
      message: messageContent
    });
  }
};


export { createEventController, getEventController, getAllEventsController };