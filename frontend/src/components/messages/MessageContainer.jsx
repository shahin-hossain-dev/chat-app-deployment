import MassageInput from "./MassageInput";
import Massages from "./Massages";
import { IoChatboxOutline } from "react-icons/io5";

const MessageContainer = () => {
  const noChatSelected = true;
  return (
    <div className="flex flex-col min-w-[450px] ">
      {noChatSelected ? (
        <NoChatSelected />
      ) : (
        <>
          {/* header */}
          <div className="flex gap-2 bg-slate-500 px-2 py-1 mb-2">
            <span className="label text-black">To: </span>
            <span className="font-semibold">Shahin Hossain</span>
          </div>
          <Massages />
          <MassageInput />
        </>
      )}
    </div>
  );
};

const NoChatSelected = () => {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="text-center flex flex-col items-center">
        <p className="text-xl md:text-2xl lg:text-3xl font-semibold">
          Welcome Shahin
        </p>
        <p className="font-medium">Select a person start Messaging</p>
        <IoChatboxOutline className="text-xl md:text-5xl" />
      </div>
    </div>
  );
};

export default MessageContainer;
