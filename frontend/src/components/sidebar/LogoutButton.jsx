import { LuLogOut } from "react-icons/lu";
import useLogout from "../../hooks/useLogout";

const LogoutButton = () => {
  const { logout, loading } = useLogout();
  return (
    <div className="mt-auto py-2">
      <button
        onClick={logout}
        className="flex items-center gap-2 cursor-pointer"
      >
        {loading ? (
          <span className="loading loading-spinner loading-sm"></span>
        ) : (
          <>
            <LuLogOut className="text-xl rotate-180" />
            <span className="font-semibold">Logout</span>
          </>
        )}
      </button>
    </div>
  );
};

export default LogoutButton;
