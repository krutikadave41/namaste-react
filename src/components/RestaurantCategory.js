import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ category }) => {
  const [showItems, setShowItems] = useState(false);
  const handleClick = () => {
    setShowItems(!showItems);
  };
  return (
    <div className="w-6/12 p-2 mx-auto my-4 text-left ">
      <div
        className=" bg-gray-50 shadow-lg flex justify-between cursor-pointer"
        onClick={handleClick}
      >
        <span className="font-bold text-lg">
          {category.title} ({category.itemCards.length}){" "}
        </span>
        <span>⬇️</span>
      </div>

      {showItems && <ItemList items={category.itemCards} />}
    </div>
  );
};

export default RestaurantCategory;
