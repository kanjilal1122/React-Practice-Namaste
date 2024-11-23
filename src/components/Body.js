import ResturantCard from "./ResturantCard";
import { resObj} from "../utils/data"

const Body = () => {
    const data = resObj;
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {resObj.map((data) => (
          <ResturantCard key={data.id} data={data} />
        ))}
      </div>
    </div>
  );
};
export default Body;