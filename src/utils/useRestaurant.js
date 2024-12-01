import { useEffect, useState } from "react";
import { FETCH_MENU_URL } from "../components/constants";

const useRestaurant = (resId) => {
  const [restaurant, setRestaurant] = useState(null); //this will store the data we get from the API
  //fetch the data for us and return the data
  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    const response = await fetch(`${FETCH_MENU_URL + resId}`);
    const json = await response.json();
    console.log(json);
    setRestaurant(json.data?.cards[2]?.card?.card?.info || {});
  }
  return restaurant;
};

export default useRestaurant;
