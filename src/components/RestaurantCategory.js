import { useState } from "react";
import ItemsCategory from "./ItemsCategory";
// import { CDN_URL } from "../../utils/constants";

const RestaurantCategory=({data,showItems,setShowIndex})=>{
    console.log("data",data)
    const handleclick=()=>{
        setShowIndex();

    }

    return (
        <>
        <div className="bg-gray-50 w-9/12 mx-auto">
            <div className="flex justify-between my-4 bg-gray-50 p-4 shadow-lg cursor-pointer" onClick={handleclick}>
            <span className="font-medium text-xl">
                {data.title}
                ({data.itemCards.length})
            </span>
            <button className="cursor-pointer">{"⬇"}</button>
            </div>
            <div className="m-1 text-start">
             {showItems && <ItemsCategory items={data}/>}
            </div>
            
        </div>
            </>
    )
    
}
export default RestaurantCategory;