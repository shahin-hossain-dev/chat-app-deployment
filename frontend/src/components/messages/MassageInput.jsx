import { IoSend } from "react-icons/io5";
const MassageInput = () => {
  return (
    <form className="px-4 my-3">
      <div className="w-full relative">
        <input
          type="text"
          name="message"
          placeholder="Sent a message"
          className="border border-slate-500 bg-slate-50 w-full rounded-full text-sm px-3 py-2 outline-0"
        />
        <button className="absolute end-0 inset-y-0 me-3">
          <IoSend className="text-xl text-blue-500" />
        </button>
      </div>
    </form>
  );
};

export default MassageInput;
