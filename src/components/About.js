import User from "./User";
import UserClass from "./UserClass";
const About = ()=>{
    return(
        <div>
            <h1>This is Namaste React web series</h1>
            {/* <User name={"sayeed(function)"}/> */}
            <UserClass name={"sayeed(class)"} location={"Kakinada"}/>
        </div>
    )
}
export default About;