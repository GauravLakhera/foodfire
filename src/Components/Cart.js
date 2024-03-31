import { useDispatch, useSelector } from "react-redux";

import { cleareCart } from "../utils/cartSlice";
import alt from "../Images/alt.jpg"

const Cart = () => {
    //geting the cart items from store
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();

  //this function will remove all cart elements by calling cleareCart() Function
  const RemoveFromCart = () => {
    dispatch(cleareCart());
  };
//Conditional rendering o the basis of cart items
  if (cartItems.length === 0)
    return (
      <div className="p-1 text-black text-center font-semibold text-xl m-52">
        No items. 
      </div>
    );
  else
    return (
      <div className="flex  justify-center content-center bg-slate-200 flex-col flex-wrap  my-4">
        <button
          className="p-1 bg-slate-400 m-2 rounded-md text-white cursor-pointer "
          onClick={RemoveFromCart}
        >
          Clear Cart
        </button>
        {/* iterating over the cartItem and diapaying the info in Cart component */}
        {cartItems.map((item) => (
          <div
            key={item.card.info.id}
            className="my-2 flex flex-row justify-between bg-slate-50 rounded-md p-2 border-blue-100 border-b-2"
          >


            <div className="flex flex-col">
              <span className="flex mb-1">
                <h1 className="text-xl">{item.card.info.name}</h1>
                <h1 className="mx-2">₹ {item.card.info.price / 100}</h1>
              </span>

              <h1 className="text-sm font-serif">
                {item.card.info.description}
              </h1>
            </div>

            <div>
              <img
                className="w-24 h-24 rounded-sm object-fill md:w-36 md:h-24"
                src={
                  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
                  item.card.info.imageId
                }
                alt={alt}
              ></img>
            </div>
          </div>
        ))}
      </div>
    );
};

export default Cart;
