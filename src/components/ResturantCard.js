import { CDN_URL } from "../utils/constants";
const ResturantCard = (props) => {
  const {data} = props;
  const  {
    cloudinaryImageId,
    name,
    avgRating,
    cuisines,
    costForTwo,
    sla,
  } = data?.info;
  return (
    <div className="res-card">
      <img className="res-logo" src={CDN_URL  } alt="Res Logo" />
      <h3 className="res-name">{name}</h3>
      <h4> {cuisines.join(", ")}</h4>
      <h4> {costForTwo}</h4>
      <h4> {avgRating} ✡</h4>
      <h4>{sla?.slaString}</h4>
    </div>
  );
};

export default ResturantCard;
