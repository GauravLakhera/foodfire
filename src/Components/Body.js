import { useEffect, useState } from "react";
import Cards from "./Cards";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import info from "../constant";
import Crousal from "../Components/Crousal";
import Form from "../Components/Form";

//filtering the data on the basis of seach input value 
function filterData(searchInput, restaurents) {
  return restaurents.filter((res) =>
    res.info.name.toLowerCase().includes(searchInput.toLowerCase())
  );
}

const Body = () => {
  const [FilteredRestaurents, setFilteredRestaurents] = useState([]);
  const [restaurents, setRestaurent] = useState([]);
  const [searchInput, setSeachInput] = useState(""); //useState  returns -> [variable name ,  function to update the variable value]
  const [carousel, setcarousel] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  //for submission form
  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    // Api call fro restaurent data
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(
      "https://foodfire.onrender.com/api/restaurants?lat=21.1702401&lng=72.83106070000001&page_type=DESKTOP_WEB_LISTING"
    );
    //converting returned data from API to JSON formate
    const json = await data.json();
    setRestaurent(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurents(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setcarousel(info);
    console.log(carousel);
  }
  //setting object for crousal
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },

      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          dots: false,
        },
        breakpoint: 347,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          dots: false,
        },
      },
    ],
  };
  //check online status
  const isOnline = useOnlineStatus();
  if (isOnline === false)
    return (
      <h1 className="text-xl font-bold text-center ">No internet connection</h1>
    );
  //checking if restaurent has some value or not // Conditional rendering
  return restaurents.length === 0 || typeof restaurents === undefined ? (
    <>
      <div className="  md:w-9/12 w-11/12 m-auto flex flex-wrap justify-evenly shadow-2xl  mt-52">
        {Array.from({ length: 12 }, (_, index) => (
          <Shimmer key={index} />
        ))}
      </div>
    </>
  ) : (
    <>
      <div class="rounded-lg border-b p-2 w-full md:w-6/12 m-auto flex content-center items-center justify-around">
        <div class="flex">
          <div class="flex w-10 items-center justify-center rounded-tl-lg rounded-bl-lg border-r border-gray-200 bg-white p-5">
            <svg
              viewBox="0 0 20 20"
              aria-hidden="true"
              className="pointer-events-none absolute w-5 fill-gray-500 transition"
            >
              <path d="M16.72 17.78a.75.75 0 1 0 1.06-1.06l-1.06 1.06ZM9 14.5A5.5 5.5 0 0 1 3.5 9H2a7 7 0 0 0 7 7v-1.5ZM3.5 9A5.5 5.5 0 0 1 9 3.5V2a7 7 0 0 0-7 7h1.5ZM9 3.5A5.5 5.5 0 0 1 14.5 9H16a7 7 0 0 0-7-7v1.5Zm3.89 10.45 3.83 3.83 1.06-1.06-3.83-3.83-1.06 1.06ZM14.5 9a5.48 5.48 0 0 1-1.61 3.89l1.06 1.06A6.98 6.98 0 0 0 16 9h-1.5Zm-1.61 3.89A5.48 5.48 0 0 1 9 14.5V16a6.98 6.98 0 0 0 4.95-2.05l-1.06-1.06Z"></path>
            </svg>
          </div>
          <input
            type="text"
            className="w-full border max-w-[160px] bg-white pl-2 text-base font-semibold outline-0"
            placeholder="Search"
            value={searchInput}
            //e.target.value => whatever you write on input feild
            onChange={(e) => setSeachInput(e.target.value)} //setSeachInput is a function that is used to change the value of variable(searchInput) in useState Hook
          />

          <button
            className="bg-blue-500 p-2 rounded-tr-lg rounded-br-lg text-sm text-white font-semibold hover:bg-blue-800 transition-colors"
            onClick={() => {
              // need to filter the data for sarch
              const filteredData = filterData(searchInput, restaurents);
              setFilteredRestaurents(filteredData);
              document.getElementById("close").classList.toggle("hidden");
            }}
          >
            Search
          </button>
          <button
            id="close"
            className="bg-red-500 m-1 rounded-xl w-5  text-slate-100 hidden text-center "
            onClick={() => {
              setFilteredRestaurents(restaurents);
              document.getElementById("close").classList.toggle("hidden");
              setSeachInput("");
            }}
          >
            X
          </button>
        </div>
        <div className="flex flex-col items-center justify-items-center ">
          <button
            className="bg-blue-500 p-2 rounded-tr-lg rounded-br-lg text-sm text-white font-semibold hover:bg-blue-800 transition-colors"
            onClick={togglePopup}
          >
            Submit form
          </button>
          {/* //rendering custom Form component  */}
          <Form isOpen={isOpen} togglePopup={togglePopup} />
        </div>
      </div>

      <div>
        <h1 className="font-bold text-2xl w-9/12 m-auto pt-2">
          Hey, What's on your mind ?
        </h1>
      </div>
      <div className="flex bg-slate-50">
        {/* Conditional rendering if there is crousal or not  */}
        {carousel.length === 0 ? (
          <h1>No crausol</h1>
        ) : (
          <div className="w-9/12 m-auto md:w-8/12">
            {/* Slider is an component given by react library for displaying components */}
            <Slider {...settings}>
              {carousel.map((res) => (
                <Crousal key={res.id} {...res} />
              ))}
            </Slider>
          </div>
        )}
      </div>

      <h1 className="md:w-9/12 w-11/12 m-auto text-slate-800 text-xl font-semibold py-5 my-3 border-b-2 bg-slate-50">
        Top Restaurant Chains In Rishikesh
      </h1>
      <div className="bg-gray-50">
        <div className=" md:w-9/12 w-11/12  m-auto md:p-5 flex content-center flex-wrap bg-white justify-center md:justify-around shadow-2xl ">
          {/* Conditional rendering on the basis of search result that is stored inside FilteredRestaurents */}
          {FilteredRestaurents.length === 0 ? (
            <h1 className="text-center text-xl m-5 p-5 text-red-600 border rounded-2xl">
              No restaurents found
            </h1>
          ) : (
            FilteredRestaurents.map((res) => (
              <Link
                className="custom-link"
                key={res.info.id}
                // if any restaurent Card is clicked it will redirect to its corresponding page using res.info.id
                to={"/restaurent/" + res.info.id}//this act as an onclick on each restauernt card 
              >
                {/* calling Card component with restaurent data passing as props */}
                <Cards {...res.info} />
              </Link>
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default Body;
