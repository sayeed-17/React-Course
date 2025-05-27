import { CDN_URL } from "../../utils/constants";
const RestaurantCard=({resobj})=>{
    return(
        <div className=" flex flex-wrap m-4 p-4 flex-row border border-gray-100 bg-gray-50 rounded-xl shadow-md">
            <img className="res-logo w-[200px] h-[200px] object-cover rounded-xl"src={CDN_URL+resobj.info.cloudinaryImageId} alt="food logo" />
            {/* <h3>Meghana Foods</h3>
            <h3>Biryani,Andhra,South Indian</h3>
            <h3>4.3 stars</h3>
            <h3>38 mins</h3> */}
            {/* <h3>{props.resname}</h3>
            <h3>{props.cuisines}</h3>
            <h3>{props.rating}</h3>
            <h3>{props.delivery_time}</h3> */}

<h3 className="font-bold text-lg mt-2">{resobj.info.name}</h3>
<h3 className="text-md">{resobj.info.cuisines.join(",")}</h3>
<h3 className="text-md">{resobj.info.avgRating} stars</h3>
<h3 className="text-md">{resobj.info.sla.deliveryTime} minutes</h3>

           
        </div>
    )

}

export default RestaurantCard;