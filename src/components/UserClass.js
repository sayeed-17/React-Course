import React from "react"
class UserClass extends React.Component{
    constructor(props){
        super(props);
        console.log(props);
        this.state={
            count:0,
        }
    }
    render(){
        // const {name,location}=this.props;
        const{count}=this.state;
        return(
            <div className="user-card">
                <h1>count :{count} </h1>
                <button onClick={()=>{
                    this.setState({
                        count : this.state.count+1
                })
                }}>increase count</button>
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