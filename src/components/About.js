import React from "react";
import UserClass from "./UserClass";

class About extends React.Component{
    constructor(props){
        super(props);
        console.log("parent constructor called")
    }
    componentDidMount(){
        console.log("parent component mounted")
    }
    render(){
        console.log("parent render called")
        return(
            <div>
                <h1>This is Namaste React web series</h1>
                {/* <User name={"sayeed(function)"}/> */}
                <UserClass name={"sayeed(class)"} location={"Kakinada"}/>
                <UserClass name={"sameer"} location={"amaravati"}/>
            </div>
        )

    }
}
export default About;

//here u may think this as the hierarchy of componentDidMount
// parent constructor called
// parent render called
// sayeed constructor called
// sayeed render called
// sayeed componentDidMount called
// sameer constructor called
// sameer render called
// sameer componentDidMount called
// parent componentDidMount called
// //but this is false because....react has a small concept here which is called as reconciliation....
//react class components lifecycle methods for componentDidMount has 2 phases 1.render phase and 2.commit phase
//in render phase both the constructor and render of all the children are called and batched as one 
//in commit phase the Actual DOM changes will be happening so instead of changing it again and agian the react will batch the constructor and render aso one and then it make the changes in DOM ..
//Then the actaul hierarchy will be like this 
// parent constructor called
// parent render called
// sayeed constructor called---render phase
// sayeed render called---render phase
// sameer constructor called---render phase
// sameer render called---render phase
{/* < DOM GETS UPDATED HERE IN SINGLE BATCH > */}
// sayeed componentDidMount---commit phase
// sameer componentDidMount---commit phase
// parent componentDidMount---commit phase
