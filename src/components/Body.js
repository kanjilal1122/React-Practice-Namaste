import ResturantCard from "./ResturantCard";
import { resObj } from "../utils/data";
import { useState } from "react";

const Body = () => {
  const data = resObj;
  const [listOfItems, setListOfItems] = useState(data);
  return (
    <div className="body">
      <div className="button-container">
        <div className="filter">
          <button
            className="filter-btn"
            onClick={() => {
              const filterItems = listOfItems.filter((item) => item.rating > 4);
              setListOfItems(filterItems);
            }}
          >
            {" "}
            Top Rated Resaurant
          </button>
        </div>
        <div>
          <button className="filter-btn" onClick={() => setListOfItems(data)}>
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
