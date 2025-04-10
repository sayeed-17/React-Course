<!-- #react js by namaste react


//npm means node package manager here u will be having all the packages that u need for ur project to implement and work faster.....
//packages are the piece of code which is needed for our project to run fastly
//dependencies are alo projects which our project needs...let us  say we will be having manyyyy packages in npm and we use only react,react-dom,axios packages ....and our project depends on this projects so it is called as dependencies....

//we also have bundlers...bundlers are the things which bundles the whole code to take them into the production
examples are:vite,parcel,etc....

package.json is a json file which describes about our project like what dependecies our project needs,what is the name of the project, what is the version and what are the run command scripts,...like that...

there are 2 dependcies in our package.json nrml dependenciesa nd the devtool dependencies....nrml dependencies are the ones which are used for projcect to RUNNNNN and take it to production level...whereas the dev depenciesa re the ones which are used only during development like eslint,parcel,vite etc...


PACKAGE-LOCK.JSON file consists of locked versions of dependencies we are working upon...whereas the package.json file contaiens the depencies with versions with a symbol ^ which tells that it can be updated to minor updates in that versions but says no to major update ... whereas the package lock json file locks the version...if anyone clones project the depenecy with version installed is same as that of the what is mentioned in package-lock.json....

 npm init, only package.json is created.

👉 package-lock.json is NOT created immediately.
It is automatically generated only when you install a package using npm install.
✅ npm init → Only package.json is created.
✅ npm install (first time) → Creates both package-lock.json & node_modules/.
✅ package.json lists dependencies, while package-lock.json locks exact versions.



Great question! 🚀 Since node_modules/ is not included in production, how does the code run?

📌 How React Code Runs in Production Without node_modules/?
When you run npm run build, React (via Webpack) bundles your entire app into static files inside the build/ folder. These static files do not require node_modules/ to run.

📌 What Happens During npm run build?
✅ Webpack and Babel take your React code and convert it into plain JavaScript, CSS, and HTML.
✅ Unused dependencies from node_modules/ are removed (a process called "Tree Shaking").
✅ The final output contains only optimized files that the browser can run.

📁 Example of the build/ folder (after npm run build):

css
Copy
/build
  ├── index.html  ✅ Main HTML file  
  ├── static/
      ├── js/ ✅ Bundled and minified JavaScript  
      ├── css/ ✅ Minified CSS  
      ├── media/ ✅ Images and assets  
Everything inside the build/ folder is ready to be deployed to a server (like Vercel, Netlify, or Firebase Hosting).



📌 What Happens When You Build (npm run build)?
1️⃣ React (using Webpack) bundles only the required files into the build/ folder.
2️⃣ Unused dependencies (from node_modules/) are NOT included in the final build/ output.
3️⃣ Only the final optimized static files (HTML, CSS, JS, images) are kept in the build/ folder.



📌 So How Does the Code Work in Production?
1️⃣ Your build/ folder is uploaded to a hosting service.
2️⃣ The browser loads the static files (HTML, CSS, JS) from the server.
3️⃣ Since JavaScript runs in the browser, there’s no need for node_modules/ anymore! -->




<!-- we have parcel which is a devdependency (it is used to do multiple things)it is like a superpower for react....
-minification of code
-compression
-tree shaking(during build it automatically removes the unwanted files)
-file watching algorithm
-fast caching
-hot module replacement(when u save automatically it renders the output in browser)
-dev build
-consistent hashing
-local server
-image optimization
-bundling
-differntial bundling(that  means it allows our app to run on the older versions also)
-diagnostic
-error handling


npx is used to execute the dependency....
when we build the parcel what happens is that it will be removing all the unnecessary files and only takes up the imporatnt files and make them as static files such as html css js and assests....
when we excecute the npx parcel command dist and .parcel-cache are created(these both are re generated files)..
they can be generated again by npx parcel...andddd we remove the cdn links as tehy are not good practice as we have to pdate the links for the latest versions again and again...and also we make use of the broswerversion in node mouldes to set up the latest versions...
npx parcel index.html(root file)... .parcel-cache are used to have fast build process -->

<!-- here dist is a imp folder like after bundling the static files will be going inside the dist and from there we can  run the files im production -->

