import { Link } from "react-router-dom";
import styles from "../css-modules/nav.module.css";
import { CountContext } from "./Counter.jsx";
import { useContext } from 'react';

export default function Nav () {
    const context= useContext(CountContext);

    if (!context) {
        console.log('Error, context unavailable')
        return <p>Error! Context not found.</p>
    }

    const { count, setCount } = context;
    
    return (
    <nav className={styles.nav}>
        <ul className={styles.ul}>
        <li className={styles.li}>
             <Link to="/">Home</Link>
          </li>
          <li className={styles.li}>
                <Link to="shop">Shop Now</Link>
          </li>
          <li className={styles.li}>
            <span>Shopping Cart</span>
            <span className={styles.cart}>{count}</span>
          </li>
        </ul>
    </nav>
    )
}


