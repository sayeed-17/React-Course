import { LOGO_URL } from "../../utils/constants";
import { useState } from "react";
const Header=()=>{
    const [LoginBtn,setLoginBtn]=useState("login");
    return(
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL} alt="app logo" />
            </div>
            <div className="nav-links">
                <ul>
                    <li>Home</li>
                    <li>About </li>
                    <li>Contact us</li>
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
//if u use normal js variable here it cant dynamically render on the ui for that to happen u use of teh state variable which will automatically renders whenever there is a call of setSTATE() function and it will render teh whole component.