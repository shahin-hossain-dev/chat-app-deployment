import { useEffect, useState } from "react";
import useConversation from "../zustand/useConversation";
import toast from "react-hot-toast";

const useGetMessages = () => {
  const [loading, setLoading] = useState(false);
  const { messages, setMessages, selectedConversation } = useConversation();

  useEffect(() => {
    const getMessage = async () => {
      setLoading(true);
      try {
        const res = await fetch(`/api/messages/${selectedConversation._id}`, {
          method: "GET",
          credentials: "include",
        });
        const data = await res.json();

        if (data.error) throw new Error(data.error);
        setMessages(data);
      } catch (error) {
        toast.error(error.messages);
      } finally {
        setLoading(false);
      }
    };
    getMessage();
  }, [selectedConversation, setMessages]);

  return { messages, loading };
};

export default useGetMessages;
