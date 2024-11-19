import { useEffect,useState } from "react";
import { useParams } from "react-router-dom";





const ResturantMenu = () => {  
    const params = useParams();
const [restaurant, setRestaurant]= useState({});

 useEffect(() => {
    getRestaurantInfo();
},[

]);
async function getRestaurantInfo(){
    const response = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.96340&lng=77.58550&restaurantId=10575&catalog_qa=undefined&submitAction=ENTER`);
    const json = await response.json();
    console.log(json);
    setRestaurant(json.data); 
}


    const {id} = params; //destructuring
    
    return (
        <div>
            <h1>Restraunt id:{id}</h1>
                    <h2>{restaurant.name}</h2>
        </div>
    )
}

export default ResturantMenu; //default export  