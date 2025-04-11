import { useEffect,useState } from "react";



const useRestaurantMenu=(resId)=>{
    const [resinfo,setResinfo]=useState(null);

    useEffect(()=>{
        fetchData();
    },[])
    const fetchData=async ()=>{
        const data=await fetch(`https://thingproxy.freeboard.io/fetch/https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.10261738646051&lng=72.88602069261388&restaurantId=${resId}&submitAction=ENTER`+resId)
        const json=await data.json();
        console.log(json)
        setResinfo(json.data)

    }
    return resinfo;
}
export default useRestaurantMenu;