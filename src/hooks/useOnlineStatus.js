import { useState, useEffect } from "react";

const useOnlineStatus = () => {
  const [isOnline, setIsOnline] = useState(true);
  useEffect(() => {
    window.addEventListener("online", (event) => {
      setIsOnline(true);
    });
    window.addEventListener("offline", (event) => {
      setIsOnline(false);
    });
    return () => {
      window.removeEventListener("online", (e) => console.log("Offline")),
        window.removeEventListener("offline", (e) => console.log("Offline"));
    };
  }, []);

  return isOnline;
};

export default useOnlineStatus;
