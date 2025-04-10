import { useState } from "react";
const User = ({name})=>{
    const [count]=useState(0);
    const [count2]=useState(1);
    
    return(
        <div className="user-card">
            {/* <h2>Name : {props.name}</h2> */}
            <h1>count : {count}</h1>
            <h1>count2 : {count2}</h1>
            <h2>Name : {name}</h2>
            <h2>Location : kakinada</h2>
            <h2>Contact : syedsayeedtech@gmail.com</h2>
        </div>
    )
}
export default User;
//here in this u send a data from parent componet and the child recieves it using a props(simply a object) and from that we access the data that we need.u can destructure it also ...in functional components u know any how an object called props is being  passed here like u recieve to child component u can directly access  it as {variable_name}....