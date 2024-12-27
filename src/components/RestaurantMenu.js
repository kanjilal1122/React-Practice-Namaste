import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useFetchMenuCard from "../hooks/useFetchMenuCard";
import RestuarantCategory from "./RestaurantCategory";

import Shimmer from "./Shimmer";
export default function RestaurantMenu() {
  const { resId } = useParams();
  const resInfo = useFetchMenuCard(resId);
  if (resInfo === null) return <Shimmer />;
  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info;
  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
  console.log(itemCards);

  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (card) => {
        card?.["card"]?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory";
      }
    );
  console.log("categories", categories);

  return (
    <div className="flex flex-col p-5 text-center ">
      <h2 className=" m-3 text-2xl font-black">
        {" "}
        {name} - Rs {costForTwoMessage}{" "}
      </h2>
      <p className=" p-2 font-bold ">{cuisines?.join(" ,")}</p>

      <ul className=" m-2 text-base font-semibold ">
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

{
}

// {/* accordion header */}
// <RestuarantCategory  />
// {/* {categories?.map((category) => {
//   return <RestuarantCategory data={category} />;
// })} */}
