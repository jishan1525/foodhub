//using resturantList array of objects to make the card dynamic
import {IMG_CDN_URL} from "./constants";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa"; 

// Function to render stars based on rating
const renderStars = (rating) => {
  const stars = [];
  const fullStars = Math.floor(rating); // Number of full stars
  const halfStar = rating % 1 >= 0.5; // Check if there's a half star
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0); // Remaining empty stars

  // Push full stars
  for (let i = 0; i < fullStars; i++) {
    stars.push(<FaStar key={`star-full-${i}`} className="star filled" />);
  }
  // Push half star if needed
  if (halfStar) {
    stars.push(<FaStarHalfAlt key="star-half" className="star half" />);
  }
  // Push empty stars
  for (let i = 0; i < emptyStars; i++) {
    stars.push(<FaRegStar key={`star-empty-${i}`} className="star empty" />);
  }

  return stars;
};

const ResturantCard = ({ restaurant }) => {
    return (
      <div className="card">
        <img src={IMG_CDN_URL + restaurant.info.cloudinaryImageId} />
        <h1>{restaurant.info.name}</h1>
        <p>{restaurant.info.cuisines.join(", ")}</p>
        <div className="rating">
        {renderStars(restaurant.info.avgRating)} {/* Render the star rating */}
        <span className="rating-text">({restaurant.info.avgRating}) ratings </span>
      </div>
      </div>
    );
  };

  export default ResturantCard; //default export