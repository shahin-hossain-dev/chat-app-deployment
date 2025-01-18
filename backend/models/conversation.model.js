import mongoose from "mongoose";

const conversationSchema = mongoose.Schema(
  {
    participants: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    messages: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Message",
        default: [],
      },
    ],
  },
  { timestamps: true }
);

const Conversation = mongoose.model("Conversation", conversationSchema);

export default Conversation;

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
