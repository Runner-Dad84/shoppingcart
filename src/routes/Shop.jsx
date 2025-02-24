import { Link } from "react-router-dom";
import Productcard from "../components/Producctcard";

const Shop = () => {
    return (
      <div>
        <h1>The Shop</h1>
        <p>Items go here!</p>
        <Productcard
          title={'Tests Image'}
          url={'www.test'}
          alt={'green goo'}
          price={"$99"}
        >
        </Productcard>
        <Link to="/cart">Cart</Link>
        <Link to="/">Return</Link>
      </div>
    );
  };
  
  export default Shop;