import { useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
import useGetConversations from "../../hooks/useGetConversations";
import useConversation from "../../zustand/useConversation";
import toast from "react-hot-toast";

const SearchInput = () => {
  const [searchText, setSearchText] = useState("");
  const { conversations } = useGetConversations();
  const { setSelectedConversation } = useConversation();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!searchText) {
      return toast.error("Input search text");
    }
    if (searchText.length < 3) {
      return toast.error("at least 3 character");
    }
    const conversation = conversations.find((c) =>
      c.fullName.toLowerCase().includes(searchText.toLowerCase())
    );
    if (conversation) {
      setSelectedConversation(conversation);
      setSearchText("");
    } else {
      toast.error("No user found");
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit} className="flex items-center gap-2">
        <input
          type="text"
          value={searchText}
          placeholder="Search…"
          className="input input-bordered rounded-full"
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button type="submit" className="btn btn-circle bg-sky-500 text-white">
          <IoSearchSharp className="w-6 h-6 outline-none" />
        </button>
      </form>
    </div>
  );
};

export default SearchInput;
