import { Link } from "react-router-dom";

const Cart = () => {
    return (
      <div>
        <h1>Shopping Cart</h1>
        <p>Items go here!</p>
        <Link to="/shop">Shop Now</Link>
        <Link to="/">Return</Link>
      </div>
    );
  };
  
  export default Cart;
  