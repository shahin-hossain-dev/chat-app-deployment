import Conversations from "./Conversations";
import SearchInput from "./SearchInput";

const Sidebar = () => {
  return (
    <div className="p-5">
      <SearchInput />
      <div className="divider px-2"></div>
      <Conversations />
      {/* <LogoutButton/> */}
    </div>
  );
};

export default Sidebar;
