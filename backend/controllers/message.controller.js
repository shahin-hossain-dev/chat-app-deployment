import Conversation from "../models/conversation.model.js";
import Message from "../models/message.model.js";
import { getReceiverSocketId } from "../socket/socket.js";

export const sendMessage = async (req, res) => {
  try {
    const { id: receiverId } = req.params;
    const senderId = req.user._id; //userId from token
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
      conversation.messages.push(newMessage._id);
    }

    //await conversation.save();
    //await newMessage.save();

    //this will run in parallel and optimized
    await Promise.all([conversation.save(), newMessage.save()]);

    //SOCKET.IO Functionality will go here
    const receiverSocketId = getReceiverSocketId(receiverId);

    res.status(201).json(newMessage);
  } catch (error) {
    console.log("Error from sendMessage controller : ", error.message);
    res.status(500).json("Internal Server Error");
  }
};

export const getMessages = async (req, res) => {
  try {
    const { id: userToChatId } = req.params; //other person id/receiverId;
    const senderId = req.user._id;

    const conversation = await Conversation.findOne({
      // participant conversation schema ref(User) থেকে id গুলো match করে নিয়ে আসতেছে।
      participants: { $all: [senderId, userToChatId] },
      // এখানে populate হলো Conversation schema messages property এর
      //  ref (Message) এর সুত্র ধরে 2 টা participant Id match করে, এমন ডাটা গুলো নিয়ে আসতেছে।
    }).populate("messages");

    if (!conversation) return res.status(200).json([]);

    const messages = conversation.messages;
    res.status(200).json(messages);
  } catch (error) {
    console.log("Error form getMessages controller: ", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
