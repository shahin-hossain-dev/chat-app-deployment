const Conversation = () => {
  return (
    <>
      <div className="flex gap-2 items-center rounded-full cursor-pointer hover:bg-blue-500 p-2">
        <div className="avatar avatar-online">
          <div className="w-12 rounded-full">
            <img src="https://avatar.iran.liara.run/public/boy" />
          </div>
        </div>
        <div className="flex items-center justify-between flex-1">
          <div className="font-medium text-lg">User Name</div>
          <div className="text-xl">😀</div>
        </div>
      </div>
      <div className="divider !my-0 !py-0 h-1"></div>
    </>
  );
};

export default Conversation;
