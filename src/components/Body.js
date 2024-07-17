import RestaurentCard from "./RestaurentCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [restaurentList, setRestaurentList] = useState([]);
  const [filteredRestaurentList, setFilteredRestaurentList] = useState([]);

  const [searchText, setSearchText] = useState("");
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.02760&lng=72.58710&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setRestaurentList(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurentList(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false) {
    return <h1>Looks like you are offline. Please check your connection.</h1>;
  }
  // conditional rendering
  return filteredRestaurentList.length === 0 ? (
    <Shimmer></Shimmer>
  ) : (
    <div className="body">
      <div className="flex">
        <div className="search m-4 p-4">
          <input
            className="border border-solid border-black"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          ></input>
          <button
            className="px-4 py-2 bg-green-100 m-4 rounded-lg"
            onClick={() => {
              const filteredRestaurents = restaurentList.filter((e) =>
                e.info.name.toUpperCase().includes(searchText.toUpperCase())
              );
              setFilteredRestaurentList(filteredRestaurents);
            }}
          >
            Search
          </button>
        </div>
        <div className="search m-4 p-4">
          <button
            className="px-4 py-2 bg-green-200 m-4 rounded-lg"
            onClick={() => {
              let filteredRestaurents = restaurentList.filter(
                (res) => res.info.avgRating > 4.4
              );
              setFilteredRestaurentList(filteredRestaurents);
            }}
          >
            Top Rated Restaurents
          </button>
        </div>
      </div>

      <div className="res-container flex flex-wrap">
        {filteredRestaurentList.map((resData) => (
          <Link
            to={"/restaurants/" + resData.info.id}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <RestaurentCard key={resData.info.id} resData={resData} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
