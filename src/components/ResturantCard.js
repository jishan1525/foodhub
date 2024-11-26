//using resturantList array of objects to make the card dynamic
import {IMG_CDN_URL} from "./constants";

const ResturantCard = ({ restaurant }) => {
    return (
      <div className="card">
        <img src={IMG_CDN_URL + restaurant.info.cloudinaryImageId} />
        <h1>{restaurant.info.name}</h1>
        <p>{restaurant.info.cuisines.join(", ")}</p>
        <p>{restaurant.info.avgRatingString} star</p>
      </div>
    );
  };

  export default ResturantCard; //default export