import { useAuthContext } from "../../context/AuthContext";
import extractTime from "../../utils/extractTime";
import useConversation from "../../zustand/useConversation";

const Message = ({ message }) => {
  const { authUser } = useAuthContext();
  const { selectedConversation } = useConversation();

  const fromMe = authUser?._id === message?.senderId;
  const chatClass = fromMe ? "chat-end" : "chat-start";
  const profilePic = fromMe
    ? authUser.profilePic
    : selectedConversation?.profilePic;
  const bubbleBg = fromMe && "bg-sky-500";
  const time = extractTime(message.createdAt);

  return (
    <div>
      <div className={`chat ${chatClass}`}>
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img alt="Tailwind CSS chat bubble component" src={profilePic} />
          </div>
        </div>
        <div className={`chat-bubble ${bubbleBg}`}>{message.message}</div>
        <div className="chat-footer opacity-50">sent at {time}</div>
      </div>
    </div>
  );
};

export default Message;
