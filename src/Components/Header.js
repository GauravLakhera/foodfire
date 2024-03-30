import { Link } from "react-router-dom";
import home from "../images/home.png";
import contectus from "../images/contectus.png";
import aboutus from "../images/about.png";
import logoImg from "../images/logo.jpg";
import cart from "../images/cart.png";
import { useSelector } from "react-redux";

const HeadComponent = () => {
  //subscribing to the store
  const cartInfo = useSelector((store) => store.cart.items);

  //store is provided by the react-redux this store in our appStore that we provided at the top level
  return (
    <div className="flex md:justify-around justify-between items-center bg-slate-100 shadow-md">
      <div className="flex items-start">
        <a href="/">
          <img className="w-24 mix-blend-multiply p-1" src={logoImg} />
        </a>
        <h4 className="hidden md:block text-xs md:text-sm md:py-2 md:px-0 first-line:underline text-slate-700 ">
          Rishikesh,Uttarakhand,Dehradun -249201
        </h4>
      </div>

      <ul className="flex  pr-2 space-x-1 md:space-x-8">
        <li className=" p-2 rounded-md hover:rounded-full hover:bg-gray-300 ">
          <Link to="/">
            <div className="flex flex-col content-center items-center">
              <img
                className="w-5 h-5 md:w-7 md:h-7 "
                src={home}
                alt="Home"
              ></img>
              <h1 className="mt-1 hidden md:block  font-semibold">Home</h1>
            </div>
          </Link>
        </li>
        <li className=" p-2 rounded-md hover:rounded-full hover:bg-gray-300">
          <Link to="/about">
            <div className="flex flex-col content-center items-center">
              <img
                className="w-5 h-5 md:w-7 md:h-7"
                src={contectus}
                alt="Contect us"
              ></img>
              <h1 className="mt-1 hidden md:block font-semibold">Contect us</h1>
            </div>
          </Link>
        </li>
        <li className=" p-2 rounded-md hover:rounded-full hover:bg-gray-300">
          <Link to="/contact">
            <div className="flex flex-col content-center items-center">
              <img
                className="w-5 h-5 md:w-7 md:h-7"
                src={aboutus}
                alt="About us"
              ></img>
              <h1 className="mt-1 hidden md:block  font-semibold">About us </h1>
            </div>
          </Link>
        </li>
        <li className="p-2  rounded-md hover:rounded-full hover:bg-gray-300">
          <Link to="/cart">
            <div className=" flex flex-col items-center">
              <img
                className="w-5 h-5 md:w-7 md:h-7"
                src={cart}
                alt="cart"
              ></img>
              {cartInfo.length > 0 ? (
                <h1 className="text-md font-bold">({cartInfo.length})</h1>
              ) : (
                <h1 className="mt-1 hidden md:block  font-semibold">Cart</h1>
              )}
            </div>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default HeadComponent;
