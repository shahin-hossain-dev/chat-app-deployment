import { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";

const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext();

  const login = async ({ username, password }) => {
    const success = loginErrorValidation({ username, password });

    if (!success) return;

    setLoading(true);
    try {
      const res = await fetch(
        `${import.meta.env.VITE_PUBLIC_URL}/api/auth/login`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ username, password }),
        }
      );

      const data = await res.json();

      if (data.error) {
        throw new Error(data.error);
      }
      if (res.status === 201) {
        toast.success("Login Successful");
        localStorage.setItem("chat-user", JSON.stringify(data));
        setAuthUser(data);
      }
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { login, loading };
};

export default useLogin;

const loginErrorValidation = ({ username, password }) => {
  if (!username || !password) {
    toast.error("Please fill all fields ");
    return false;
  }

  if (password.length < 6) {
    toast.error("Password will be 6 characters");
    return false;
  }

  return true;
};
