import ResturantCard, { withPromotedLabel } from "./ResturantCard";

import Shimmer from "./Shimmer";
import { resObj } from "../utils/data";
import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { MAIN_PAGE_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";

const Body = () => {
  const data = resObj;
  const [listOfItems, setListOfItems] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchItem, setSearchItem] = useState("");
  const RestaurantHOC = withPromotedLabel(ResturantCard);

  const { setUserName, loggedUser } = useContext(UserContext);
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

  return listOfItems?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="">
      <div className="flex justify-between mx-6 ">
        <div className="">
          <div className="m-2">
            <input
              type="text"
              className="m-1 p-2 w-fit-content text-black  text-center rounded-full border-blue-700 border-solid border-2 cursor-pointer  bg-white-200 hover:border-pink-500"
              placeholder="Search Restaurant"
              value={searchItem}
              onChange={(e) => {
                setSearchItem(e.target.value);
              }}
            />
            <button
              className="m-1 p-2 w-fit-content text-black  text-center rounded-full border-blue-700 border-solid border-2 cursor-pointer  bg-white-200 hover:shadow-lg"
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
            <input
              type="text"
              value={loggedUser}
              onChange={(e) => setUserName(e.target.value)}
              className=" bg-gray-200 text-black m-1 p-2 rounded-md "
            />
          </div>
        </div>
        <div>
          <button
            className="m-1 p-1 w-fit-content text-black  text-center rounded-full border-blue-700 border-solid border-2 cursor-pointer  bg-white-200 hover:shadow-xl hover:border-sky-300"
            onClick={() => {
              location.reload();
            }}
          >
            {" "}
            Reset
          </button>
        </div>
      </div>
      <div className=" flex flex-wrap  justify-around bg-red-50  ">
        {filteredRestaurant.map((data) => (
          <Link
            className="restLink"
            to={"/restaurants/" + data?.info?.id}
            key={data?.info?.id}
          >
            {data?.info?.id % 2 == 0 ? (
              <RestaurantHOC data={data} />
            ) : (
              <ResturantCard data={data} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Body;
