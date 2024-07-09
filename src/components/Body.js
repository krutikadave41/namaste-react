import RestaurentCard from "./RestaurentCard";
import { resList } from "../utils/restaurents";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
    const [restaurentList, setRestaurentList] = useState([]);
    const [filteredRestaurentList, setFilteredRestaurentList] = useState([]);

    const [searchText, setSearchText ]= useState("");
    useEffect(()=>{
      fetchData();
    }, []);
    const fetchData = async () => {
      const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.02760&lng=72.58710&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
      const json = await data.json();
      setRestaurentList(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      setFilteredRestaurentList(restaurentList);
    };

    // conditional rendering
    return restaurentList.length===0? (<Shimmer></Shimmer>):(
      <div className="body">
        <div className="filter">
            <input className="search-txt" value={searchText} onChange={(e)=>{
              setSearchText(e.target.value)
            }}></input>
            <button className="btn-search" onClick={()=>{
              const filteredRestaurents = restaurentList.filter(e=>e.info.name.toUpperCase().includes(searchText.toUpperCase()));
              setFilteredRestaurentList(filteredRestaurents);
            }}>Search</button>
            <button className="btn-filter" onClick={()=>{
                let filteredRestaurents = restaurentList.filter(res=>res.info.avgRating>4.4);
                setFilteredRestaurentList(filteredRestaurents);
            }}>Top Rated Restaurents</button>
        </div>
        <div className="res-container">
          {filteredRestaurentList.map((resData) => (
            <RestaurentCard key={resData.info.id} resData={resData} />
          ))}
        </div>
      </div>
    );
  };

  export default Body;