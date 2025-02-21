import { Link } from "react-router-dom";


const Shop = () => {
    return (
      <div>
        <h1>The Shop</h1>
        <p>Items go here!</p>
        <Link to="/cart">Cart</Link>
        <Link to="/">Return</Link>
      </div>
    );
  };
  
  export default Shop;