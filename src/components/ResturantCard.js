import { CDN_URL } from "../utils/constants";
import { useContext } from "react";
import UserContext from "../utils/UserContext"
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

  const user  = useContext(UserContext);
  return (
    <div className="mx-3 w-60 h-fit   cursor-pointer hover:border-2 hover:border-red-100 hover:shadow-xl hover:border-solid ">
      <img className=" rounded-[20px] " src={CDN_URL  } alt="Res Logo" />
      <h3 className="px-3 text-left font-black text-lg">{name}</h3>
      <h4 className="px-2 font-semibold   text-sm "> {cuisines.join(", ")}</h4>
      <h4 className="px-2 font-extralight text-sm "> {costForTwo}</h4>
      <h4 className="px-2 font-extralight text-sm "> {avgRating} ✡</h4>
      <h4 className="px-2 font-extralight text-sm ">{sla?.slaString}</h4>
      <h4 className="px-2 font-extralight text-sm ">{user?.loggedUser}</h4>
    </div>
  );
};
export const withPromotedLabel = (ResturantCard)=>{
  return( props)=>{
    return(
      <div>
        <label className=" absolute bg-black text-white m-2 p-2 rounded-md">Promoted</label>
        <ResturantCard {...props} />
      </div>

    )
  }
}
export default ResturantCard;
