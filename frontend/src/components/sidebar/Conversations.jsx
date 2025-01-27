import useGetConversations from "../../hooks/useGetConversations";
import Conversation from "./Conversation";

const Conversations = () => {
  const { loading, conversations } = useGetConversations();
  console.log(conversations);

  return (
    <div>
      <Conversation />
      <Conversation />
      <Conversation />
    </div>
  );
};

export default Conversations;
