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
    <div className="m-3 w-60 h-fit rounded-md bg-slate-200-2 cursor-pointer hover:border-2 hover:border-red-100 hover:shadow-xl hover:border-solid ">
      <img className=" rounded-[20px] " src={CDN_URL  } alt="Res Logo" />
      <h3 className="px-3 text-left font-black text-lg">{name}</h3>
      <h4 className="px-2 font-semibold test-sm "> {cuisines.join(", ")}</h4>
      <h4 className="px-2 font-extralight test-sm "> {costForTwo}</h4>
      <h4 className="px-2 font-extralight test-sm "> {avgRating} ✡</h4>
      <h4 className="px-2 font-extralight test-sm ">{sla?.slaString}</h4>
    </div>
  );
};

export default ResturantCard;
