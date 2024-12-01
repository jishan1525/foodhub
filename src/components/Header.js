// it wont work until and unless we export it from here
//therre are two ways to export it 1. default export 2. named export
// export default Title;    //default export 
// export {Title};           //named export
// so the question is what is the difference between them - suppose if we hae multiple components in a single file then we can use named export bcoz we can export multiple components from a single file but in case of default export we can export only one component from a single file
// so in this case we can use default export bcoz we have only one component in this file

import {useState} from "react"; //importing useState from react
import { Link } from "react-router-dom";




const Title = () => (
  
    <a href="#">
      <img
        className="logo"
        alt="logo"
        src="https://london-post.co.uk/wp-content/uploads/2020/06/foodhub-logo.png"
      />
    </a>
    
  );
 
  const Header = () => {
    //maanging login and logout using stateHooks
    const [isLoggedIn, setIsLoggedIn]= useState(true);
    return (
      
      
      <div className="header">
        <Title />
        <div className="nav-items">
          <ul>
            <Link to ="/"><li>Home</li></Link>
            <Link to ="/About"><li>About</li></Link>
            <Link to ="/Contact"><li>Contact</li></Link>
            {/* <Link to ="/Instamart"><li>Instamart</li></Link> */}
            <li>Cart</li>
            </ul>
            
        </div>
        {/* Conditionally render Login/Logout button */}
        {isLoggedIn ? (
            <button onClick={() => setIsLoggedIn(false)}>Logout</button>
          ) : (
            <button onClick={() => setIsLoggedIn(true)}>Login</button>
          )}
      </div>
    );
  };

  export default Header;