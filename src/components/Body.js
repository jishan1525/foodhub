import { useState } from "react";
import { resturantList } from "./constants";
import ResturantCard from "./ResturantCard";
import { useState } from "react"; //importing useState from react
const Body = () => {
  // const searchTxt ="KFC"
  const [searchText, setSearchText] = useState();
  const [resturants, setResturants] = useState(resturantList);

  function filterData(searchText, resturants) {
        
        //using filter method
        if(!searchText){
            return resturants;
        }   
        return resturants.filter((restaurant) => {
            return restaurant.info.name.toLowerCase().includes(searchText.toLowerCase());
        });
  }


  return (
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