<!-- FILE STRUCTURE IN REACT -->
<!-- here we have created a file structure to follow teh company conventionss.....in that for each and every component we will make a seperate file inside src  -->
<!-- inteadof hardcoding teh data like urls and the apis or array of objects data....(usually teh things wich should be available to entire project is sent in to the UTILS folder) -->


<!-- EXPORT AND IMPORT  -->
<!-- in case if u want to export only one component u can export it like this
this is called as default import and export 
export default COMPONENT_NAME;
and u can import it like this 
import COMPONENT_NAME from "PATH"

in case if u want to export multiple things in a single file it is not posible by default export 
there comes the concept of named exports and imports(refer constants.js in UTILS folder)
u can export like this 
export const LOGO_URL="https://www.google.com";
and u can import like this
import {LOGO_URL} from "path" -->

//EPISODE 6
<!-- let us know about monolithic architecture and microservices architecture
monolithic architecture : in this architecture everything like backend code frontend code authentication code api ocde and db code everything is wriiten inside a single project...what actually happens with this is even if u want to do a small change it may effect the other services like db backened frotend and u have to deploy it again and agian and also if it is a java project then iu have to code everything in the same tech stack....

microservices architecture:all teh micro services can be witten with the different tech stack and we make them interact with each other....this is the best way to code as each and every services are independent to each other... -->


<!-- now let us talk about the  types of rendering of a page

1. page loads---> api call(500ms)--->then rendering of the content

<!-- 2. page loads---> renders the dummy data(shimmer ui)--->api call(as soon as the api gets called)-->renders teh actual data

we always perefer the second way as it is the best practice.

useeffect is the second hook that we are going to use...useeffect is used to do a action after once the page got render...that is if u want to perform any special thing or any work after once page is rendered we make use of the useeffect. --> -->


<!-- EPISODE 7 -->

MORE POINTS TO KNOW ABOUT USEEFFECT
USEFFECT HOOK IS USED WHEN U WANT TO DO SOMETHING AFTER UR COMPONNT GOT RENDERED...IN THE USEEFFECT U WILL BE HAVING TWO ARGUMENTS A ARROW FUNCTION AND A DEPENDENCY ARRAY....
DEPENDENCY ARRAY CHANGES THE BEHAVIOUR OF THE USEEFFECT HOOK
LIKE BY DEFAULT IT WILL BE HAVING NO DEPENDENCY ARRAY.......THERE ARE THREE TYPES OF DEPENDENCY ARRAYS
1.when the dependency array is not present ===> useeffect will be called after every render
2.when the dependency array is empty ===> it will be called only after intial rende.... after it wont be called for any of the renders 
3.when the dependency array has teh dependency.....useeffect will be called everytime only the dependency gets updated/changed



MORE POINTS TO KNOW ABOUT USESTATE
1.usestate gives us a local state variable which should be written inside a functional component ....make sure that u will be writing the usestate hook inside the functional component
2.always make sure that it should be written inside the top of the functional component
3.always make sure that u wont be using the usestate inside the loops,functions and conditional statemnets as it may leads to inconsistency in the code.

CreateBrowserRoute is used to create the route cong=figuration and we assign it to teh variable and it is list of objects in whuch we have path,element,errrorelement...path will tell the path that is going to be added to base url(/,/about,/contact)....and element will tell what component or page to render if that is present...and errorelement will tell what to render in case if wrong url is given other than path


and route provide will be incluing this created configuration to the app

UseRouteError hook is used to know more about the error we create a variable and assign this function to it and comnsole log it....by using this hook we can get extra info abt error


firs t ogf alll we will be creating configurations to say on what path what componet/page has to be rendered like that...after that  to make the navigation happen u will make use of the thing is called as "Link" in which u will tell where to navigate ...it is isimilar to that of the anchor tag but there whole page gets reloaed here the component gets changed thats it page doesnt get reloaded component rerenders thats it....in anchor tag we will be using href=""...but in Link we will be using to="" like this....

we make use of the children in the createBroserRouter if u want to header to be intact and change the body according to the page u r in....u just make a root element to remder at the top and in children u will tell at what path what element has to be rendered like that....for this to happen u should add "Outlet" to the root element.....what Outlet does is that it will replaces the element/component according to path in children ....

single page applications means here in react instead of going to different pages on the single page itself the components renders

there are two types of Routing
1.server side routing(here the things are loaded from the network calls)
2.client-side Routing(here the things are already loaded u just use them)