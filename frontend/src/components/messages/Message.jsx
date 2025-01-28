import useConversation from "../../zustand/useConversation";

const Message = ({ message }) => {
  const { selectedConversation } = useConversation();
  return (
    <div>
      <div className="chat chat-end">
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img
              alt="Tailwind CSS chat bubble component"
              src={selectedConversation.profilePic}
            />
          </div>
        </div>
        <div className="chat-bubble">{message.message}</div>
        <div className="chat-footer opacity-50">Seen at 12:46</div>
      </div>
    </div>
  );
};

export default Message;
