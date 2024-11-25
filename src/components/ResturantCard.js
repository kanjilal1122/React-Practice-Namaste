import { CDN_URL } from "../utils/constants";
const ResturantCard = ({ data }) => {
  return (
    <div className="res-card">
      <img className="res-logo" src={CDN_URL} alt="Res Logo" />
      <h3 className="res-name">{data?.info?.name}</h3>
      <h4> {data?.info?.cuisines.join(", ")}</h4>
      <h4> {data?.info?.costForTwo}</h4>
      <h4> {data?.info?.avgRating} ✡</h4>
      <h4>{data?.info?.sla?.deliveryTime} Minutes</h4>
    </div>
  );
};

export default ResturantCard;
