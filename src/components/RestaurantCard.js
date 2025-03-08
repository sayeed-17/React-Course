import { CDN_URL } from "../../utils/constants";
const RestaurantCard=({resobj})=>{
    return(
        <div className="res-card">
            <img className="res-logo"src={CDN_URL+resobj.info.cloudinaryImageId} alt="food logo" />
            {/* <h3>Meghana Foods</h3>
            <h3>Biryani,Andhra,South Indian</h3>
            <h3>4.3 stars</h3>
            <h3>38 mins</h3> */}
            {/* <h3>{props.resname}</h3>
            <h3>{props.cuisines}</h3>
            <h3>{props.rating}</h3>
            <h3>{props.delivery_time}</h3> */}

<h3>{resobj.info.name}</h3>
<h3>{resobj.info.cuisines.join(",")}</h3>
<h3>{resobj.info.avgRating} stars</h3>
<h3>{resobj.info.sla.deliveryTime} minutes</h3>

           
        </div>
    )

}

export default RestaurantCard;