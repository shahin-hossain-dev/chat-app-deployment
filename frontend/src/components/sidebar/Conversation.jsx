import useConversation from "../../zustand/useConversation";

const Conversation = ({ conversation, lastIdx }) => {
  const { selectedConversation, setSelectedConversation } = useConversation();
  const isSelected = selectedConversation?._id === conversation._id;

  return (
    <>
      <div
        className={`${
          isSelected ? "bg-blue-500" : ""
        } flex gap-2 items-center rounded-full cursor-pointer hover:bg-blue-500 p-2 `}
        onClick={() => setSelectedConversation(conversation)}
      >
        <div className="avatar avatar-online">
          <div className="w-12 rounded-full">
            <img src={conversation.profilePic} />
          </div>
        </div>
        <div className="flex items-center justify-between flex-1">
          <div className="font-medium text-lg">{conversation.fullName}</div>
          {/* <div className="text-xl">😀</div> */}
        </div>
      </div>
      {lastIdx || <div className="divider !my-0 !py-0 h-1"></div>}
    </>
  );
};

export default Conversation;
