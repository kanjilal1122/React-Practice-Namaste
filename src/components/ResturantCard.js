import { CDN_URL } from "../utils/constants";
const ResturantCard = ({ data }) => {
    const { name, cuisines, costForTwo, delivayTime , rating } = data;
    return (
      <div className="res-card">
        <img
          className="res-logo"
          src={CDN_URL}
          alt="Res Logo"
        />
        <h3 className="res-name">{name}</h3>
        <h4> {cuisines.join(", ")}</h4>
        <h4> {costForTwo / 100}</h4>
        <h4> {rating}</h4>
        <h4>{delivayTime} Minutes</h4>
      </div>
    );
  };

  export default ResturantCard;