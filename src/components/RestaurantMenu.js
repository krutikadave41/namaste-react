import { useState } from "react";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);
  const [showIndex, setShowIndex] = useState(null);
  if (resInfo === null) {
    return <Shimmer />;
  }
  const { name, costForTwoMessage, cuisines } =
    resInfo?.cards[2]?.card?.card?.info;
  
  const itemCards =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
  const categories = itemCards?.filter(
    (c) =>
      c?.card?.["card"]?.["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );

  return (
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl">{name}</h1>
      <p className="text-lg font-bold">
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>

      {categories.map((category, index) => (
        <RestaurantCategory
          key={category.card.card.title}
          category={category.card.card}
          showItems = {index === showIndex? true : false}
          setShowIndex = {()=>{ setShowIndex(index)}}
        ></RestaurantCategory>
      ))}
    </div>
  );
};

export default RestaurantMenu;
