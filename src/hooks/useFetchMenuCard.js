import { useEffect, useState } from "react";
import { RESTAURANT_URL } from "../utils/constants";
const useFetchMenuCard = (resId) => {
  const [resInfo, setResInfo] = useState(null);
  console.log(" Outside", resId);
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const response = await fetch(RESTAURANT_URL + resId);
    const data = await response.json();
    setResInfo(data?.data);
  };

  return resInfo;
};

export default useFetchMenuCard;
