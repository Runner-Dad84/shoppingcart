import { Link } from "react-router-dom";
import Productcard from "../components/Producctcard";
import  SetAmount from "../components/Button";

const images = [

  { id: '8499837', alt: 'chocolate truffle and rose peddles' },
  { id: '2424469', alt: 'chocolate truffle with fruit filling' },
  { id: '4002952', alt: 'white chocolate dark swirl truffle' },
  { id: '8499202', alt: 'chocolate cluster wtih orange truffle' },
  { id: '182861', alt: 'three truffles variety' },
  { id: '1737435', alt: 'frosted truffles' },
  
];

const Shop = () => {
    return (
      <div>
        <h1>The Shop</h1>
        <p>Items go here!</p>
        <Productcard
          title={'Tests Image'}
          id={images[5].id}
          alt={images[5].alt}
          price={"$99"}
        >
        </Productcard>
        <Link to="/cart">Cart</Link>
        <Link to="/">Return</Link>
      </div>
    );
  };
  
  export default Shop;