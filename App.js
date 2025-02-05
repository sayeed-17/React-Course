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
import ReactDOM from "react-dom/client";

// const parent=React.createElement("div",{id:"parent"},[//here if we wnat to add the child tags we will open an array ok...if u have siblings then also u will open an array....so it is becoming so hard right...that is the reason we use JSX.
//     React.createElement("div",{id:"child"},[
//         React.createElement("h1",{},"i am h1 heading"),
//         React.createElement("h2",{},"i am h2 heading"),
//     ]),
//     React.createElement("div",{id:"child2"},[
//         React.createElement("h1",{},"i am h1 heading"),
//             React.createElement("h2",{},"i am h2 heading"),
//         ])
//     ]);
// const root=ReactDOM.createRoot(document.getElementById("root"))
// root.render(parent);

const jsxheading=<h1>i am sayeed</h1>;
const sayeed=(<h1>ewww

</h1>);
console.log(jsxheading)
//REACT ELEMENT=>react elememnt is the jsx that is assigned to the variable
const eww=(
    <>
    <h1>i am superhero</h1>
    <div>
        i am stronger
    </div>
    </>);

const Eww=()=>(
    <>
    <h1>i am superhero</h1>
    <div>
        i am stronger
    </div>
    </>);

//FUNCTIONAL COMPONENT => whereas the fc is the component that is a js function that returns the JSX and it should start with captal letters when u inject one coponent in anorher component it is called as component composition.
const HeadingComponent=()=>(
    <>
    <Eww/>  
    <Eww></Eww>
    {Eww()}
    {1234+234}
    {/* as we are on the same component page no  need to export and import */}
    <h1>i am superhero</h1>
    <div>
        i am stronger
    </div>
    </>

);
const root=ReactDOM.createRoot(document.getElementById("root"))
root.render(<HeadingComponent/>);




// we will create a div tag with ud root and in that we will render everything that we want to render...its like creating the html that is not there intailly by writing the js code...om manipulation....

//react.createElement means it doesnt create a html tag....when we see it in a console it is just a pure JS object....root.render() function will convert it to html tags of the pure js object(intailly it takes js object (which we wrote ) and convert it into the html tags which browswer understands...)....did u get it now.....


//the sequence of the lines is very important u can write react code only after u import the cdn links otherwise it will throw an reference error...
//HERE root we will decide.... like with the div tag whose id is root that will be our root and in that we are going to rendr the things......
// if there is already content written inside the div tag with id=root what happens is that it will replace the data.....and if anything that is written outside of the div tag with id=root that will also gets rendered..... if u want to change the root then u can do it that also like div tag with id="header"...u can set this as root...  



//Babel is a package which is used to transpile the code(from jsx) into pure js which browser understnds...

//jsx is html written inside the js but we cant say it like that...it is a html look a like thats it...
//React.createEement does not create  a html element ...it is a pure js object....react will make it render as the html tag on te browsere
//in the same way jsx (babael converts) it to=> createElement=>js object=>html(renders)

//COMPONENTS ARE NOTHING BUT THE JS FUNCTION WHICH RETURNS JSX

//react elements are the js which is assigned to the varaible and using {} u can write js inside of thiis...inside functional components  you can use the another component let us we want to use the Title component we can use it in 3 ways like 1)<Title/>  2)<Title><Title/> 3){Title()}...as the EOD it is js function...jsx makes ur code readable and the jsx will not blindly fetc e data and give iut to you it has a special quality like crossorigin thing which will sanitize the data and give u the correct data if data is coming from api ...like it eleiminates the malicious data .... and and u  can render another react element under the react element and at the same time u can render component under reactelement and vice versa using {})(curly braces)