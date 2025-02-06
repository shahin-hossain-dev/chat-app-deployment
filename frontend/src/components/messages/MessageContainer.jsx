import { useEffect } from "react";
import useConversation from "../../zustand/useConversation";
import MassageInput from "./MassageInput";
import Massages from "./Massages";
import { IoChatboxOutline } from "react-icons/io5";
import { useAuthContext } from "../../context/AuthContext";

const MessageContainer = () => {
  const { selectedConversation, setSelectedConversation } = useConversation();

  useEffect(() => {
    //cleanup function (during unmount)
    //use it cause when user logout browser case user info and when login again it present the previous selected user.
    return () => {
      setSelectedConversation(null);
    };
  }, [setSelectedConversation]);

  return (
    <div className="flex flex-col min-w-[450px]">
      {!selectedConversation ? (
        <NoChatSelected />
      ) : (
        <>
          {/* header */}
          <div className="flex gap-2 bg-slate-500 px-2 py-1 mb-2">
            <span className="label text-black">To: </span>
            <span className="font-semibold">
              {selectedConversation?.fullName}
            </span>
          </div>
          <Massages />
          <MassageInput />
        </>
      )}
    </div>
  );
};

const NoChatSelected = () => {
  const { authUser } = useAuthContext();
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="text-center flex flex-col items-center">
        <p className="text-xl md:text-2xl lg:text-3xl font-semibold">
          Welcome {authUser.fullName}
        </p>
        <p className="font-medium">Select a person start Messaging</p>
        <IoChatboxOutline className="text-xl md:text-5xl" />
      </div>
    </div>
  );
};

export default MessageContainer;
