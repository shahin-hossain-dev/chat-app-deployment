import { mongoose } from "mongoose";

const messageSchema = new mongoose.Schema(
  {
    senderId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", // User collection
      required: true,
    },
    receiverId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", // User collection
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
  },
  { timestamps: true } //create time property automatically (createAt, updateAt)
);

const Message = mongoose.model("Message", messageSchema);

export default Message;

/**
 * Message
 * {
 * id: 10,
 * senderId: 1,
 * receiverId: 2,
 * message: 'Hello'
 * }
 *
 * conversation
 * {
 * id: 30, //conversation Id
 * participants: [1, 2], //userIds
 * messages: [10, 11] //messageIds
 * }
 */
