import { LuLogOut } from "react-icons/lu";
const LogoutButton = () => {
  return (
    <div className="mt-auto">
      <button className="flex items-center gap-2 cursor-pointer">
        <LuLogOut className="text-xl rotate-180" />
        <span className="font-semibold">Logout</span>
      </button>
    </div>
  );
};

export default LogoutButton;
