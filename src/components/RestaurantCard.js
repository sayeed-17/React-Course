import { CDN_URL } from "../../utils/constants";
const RestaurantCard=({resobj})=>{
    return(
        <div className=" p-4 m-4 bg-gray-100 w-50 break-words rounded-sm hover:bg-gray-120 shadow-sm transition duration-300">
            <img className="res-card object-cover rounded-sm" src={CDN_URL+resobj.info.cloudinaryImageId} alt="food logo" />
            {/* <h3>Meghana Foods</h3>
            <h3>Biryani,Andhra,South Indian</h3>
            <h3>4.3 stars</h3>
            <h3>38 mins</h3> */}
            {/* <h3>{props.resname}</h3>
            <h3>{props.cuisines}</h3>
            <h3>{props.rating}</h3>
            <h3>{props.delivery_time}</h3> */}

<h3 className="py-1 font-bold text-orange-400">{resobj.info.name}</h3>
<h3 className="py-1 text-md text-cyan-700 text-wrap break-words">{resobj.info.cuisines.join(",")}</h3>
<h3 className="py-1 text-md text-cyan-700 text-wrap">{resobj.info.avgRating} stars</h3>
<h3 className="py-1 text-md text-cyan-700 text-wrap">{resobj.info.sla.deliveryTime} minutes</h3>

           
        </div>
    )

}

export default RestaurantCard;