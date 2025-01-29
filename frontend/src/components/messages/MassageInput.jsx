import { useState } from "react";
import { IoSend } from "react-icons/io5";
import useSendMessage from "../../hooks/useSendMessage";
const MassageInput = () => {
  const [message, setMessage] = useState("");
  const { sendMessage, loading } = useSendMessage();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!message) return;
    await sendMessage(message);
    setMessage("");
  };
  return (
    <form onSubmit={handleSubmit} className="px-4 my-3">
      <div className="w-full relative">
        <input
          onChange={(e) => setMessage(e.target.value)}
          autoComplete="off"
          type="text"
          name="message"
          value={message}
          placeholder="Sent a message"
          className="border border-slate-500 bg-slate-50 w-full rounded-full text-sm px-3 py-2 outline-0"
        />
        <button type="submit" className="absolute end-0 inset-y-0 me-3">
          {loading ? (
            <span className="loading loading-spinner"></span>
          ) : (
            <IoSend className="text-xl text-blue-500" />
          )}
        </button>
      </div>
    </form>
  );
};

export default MassageInput;
