import { LOGO_URL } from "../../utils/constants";
import { useState } from "react";
import { Link } from "react-router";
import useOnlineStatus from "../../utils/useOnlineStatus";
const Header=()=>{
    const [LoginBtn,setLoginBtn]=useState("login");
// // 1.when the dependency array is empty==> it will be called only after initial render
// useEffect(()=>{
//     console.log("useEffect is called")
//     fetchData();
//   },[])
//     //2. whenhen the dependency array is not present==>it will be called after every render
//   useEffect(()=>{
//     console.log("useEffect is called")
//     fetchData();
//   })
// //3.when the dependency array is having dependency(LoginBtn) ==>it will be called after every time that dependency(LoginBtn) gets changed/updated.
//   useEffect(()=>{
//     console.log("useEffect is called")
//     fetchData();
//   },[LoginBtn])
const onlinestatus=useOnlineStatus();
    return(
        <div className="header flex justify-between  bg-pink-100 sm:bg-yellow-100 lg:bg-green-100">
            <div className="logo-container">
                <img className="logo w-40" src={LOGO_URL} alt="app logo" />
            </div>
            <div className="nav-links">
                <ul className="header-lists flex mx-4 px-6 py-4 items-center justify-center">
                    <li className="p-4 text-2xl">online status:{onlinestatus?"🟢":"🔴"}</li>
                    <li className="p-4 text-2xl"><Link to="/">Home</Link></li>
                    <li className="p-4 text-2xl"><Link to="/about">About Us</Link></li>
                    <li className="p-4 text-2xl"><Link to="/grocery">Grocery</Link></li>
                    <li className="p-4 text-2xl">Cart</li>
                    <button className="login-btn text-2xl" onClick={()=>{
                        LoginBtn==="login"?setLoginBtn("logout"):setLoginBtn("login");
                    }}>{LoginBtn}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header;
//if u use normal js variable here it cant dynamically render on the ui for that to happen u use of teh state variable which will automatically renders whenever there is a call of setSTATE() function and it will render the whole component.