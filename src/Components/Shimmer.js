const Shimmer = () => {
    return (
      <div className="flex flex-col border mb-2 shadow-xl w-52 bg-gray-200 ">
        {/* img */}
        <div className="w-full h-56 object-cover rounded-t-lg  bg-gray-100 "></div>
        <h2 className="text-lg font-semibold text-center p-2 bg-gray-100 text-transparent">
          Restaurent Name
        </h2>
        <h3 className="overflow-hidden text-ellipsis whitespace-nowrap m-2 bg-gray-100 text-transparent">
          cuisines.join
        </h3>
  
        <div className="flex justify-around items-center p-2 border">
          <h1 className="text-ellipsis text-sm font-serif bg-gray-100 text-transparent">
            time
          </h1>
  
          <div className="flex justify-center items-center font-serif bg-gray-100 text-transparent">
            <h4>Rating</h4>
          </div>
        </div>
      </div>
    );
  };
  
  export default Shimmer;
  