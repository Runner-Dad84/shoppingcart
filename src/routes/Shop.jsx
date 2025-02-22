import { Link } from "react-router-dom";
import Productcard from '../components/producctcards.jsx'

const Shop = () => {
    return (
      <div>
        <h1>The Shop</h1>
        <p>Items go here!</p>
        <Productcard
        
        
        >

        </Productcard>
        <Link to="/cart">Cart</Link>
        <Link to="/">Return</Link>
      </div>
    );
  };
  
  export default Shop;