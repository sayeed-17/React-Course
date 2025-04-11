// import { useEffect,useState } from "react" 
import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import useRestaurantMenu from "../../utils/useRestaurantMenu";
//here we imported usestate coz we have the data coming  from the api and to show that u need state right for that we will be using this usestate....
//UseParams is a hook we is used to fetch the dynamic param values that we give in url and returns a object...in that object it will be like {resId : 229} like this

const RestaurantMenu = ()=>{
    const {resId}=useParams()
    // const [resInfo,setResInfo]=useState(null) 
    // useEffect(()=>{
    //     fetchMenu();
    // },[])
    // const fetchMenu=async ()=>{
    //     const data=await fetch(`https://thingproxy.freeboard.io/fetch/https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.10261738646051&lng=72.88602069261388&restaurantId=${resId}&submitAction=ENTER`)
    //     const json=await data.json();
    //     console.log("json",json)
    //     setResInfo(json.data) 
    // }
    const resInfo=useRestaurantMenu(resId);//CUSTOM HOOK episode 8
    //WE MADE USE OF THE CUSTOM HOOK(useRestaurantMenu) here because this component is doing 2 things fetching the api data and displayimg the data soo good code should have one component with one responsibility so we have created a hook which is used to create a new hook and to fetch the api...now this component only responsible for displaying the data not for fetching of data ok???????....it is simply assigned to variable and we make use of that hook thats it...custom hook is similar to that of the nrml component no diff at all...u just assign it to variable for use instead of calling the component</componetname> like this.... 

   
    if(resInfo===null){
        return <Shimmer/>
    }
    const {name,cuisines,costForTwoMessage}=resInfo?.cards[2]?.card?.card?.info;
    const {itemCards}=resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    // console.log("here")
    // console.log("resInfo",resInfo);
return(
    <div className="menu">
        <h1>{name}</h1>
        <p>{cuisines.join(",")}-{costForTwoMessage}</p>
        <h1>Menu</h1>
        {
        itemCards.map((item)=>(
             <li key={item?.card?.info?.id}>{item.card.info.name}</li>
        ))
    }
    </div>
)
}
export default RestaurantMenu