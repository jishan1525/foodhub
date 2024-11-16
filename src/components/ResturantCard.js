//using resturantList array of objects to make the card dynamic
import {IMG_CDN_URL} from "./constants";

const ResturantCard = ({ restaurant }) => {
    return (
      <div className="card">
        <img src={IMG_CDN_URL + restaurant.info.cloudinaryImageId} />
        <h2>{restaurant.info.name}</h2>
        <h3>{restaurant.info.cuisines.join(", ")}</h3>
        <h4>{restaurant.info.avgRatingString} star</h4>
      </div>
    );
  };

  export default ResturantCard; //default export