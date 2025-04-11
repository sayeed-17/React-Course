import { useState,useEffect } from "react";
const useOnlineStatus=()=>{
    const [onlinestatus,setOnlinestatus]=useState(true);
    useEffect(()=>{
        window.addEventListener("offline",()=>{
            setOnlinestatus(false);
        })//this is window's addeventlistener dont worry
        window.addEventListener("online",()=>{
            setOnlinestatus(true)
        })


    },[])
    return onlinestatus;//Boolean value
}
export default useOnlineStatus;
//custom hooks are used for adding the special functionality of our imagination to the project and custom hooks are completely reusable again and again like the nrml hooks let us here create a online status thing by using the custom hook useOnlineStatus....