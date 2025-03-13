import Productcard from "../components/Producctcard";
import styles from "../css-modules/productcard.module.css";
import Nav from "../components/Nav.jsx";

//raw data for each product. ID is image id from Pixabay.
const data = [
  { title: 'Flower Truffle', id: '8499837', alt: 'chocolate truffle and rose peddles', price: '$2.19', },
  { title: 'Fruit Truffle', id: '2424469', alt: 'chocolate truffle with fruit filling', price: '$2.59', },
  { title: 'Swirl Truffle', id: '4002952', alt: 'white chocolate dark swirl truffle', price: '$2.99', },
  { title: 'Orange Chocolate Truffle', id: '8499202', alt: 'chocolate cluster wtih orange truffle', price: '$2.19', },
  { title: 'Three Pack', id: '182861', alt: 'three truffles variety', price: '$5.99', },
  { title: 'Frosted Truffle', id: '1737435', alt: 'frosted truffles', price: '$2.79', },
];

//List component uses product card to map each item.
const List = ( {items} ) => {
  return (
  <div className={styles.list}>
  {items.map((item) => (
  <Productcard
    key={item.id}
    title={item.title}
    id={item.id}
    alt={item.alt}
    price={item.price}
  >
  </Productcard>
  ))}
  </div>
  )
}

//Shop route
export const Shop = () => {
    return (
      <div>
        <h1>The Truffle Shop</h1>
        <div className={styles.shop}>
          <List items={data}></List>
          <Nav></Nav>
          </div>
      </div>
    );
  };
  
  export default Shop;