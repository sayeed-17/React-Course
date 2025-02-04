// const heading=React.createElement("h1",{id:"heading",xyz:"hello"},"hello world from react!!!");//Here it will take 3 paramteres 
// const root=ReactDOM.createRoot(document.getElementById("root"));//here we will be creating the root and now look up.... in div id root should have the heading inside it...generally we use append chil but here we will be using root.render before taht we will be creating the root element like a fragment.... 
// root.render(heading)

{/* <div id="parent">
    <div id="child">
        <h1>i am h1 heading</h1>
        <h2>i am h2 heading</h2>
    </div>
    <div id="child2">
        <h1>i am h1 heading</h1>
        <h2>i am h2 heading</h2>
    </div>
</div> */}
import React from "react";
import ReactDOM from "react-dom";

const parent=React.createElement("div",{id:"parent"},[//here if we wnat to add the child tags we will open an array ok...if u have siblings then also u will open an array....so it is becoming so hard right...that is the reason we use JSX.
    React.createElement("div",{id:"child"},[
        React.createElement("h1",{},"i am h1 heading"),
        React.createElement("h2",{},"i am h2 heading"),
    ]),
    React.createElement("div",{id:"child2"},[
        React.createElement("h1",{},"i am h1 heading"),
            React.createElement("h2",{},"i am h2 heading"),
        ])
    ]);
const root=ReactDOM.createRoot(document.getElementById("root"))
root.render(parent);


// we will create a div tag with ud root and in that we will render everything that we want to render...its like creating the html that is not there intailly by writing the js code...om manipulation....

//react.createElement means it doesnt create a html tag....when we see it in a console it is just a pure JS object....root.render() function will convert it to html tags of the pure js object(intailly it takes js object (which we wrote ) and convert it into the html tags which browswer understands...)....did u get it now.....


//the sequence of the lines is very important u can write react code only after u import the cdn links otherwise it will throw an reference error...
//HERE root we will decide.... like with the div tag whose id is root that will be our root and in that we are going to rendr the things......
// if there is already content written inside the div tag with id=root what happens is that it will replace the data.....and if anything that is written outside of the div tag with id=root that will also gets rendered..... if u want to change the root then u can do it that also like div tag with id="header"...u can set this as root...  
