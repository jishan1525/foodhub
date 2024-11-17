// it wont work until and unless we export it from here
//therre are two ways to export it 1. default export 2. named export
// export default Title;    //default export 
// export {Title};           //named export
// so the question is what is the difference between them - suppose if we hae multiple components in a single file then we can use named export bcoz we can export multiple components from a single file but in case of default export we can export only one component from a single file
// so in this case we can use default export bcoz we have only one component in this file

import { useState } from "react"; //importing useState from react

const Title = () => (
  
    <a href="#">
      <img
        className="logo"
        alt="logo"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQduWeshXxyo7rGEmHnyTUsTpxOFtleP5mZ2g&s"
      />
    </a>
    
  );
 
  const Header = () => {
    return (
      <div className="header">
        <Title />
        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Cart</li>
          </ul>
        </div>
      </div>
    );
  };

  export default Header;