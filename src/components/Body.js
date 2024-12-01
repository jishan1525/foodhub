import { useEffect, useState } from "react";
import ShimmerCard from "./shimmer";
import ResturantCard from "./ResturantCard";
import { Link } from "react-router-dom";
import filterData from "../utils/helper";
import useOnline from "../utils/useOnline";


// useEffect: Used to perform side effects, like fetching data from an API.
// 	•	useState: For managing component states, like restaurant data and search text.
// 	•	ShimmerCard: A component that shows a loading effect while the actual data is being fetched.
// 	•	ResturantCard: A component to display restaurant details.


//State Intialization
// searchText: Tracks the user’s search input.
// 	•	allResturant: Holds all the restaurant data fetched from the API.
// 	•	filteredResturants: Stores the filtered list of restaurants based on the search query.
// 	•	isLoading: Keeps track of whether the app is still fetching data. Initially set to true.

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [allResturant, setAllResturant] = useState([]);
  const [filteredResturants, setFilteredResturants] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // New state to track loading

  //fetching resturants
  // •	getResturants: An async function to fetch data from the Swiggy API.
	// •	fetch: Makes an HTTP request to the API endpoint.

  async function getResturants() {
    try {
      const response = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.96340&lng=77.58550&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING#"
      );

        //       	response.json(): Converts the response into JSON format.
	// •	list: Extracts the list of restaurants from the API response using optional chaining (?.).
      const json = await response.json();
      const list =
        json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants;



  // •	setAllResturant: Updates the state with the full restaurant list.
	// •	setFilteredResturants: Initializes the filtered restaurant list with the full list.
	// •	catch: Handles errors during the API call.
	// •	finally: Ensures isLoading is set to false after the API call is completed (successfully or not).

      if (list) {
        setAllResturant(list);
        setFilteredResturants(list);
      }
    } catch (error) {
      console.error("Failed to fetch restaurants:", error);
    } finally {
      setIsLoading(false); // Set loading to false once data is fetched
    }
  }

  // •	useEffect: Runs the getResturants function once when the component mounts (due to the empty dependency array []).

  useEffect(() => {
    getResturants();
  }, []);

  //filtering restruants
  // •	searchText: If empty, returns the full list of restaurants.
	// •	filter: Filters the restaurant list where the name includes the search query (case-insensitive).


  

  //Loading state - Shimmer
  // •	If isLoading is true, displays 6 shimmer cards using Array.fill and map.
  const isOnline = useOnline();

  if (!isOnline) {
    return (
      <div className="offline-banner">
        <h1>Offline, please check your connection!</h1>
      </div>
    );
  }


  if (isLoading) {
    // Show shimmer while loading
    return (
      <div className="resturant-list">
        {Array(6)
          .fill("")
          .map((_, index) => (
            <ShimmerCard key={index} />
          ))}
      </div>
    );
  }

  return (
    <>
      {/* search input and button funtionality */}
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search for restaurants"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
          className="search-button"
          onClick={() => {
            const data = filterData(searchText, allResturant);
            setFilteredResturants(data);
          }}
          
        >
          Search
        </button>
      </div>
      {/* conditional rendering for results 
          •	If No Results: Displays "No Results Found" if filteredResturants is empty.
          •	Otherwise: Maps through filteredResturants to render ResturantCard components.
      */}
      <div className="resturant-list">
        {filteredResturants.length === 0 ? (
          <h3 className="no-results">No Results Found</h3>
        ) : (
          filteredResturants.map((restaurant) => (
            <Link
              to={"/rest/" + restaurant.info.id}
              style={{ textDecoration: "none" }}
            >
              <ResturantCard key={restaurant.info.id} restaurant={restaurant} />
            </Link>
          ))
        )}
      </div>
    </>
  );
};

export default Body;