import useGetMessages from "../../hooks/useGetMessages";
import Message from "./Message";

const Massages = () => {
  const { messages, loading } = useGetMessages();

  console.log(messages);

  return (
    <div className="px-4 flex-1 overflow-auto scroller">
      {messages.map((message) => (
        <Message key={message._id} message={message} />
      ))}
    </div>
  );
};

export default Massages;
