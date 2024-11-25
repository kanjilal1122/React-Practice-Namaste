import ResturantCard from "./ResturantCard";
import { resObj } from "../utils/data";
import { useState, useEffect } from "react";

const Body = () => {
  const data = resObj;
  const [listOfItems, setListOfItems] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.5743545&lng=88.3628734&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const jsonData = await data.json();
    const apiData =
      jsonData?.data?.cards[4]?.card?.card.gridElements?.infoWithStyle
        ?.restaurants;
    setListOfItems(apiData);
  };

  return (
    <div className="body">
      <div className="button-container">
        <div className="filter">
          <button
            className="filter-btn"
            onClick={() => {
              const filterItems = listOfItems.filter(
                (data) => data?.info?.avgRating >= 4
              );
              setListOfItems(filterItems);
            }}
          >
            {" "}
            Top Rated Restaurant
          </button>
        </div>
        <div>
          <button
            className="filter-btn"
            onClick={() => {
              location.reload();
            }}
          >
            {" "}
            Reset
          </button>
        </div>
      </div>
      <div className="res-container">
        {listOfItems.map((data) => (
          <ResturantCard key={data.id} data={data} />
        ))}
      </div>
    </div>
  );
};
export default Body;
