import RestaurentCard from "./RestaurentCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

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
      setFilteredRestaurentList(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };

    // conditional rendering
    return filteredRestaurentList.length===0? (<Shimmer></Shimmer>):(
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
            <Link to={"/restaurants/"+resData.info.id} style={{ textDecoration: 'none',color: 'inherit' }}><RestaurentCard key={resData.info.id} resData={resData} /></Link>
          ))}
        </div>
      </div>
    );
  };

  export default Body;