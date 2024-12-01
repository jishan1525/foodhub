import { useEffect,useState } from "react";
import { useParams } from "react-router-dom";
import {IMG_CDN_URL} from "./constants";
import ShimmerCard from "./shimmer";
import useRestaurant from "../utils/useRestaurant";





const ResturantMenu = () => {  
    const params = useParams();
//const [restaurant, setRestaurant]= useState({});
const restaurant = useRestaurant(params.id);


//10575
//const {id} = params; //destructuring



    
    
    return (!restaurant)?<ShimmerCard/>: (
        <div className="restaurant-container">
            <h1>{restaurant.name}</h1>
            
            <img className="restaurant-image" src={IMG_CDN_URL+restaurant.cloudinaryImageId} alt={restaurant.name} width={200}/>
            <p><strong>City :</strong> {restaurant.city}</p>
            <p><strong>Area :</strong> {restaurant.areaName}</p>
            <p><strong>Cost for two :</strong> {restaurant.costForTwoMessage}</p>
            <p><strong>Average Rating :</strong> {restaurant.avgRatingString}</p>

        </div>
    )
}

export default ResturantMenu; //default export  