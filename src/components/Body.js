import { useEffect, useState } from "react";
import { resturantList } from "./constants";
import ResturantCard from "./ResturantCard";
import { useState, useEffect } from "react"; //importing useState from react
import shimmer from "./shimmer";

const Body = () => {
  // const searchTxt ="KFC"
  const [searchText, setSearchText] = useState("");
  const [resturants, setResturants] = useState([]); //Always keep this as the filtered state
  //Always keep this as the filtered state
 // const [resturnantList, setResturantList] = useState(originalResturantList); //Always keep this as the original state


async function getResturants() {
    const response = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.96340&lng=77.58550&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING#");
    
    const json = await response.json();
    console.log(json);
     //updating the state
    const list = json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    console.log(list);
    if (list) {
        setResturants(list); //updating the state 
    }
}

    useEffect(() => {  //useEffect is used to fetch the data from the server
        //fetch the data from the server
        //APi call
        getResturants();
    }, []); //empty array means it will run only once


  function filterData(searchText, resturants) {
        
        //using filter method
        if(!searchText){
            return resturants;
        }   
        return resturants.filter((restaurant) => {
            return restaurant.info.name.toLowerCase().includes(searchText.toLowerCase());
        });
  }

  //conditional rendering
  //ip my resturants array is empty then I will show loading
  //if resturant is not empty then I will show the resturant list
    

  return resturants.length === 0 ?(<shimmer/>) : (
    
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search for resturants"
          value={searchText} //seacrch text will be displayed in the input field as it is a local variable
          onChange={(e) => {
            setSearchText(e.target.value); //it will update the searchText variable
          }} // it is printing like KFCa as it is not updating the searchTxt variable
        />
        <button className="search-btn"
        onClick={() => {
            //need to fliter the data
            //update the resturnrant list
            const data = filterData(searchText, resturants); //need to search searchText in the resturantList and update the state
            //update the state - resturants
           
            setResturants(data);
        }}
        >Search</button>


      </div>
      <div className="resturant-list">
        {resturants.map((restaurant) => (
          <ResturantCard key={restaurant.info.id} restaurant={restaurant} />
        ))}
      </div>
    </>
  );
};



export default Body; //default export

