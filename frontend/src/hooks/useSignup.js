import { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";
const useSignup = () => {
  const [loading, setLoading] = useState(null);
  const { setAuthUser } = useAuthContext();

  const signup = async ({
    fullName,
    username,
    password,
    confirmPassword,
    gender,
  }) => {
    // validation
    const success = handleInputError({
      fullName,
      username,
      password,
      confirmPassword,
      gender,
    });
    if (!success) return;

    setLoading(true);
    //send signup request
    try {
      const res = await fetch(`/api/auth/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName,
          username,
          password,
          confirmPassword,
          gender,
        }),
      });
      const data = await res.json();
      if (data.error) {
        throw new Error(data.error);
      }
      if (res.status === 201) {
        toast.success("User Created");
        //local storage
        localStorage.setItem("chat-user", JSON.stringify(data));
        //context
        setAuthUser(data);
      }
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };
  return { signup, loading };
};

export default useSignup;

//validation func
const handleInputError = ({
  fullName,
  username,
  password,
  confirmPassword,
  gender,
}) => {
  if (!fullName || !username || !password || !confirmPassword || !gender) {
    toast.error("Please fill all field");
    return false;
  }

  if (password !== confirmPassword) {
    toast.error("Password not matched");
    return false;
  }

  if (password.length < 6) {
    toast.error("Password should be 6 characters");
    return false;
  }

  return true;
};
