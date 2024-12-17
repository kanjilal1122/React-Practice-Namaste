import ResturantCard from "./ResturantCard";
import Shimmer from "./Shimmer";
import { resObj } from "../utils/data";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { MAIN_PAGE_URL } from "../utils/constants";

const Body = () => {
  const data = resObj;
  const [listOfItems, setListOfItems] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchItem, setSearchItem] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(MAIN_PAGE_URL);
    const jsonData = await data.json();
    const apiData =
      jsonData?.data?.cards[4]?.card?.card.gridElements?.infoWithStyle
        ?.restaurants;
    setListOfItems(apiData);
    setFilteredRestaurant(apiData);
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
              className="search-btn"
              onClick={() => {
                const filteredRestaurant = listOfItems.filter((data) =>
                  data?.info?.name
                    .toLowerCase()
                    .includes(searchItem.toLowerCase())
                );
                setFilteredRestaurant(filteredRestaurant);
                setSearchItem("");
              }}
            >
              Search
            </button>
          </div>
          {/* <button
            // className="filter-btn"
            onClick={() => {
              const filterItems = listOfItems.filter(
                (data) => data?.info?.avgRating > 4.2
              );
              setListOfItems(filterItems);
            }}
          >
            {" "}
            Top Rated Restaurant
          </button> */}
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
        {filteredRestaurant.map((data) => (
          <Link className="restLink" to={"/restaurants/"+data?.info?.id} key={data?.info?.id} >
            {" "}
            <ResturantCard  data={data} />
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Body;
