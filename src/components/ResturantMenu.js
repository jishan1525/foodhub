import { useEffect,useState } from "react";
import { useParams } from "react-router-dom";
import {IMG_CDN_URL} from "./constants";
import ShimmerCard from "./shimmer";





const ResturantMenu = () => {  
    const params = useParams();
const [restaurant, setRestaurant]= useState({});

 useEffect(() => {
    getRestaurantInfo();
},[

]);
//10575
//const {id} = params; //destructuring
async function getRestaurantInfo(){
    const response = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.96340&lng=77.58550&restaurantId=${params.id}`);
    const json = await response.json();
    console.log(json);
    setRestaurant(json.data?.cards[2]?.card?.card?.info || {}); 
}



    
    
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