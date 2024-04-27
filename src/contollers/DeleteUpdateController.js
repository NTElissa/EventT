import Event from '../../model/event.js';
const updateEventController = async (req, res) => {
    const { title, description, startTime, endTime, location } = req.body;
    try {
      const event = await Event.findByIdAndUpdate(
        req.params.id,
        { title, description, startTime, endTime, location },
        { new: true }
      );
      if (!event) {
        const messageContent = "Event not found";
        const status = 404;
        return errorFunc(res, messageContent, status);
      }
      res.status(200).json({
        message: "Event updated successfully",
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
  const deleteEventController = async (req, res) => {
    try {
      const event = await Event.findByIdAndRemove(req.params.id);
      if (!event) {
        const messageContent = "Event not found";
        const status = 404;
        return errorFunc(res, messageContent, status);
      }
      res.status(204).send();
    } catch (error) {
      const messageContent = error.message;
      res.status(500).json({
        error: "Server Error",
        message: messageContent
      });
    }
  };

  export { updateEventController, deleteEventController}