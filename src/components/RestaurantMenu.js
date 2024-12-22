import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useFetchMenuCard from "../hooks/useFetchMenuCard";

import Shimmer from "./Shimmer";
export default function RestaurantMenu() {
  const { resId } = useParams();
  const resInfo = useFetchMenuCard(resId);
  console.log("inside restaurant ", resId);
  if (resInfo === null) return <Shimmer />;
  console.log("resInfo", resInfo);
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
      <h2>{cuisines?.join(" ,")}</h2>
      <ul>
        {itemCards?.map((item) => (
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
