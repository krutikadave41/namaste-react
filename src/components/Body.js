import RestaurentCard from "./RestaurentCard";
import { resList } from "../utils/restaurents";

const Body = () => {
    return (
      <div className="body">
        <div className="search">Search</div>
        <div className="res-container">
          {resList.map((resData) => (
            <RestaurentCard key={resData.info.id} resData={resData} />
          ))}
        </div>
      </div>
    );
  };

  export default Body;