import Conversation from "../models/conversation.model";
import Message from "../models/message.model";

export const sendMessage = async (req, res) => {
  try {
    const { id: receiverId } = req.params;
    const senderId = req.user._id;
    const { message } = req.body;

    let conversation = await Conversation.findOne({
      participants: { $all: [senderId, receiverId] },
    });

    if (!conversation) {
      conversation = await Conversation.create({
        participants: [senderId, receiverId],
      });
    }

    const newMessage = new Message({
      senderId,
      receiverId,
      message,
    });

    if (newMessage) {
      conversation.message.push(newMessage._id);
    }

    //SOCKET.IO Functionality will go here

    //await conversation.save();
    //await newMessage.save();

    //this will run in parallel
    await Promise.all([conversation.save(), newMessage.save()]);

    res.status(201).json(newMessage);
  } catch (error) {
    console.log("Error from sendMessage controller : ", error.message);
    res.status(500).json("Internal Server Error");
  }
};
