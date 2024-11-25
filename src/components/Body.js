import ResturantCard from "./ResturantCard";
import Shimmer from "./Shimmer";
import { resObj } from "../utils/data";
import { useState, useEffect } from "react";

const Body = () => {
  const data = resObj;
  const [listOfItems, setListOfItems] = useState([]);
  const [searchItem, setSearchItem] = useState("");

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

  return listOfItems.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="button-container">
        <div className="filter ">
          <div className="search  ">
            <input
              type="text"
              className="search-box filter-btn"
              value={searchItem}
              onChange={(e) => {
                setSearchItem(e.target.value);
              }}
            />
            <button
              className="search-btn filter-btn"
              onClick={() => {
                const filterItems = listOfItems.filter((data) =>
                  data?.info?.name
                    .toLowerCase()
                    .includes(searchItem.toLowerCase())
                );
                setListOfItems(filterItems);
                setSearchItem("");
              }}
            >
              Search
            </button>
          </div>
          <button
            className="filter-btn"
            onClick={() => {
              const filterItems = listOfItems.filter(
                (data) => data?.info?.avgRating > 4.2
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
          <ResturantCard key={data?.info?.id} data={data} />
        ))}
      </div>
    </div>
  );
};
export default Body;
