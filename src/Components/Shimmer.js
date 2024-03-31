const Shimmer = () => {
  return (
    <div className="flex flex-col border mb-2 shadow-xl w-52 bg-gray-300 animate-pulse ">
      {/* img */}
      <div className="w-full h-56 object-cover rounded-t-lg  bg-gray-100  animate-pulse "></div>
      <h2 className="text-lg font-semibold text-center p-2 bg-gray-100 text-transparent animate-pulse">
        Restaurent Name
      </h2>
      <h3 className="overflow-hidden text-ellipsis whitespace-nowrap m-2 bg-gray-100 text-transparent animate-pulse">
        cuisines.join
      </h3>

      <div className="flex justify-around items-center p-2 border">
        <h1 className="text-ellipsis text-sm font-serif bg-gray-100 text-transparent animate-pulse">
          time
        </h1>

        <div className="flex justify-center items-center font-serif bg-gray-100 text-transparent animate-pulse">
          <h4>Rating</h4>
        </div>
      </div>
    </div>
  );
};

export default Shimmer;
