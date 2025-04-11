const Grocery=()=>{
    return(
        <>
        <h1>it is  a grocery store and it has a lot of components an sub components in it</h1>
        </>
    )
}
export default Grocery;
//Episode 9
//the point that we are creating grocery component here is ....in episode 8 of optimizing the application we know taht parcel will bundle all the components as 1 js file and all html files as 1 html file and all the css files as 1 css file and we have to make sure that this bundle size of js should be small...if the "bundle size becomes big" then it is called as "bloating of the app"..."in order to reduce the size if the bundle we will break our code into small pieces and create different bundles so that size of bundles will be small"...this process is called as "chunking"..... for this to happen we will make use of teh concept called as lazy loading which will make that component as a seperate bundle as well as lazy loading means load that component only when we wanted to to do so....otherwise dont load that component unill and unless we navigate to that page......so in this we will be having lazy method which consists arrow method in which it consists of import method having path of the component...and we will be using the suspend fallback(which returns jsx) in order to show the things during the time period where the lazy loading component gets loaded instead of thrwoing error.u can see this bundle in netork--->js.before only 1 js used to there now it used to have 2 js bundles....got it