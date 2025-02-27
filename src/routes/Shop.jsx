import { Link } from "react-router-dom";
import Productcard from "../components/Producctcard";
import  SetAmount from "../components/Button";

const images = [

  { title: 'Flower Truffle', id: '8499837', alt: 'chocolate truffle and rose peddles', price: '$2.19', },
  { title: 'Fruit Truffle', id: '2424469', alt: 'chocolate truffle with fruit filling', price: '$2.59', },
  { title: 'Swirl Truffle', id: '4002952', alt: 'white chocolate dark swirl truffle', price: '$2.99', },
  { title: 'Orange Chocolate Truffle', id: '8499202', alt: 'chocolate cluster wtih orange truffle', price: '$2.19', },
  { title: 'Three Pack', id: '182861', alt: 'three truffles variety', price: '$5.99', },
  { title: 'Frosted Truffle', id: '1737435', alt: 'frosted truffles', price: '$2.79', },
  
];

export const Shop = () => {
    return (
      <div>
        <h1>The Shop</h1>
        <p>Items go here!</p>

        <Productcard
          title={images[0].title}
          id={images[0].id}
          alt={images[0].alt}
          price={images[0].price}
        >
        </Productcard>

        <Productcard
          title={images[5].title}
          id={images[5].id}
          alt={images[5].alt}
          price={images[5].price}
        >
        </Productcard>
        <Link to="/cart">Cart</Link>
        <Link to="/">Return</Link>
      </div>
    );
  };
  
  export default Shop;