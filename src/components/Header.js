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
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL} alt="app logo" />
            </div>
            <div className="nav-links">
                <ul className="header-lists">
                    <li>online status:{onlinestatus?"🟢":"🔴"}</li>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/contact">Contact Us </Link></li> 
                    <li><Link to="/grocery">Grocery</Link></li>
                    <li>cart</li>
                    <button className="login-btn" onClick={()=>{
                        LoginBtn==="login"?setLoginBtn("logout"):setLoginBtn("login");
                    }}>{LoginBtn}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header;
//if u use normal js variable here it cant dynamically render on the ui for that to happen u use of teh state variable which will automatically renders whenever there is a call of setSTATE() function and it will render the whole component.