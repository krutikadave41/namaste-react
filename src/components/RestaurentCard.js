import { RES_IMG_CDN } from "../utils/constants";

const styleCard = {
    backgroundColor: "#f0f0f0",
  };
  
  const RestaurentCard = (props) => {
    const resData = props?.resData;
    const { name, cuisines, avgRating, costForTwo, sla, cloudinaryImageId} = resData.info;
    return (
      <div
        className="m-4 p-4 w-[250px] rounded-lg"
        style={{
          backgroundColor: "#f0f0f0",
        }}
      >
        <img
          className="rounded-lg"
          alt="res-logo"
          src={RES_IMG_CDN + cloudinaryImageId}
        ></img>
        <h3 className="font-bold py-4 text-lg">{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{avgRating} stars</h4>
        <h4>{costForTwo} </h4>
        <h4>{sla.deliveryTime} minutes</h4>
      </div>
    );
  };

  export default RestaurentCard;