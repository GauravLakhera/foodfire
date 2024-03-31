import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
const Crousal = ({ imageId }) => {
  //in thie component we are getting each image (imageId) from crousal and then we computing its position 
  return (
    <img
      className="w-full h-full object-cover mix-blend-multiply"
      src={
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/" +
        imageId
      }
      alt="Crousal"
    ></img>
  );
};

export default Crousal;
