import React from "react"
class UserClass extends React.Component{
    constructor(props){
        super(props);
        
        // this.state={
        //     count:0,
        // }
        this.state={
            userinfo:{
                name:"dummy data",
                location:"chennai",
            }
        }
        console.log(this.props.name,"constructor called")
    }
    async componentDidMount(){

        console.log(this.props.name,"component mounted")
        const data=await fetch("https://api.github.com/users/sayeed-17")
        const json=await data.json();
        console.log(json);
        this.setState(
            {
                userinfo:json,
            }
        )
    }
    componentDidUpdate(){
        console.log("component Did Update")
    }
    componentWillUnmount(){
        console.log("component will unmount")
    }
    render(){
        // const {name,location}=this.props;
        // const{count}=this.state;
        console.log(this.props.name,"render called")
        return(
            <div className="user-card">
                {/* <h1>count :{count} </h1> */}
                {/* <button onClick={()=>{
                    this.setState({
                        count : this.state.count+1
                })
                }}>increase count</button> */}
                <img src={this.state.userinfo.avatar_url}/>
            <h2>Name : {this.props.name}</h2>
            <h2>Location :{this.props.location} </h2>
            <h2>Contact : syedsayeedtech@gmail.com</h2>
            </div>
        )
    }
}
export default UserClass;

//FUNCTIONAL COMPONENTS ARE NORMAL JS FUNCTIONS WHICH RETURNS A PIECE OF JSX...IN THE SIMILAR WAY CLASS COMPONENTS ARE JS CLASSES WHICH HAS A RENDER FUNCTION WHICH RETURNS A PIECE PF JSX.....u use class keyword followed by compinent name and write extends React.component which tells react that it is a class component and rest is same as functional component.

//and here in class components we know that we will be receieving props as objects similar to that of functional components but here in a constructor and we have to use super(props) definetly because super is special function which is used to call the parent class constructor...in class components React.component is the parent component....hence it says that "hey React.component you first run ur constructor as i have to do my setup and then run my construtor like that..." without this super(props) we cant be able to access the this.props and it returns Reference Err...

//And coming to destructuring we know that this.props is the object and we have to access the names and location from it so we write  // const {name,location}=this.props; this line..


//here to craete a state variable inside constructor u will be using this.state={......} like this in which this.state is a big object which consists of all the state variables where as in the functional components all the state variabkes will be defined in the different lines.

//here to change the state in class components u make use of the this.setState() function which is returns a object so write the logic in curly braces.do not try to change the state variables directly in both classs and functional components...make use of the setCount(variable name)and this.setState in class components...dont directly overwrite like this.state.count=this.state.count+1; yeh galat haiii




//LIFE CYCLE METHODS IN CLASS COMPONENTS 
//let us assume that we have a parent class component(About) as well as a child class component(UserClass).....while executing first constructor is called and then render is called of About and then if in parent class component it has the child class component <UserClass/> in this case....it will call the constructor an render  of UserClass and then it will call the componentDidMount() function because constructor and render is called and then component gets loaded and once it gets loaded then parent componet gets loaded......

// componentDidMount() is similar to that of useEffect in functional components and we will call teh apis only when the component gets loaded right??????? so first we will confirm that component gets loaded and then we will be calling the api calls inside it.


//This is how the api call is done(only for single instancenot for multiple)
//----------MOUNTING PROCESS----------------
// constructor is called
// state varaibles is set(dummy)
// render is called
// updates the dummy values for few milli seconds
//componentDidMount is called
//api is called


//render is called once again
//upadtes the state variables using this.setState() and renders it

//componentDidUpdate is called after update gets complted
//when u change the page if it is seen on screen that means component is mounted/remdered if that component is not seen on screen then it is said to be as component is  unmounted....so here whenever u change the screen from about to contact pahe componentwillunmount will be called.


//CONSTRUCTOR--->RENDER---->COMPONENT DID MOUNT--->API CALL--->RENDER AGAIN(AS SETSTATE IS CALLED)-->component did upadte---->component will unmount
