import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { RESTAURANT_URL } from "../utils/constants";
import Shimmer from "./Shimmer";
export default function RestaurantMenu() {
  const [resInfo, setResInfo] = useState();
  const { resId } = useParams();

  useEffect(() => fetchMenu, []);

  const fetchMenu = async () => {
    const response = await fetch(RESTAURANT_URL + resId);
    const menuData = await response.json();
    setResInfo(menuData?.data);
  };

  if (!resInfo) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info;
  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

  return (
    <div className="menu">
      <h2>
        {" "}
        {name} - Rs {costForTwoMessage}{" "}
      </h2>
      <h2>{cuisines.join(" ,")}</h2>
      <ul>
        {itemCards.map((item) => (
          <li key={item?.card?.info?.id}>
            {item?.card?.info?.name} - Price{" "}
            {item?.card?.info?.defaultPrice / 100 ||
              item?.card?.info?.price / 100}
          </li>
        ))}
      </ul>
    </div>
  );
}
