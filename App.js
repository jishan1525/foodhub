const logo = (
  <a href="/" className="header-logo">
    <img
      alt="logo"
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQduWeshXxyo7rGEmHnyTUsTpxOFtleP5mZ2g&s"
    ></img>
  </a>
);

const Header = () => 
    (
  <div className="header">
    {logo}
    <ul className="nav">
      <a>
        <li className="nav-item">Home</li>
      </a>
      <a>
        <li className="nav-item">Cart</li>
      </a>
      <a>
        <li className="nav-item">Contact</li>
      </a>
      <a>
        <li className="nav-item">About</li>
      </a>
    </ul>
  </div>
);

const BodyContent =()=>(
<div className="card-content">
    <img className="card-image" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/ixgxvfu6ggvw1w1awgr1"></img>
    <p>Samosa Party</p>
    <p>4.3 star 30-35 mins</p>
    <p>Fast Food, Snacks, Beverages</p>
    <p>Brigade Road</p>
</div>
);

const Heading =() => 
    (
        <>
        <Header/>
        <BodyContent/>
        </>
    );
var target = ReactDOM.createRoot(document.getElementById("header"));
target.render(<Heading/>);
