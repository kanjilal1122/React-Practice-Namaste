const RestuarantCategory = ({data}) => {
  return <div className="w-6/12 mx-auto my-4 bg-gray-50 p-4 flex justify-between">
    <span className="font-bold text-lg">{ data?.title || "accordion"} {data?.itemCars?.length || Math.floor(Math.random())} </span>
  </div>;
};

export default RestuarantCategory;
