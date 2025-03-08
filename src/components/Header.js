import { LOGO_URL } from "../../utils/constants";
const Header=()=>{
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
                </ul>
            </div>
        </div>
    )
}

export default Header;