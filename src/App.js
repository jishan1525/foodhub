import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { IMG_CDN_URL } from "./components/constants";
import Footer from "./components/Footer";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import About from "./components/About";
import ErrorPage from "./components/Error";
import Contact from "./components/Contact";
import ResturantMenu from "./components/ResturantMenu";

//default import
//import Title from "./components/Header";
//named import
//import { Title } from "./components/Title";
//this is not object destructoring as we are importing the default export and not the named export
// import * as Obj from "./components/Title"; //this is object destructoring as we are importing all the named exports from the file
//how to use this obj => Obj.Title
//config driven UI development in react using JSX is basically making the UI dynamic and this a good practice
//When we buid a website so we want to render the same component multiple times with different data. So we can make the component dynamic by passing the data as props to the component and then rendering the component multiple times with different data. This is called config driven UI development.
//backend is driving the UI with the help of APIs and the data is coming from the server and we are rendering the data in the UI. The data is coming in the form of an array of objects and we are mapping over the array and passing the object as a prop to the component and rendering the component multiple times with different data. This is called config driven UI development.

// const config = [
//   {
//     type: "carousel",
//     card: [
//       {
//         offerName: "50% off"
//       },
//       {
//         offerName: "No delivery charges"
//       }
//     ]
//   }
//   {
//   type: "ResturantCard",
//   cards:[
//     {
//       name: "Pizza Hut",
//       image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/7/16/5b9c53df-e0cb-48fc-ac31-f02735592edc_10575.jpg",
//       cusines: ["Pizza", "burger"],
//       rating: 5.0
//   },
//   {
//     name: "Dominos",
//     image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/10/24/a543f9e4-cc95-47b6-a728-c8a8538cf7e5_23846.JPG",
//     cusines: ["Pizza", "Sandwich"],
//     rating: 4.5
//   }
//   ]
//   }
// ]

//there was type which defines what to render and where to render the data. for eg:- the card type craousel will render the offerName with the help of backend data which can differ from place to place and can also be a case where we don't have any so in that case the craousel will not be rendered. The ResturantCard type will render the resturant card with the help of backend data which can differ from place to place and can also be a case where we don't have any so in that case the ResturantCard will not be rendered. So the data is coming from the server and we are rendering the data in the UI. The data is coming in the form of an array of objects and we are mapping over the array and passing the object as a prop to the component and rendering the component multiple times with different data. This is called config driven UI development.

// const styleObj = {
//   color: 'blue',
//   fontSize: '20px'
// }
//there are 3 ways to style in react 1. inline styling 2. using css file 3. using external libraries like styled-components or tailwindcss
//inline styling in react
//style attribute is an object so we use double curly braces and camelCase for css properties. Also, we can use variables since it is an object which are specified outside the return statement. geenrally speacified at the top of the file and used in the return statement. the attribute is passed as a key value pair in the object and sepatated by a comma, not by a semicolon since it is an object.

// const jsx = (
//   <div>
//     <h1 style={styleObj}>Hello World</h1>
//     <p style={{color: 'red', fontSize: '20px'}}>This is a paragraph</p>
//   </div>
// )

//Composing components

//building the resturant card --> Hardcoding the data(we will fetch the data from the server later)
// const ResturantCard = () => {
//   return (
//     <div className="card">
//       <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/7/16/5b9c53df-e0cb-48fc-ac31-f02735592edc_10575.jpg" alt="Resturant"/>
//       <h2>Pizza Hut</h2>
//       <h3>Pizza and burger</h3>
//       <h4>Rating: 5.0</h4>
//     </div>
//   )
// }
//The problem with the above code is that we are hardcoding the data. Next we will fetch the data from the server and display it in the card as it should be dynamic and as we are using JSX we can do that by using curly braces and javascript expressions

//the data will be fetched from the server and stored in the object will look something like this and we will pass this object as a prop to the ResturantCard component
// const pizzaHut = {
//   name: "Pizza Hut",
//   image:
//     "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/7/16/5b9c53df-e0cb-48fc-ac31-f02735592edc_10575.jpg",
//   cusines: ["Pizza", "burger"],
//   rating: 5.0,
// };

//using props from above to make the card dynamic
//so in real world cases the data doesn't come in this fashion, it comes in the form of an array of objects so we will map over the array and pass the object as a prop to the ResturantCard component eg 0ne of the object is pizzaHut and there can be other resturants as well
// const ResturantCard = () => {
//   return (
//     <div className="card">
//       <img src={pizzaHut.image} alt="Resturant" />
//       <h2>{pizzaHut.name}</h2>
//       <h3>{pizzaHut.cusines.join(",")}</h3>
//       <h4>{pizzaHut.rating}</h4>
//     </div>
//   );
// };

//live data from swiggy
//check constants.js for the file
// check conponents/Body.js for the code

//no key < index key < unique key  //key is used to identify the element in the list

const AppLayout = () => {
  return (
    //React Fragment as a parent element <></> or <React.Fragment></React.Fragment>
    //JSX expression must have one parent element and we don't want to add extra div
    //React.Fragment is a built-in component that we can use to wrap multiple elements and it doesn't render any extra element to the DOM
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

const appRounter = createBrowserRouter(
  [
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/Contact",
        element: <Contact/>,
      },
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/rest/:id",
        element: <ResturantMenu/>,
      },
      // {
      //   path: "/formik",
      //   element: <formik/>,
      // },
    ]
  }
]);

const root = ReactDOM.createRoot(document.getElementById("root")); // Create a root
//root.render(<HeaderComponent/>);  // Render the component tree//
root.render(<RouterProvider router={appRounter} />); // Render the component tree
