import { createContext, useContext, useEffect, useState } from "react";
import io from "socket.io-client";
import { useAuthContext } from "./AuthContext";

const SocketContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const useSocketContext = () => {
  return useContext(SocketContext);
};

const SocketContextProvider = ({ children }) => {
  const [socket, setSocket] = useState(null);
  const [onlineUsers, setOnlineUsers] = useState([]);
  const { authUser } = useAuthContext();

  useEffect(() => {
    // console.log(authUser);
    if (authUser) {
      const socketConnection = io(import.meta.env.VITE_PUBLIC_URL, {
        query: { userId: authUser._id }, //send logged in user Id
      });
      setSocket(socketConnection);

      // socketConnection.on() use করা হয়েছে ্getOnlineUsers event কে listen করার জন্য।
      socketConnection.on("getOnlineUsers", (users) => {
        setOnlineUsers(users);
      });

      return () => {
        socketConnection.close();
      };
    } else {
      if (socket) {
        socket.close();
        setSocket(null);
      }
    }
  }, []);
  return (
    <SocketContext.Provider value={{ socket, onlineUsers }}>
      {children}
    </SocketContext.Provider>
  );
};

export default SocketContextProvider;

//code summery

/**
 * auth context এর মাধম্যে user কে নিয়ে আশা হয়েছে।
 * যদি auth user থাকে তাহলে server url এর মাধ্যমে socket connect করতে হবে
 * এবং user id কে socket এর মাধ্যমে server e send করে দিতে হবে।
 *
 * socket connection কে state এর মধ্যে রাখতে হবে।
 * user logout করলে তাহলে socket functionality clean up করতে হবে
 * এবং ‍state null করে দিতে হবে।
 *
 *
 */
