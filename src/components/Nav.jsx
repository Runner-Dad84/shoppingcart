import { Link } from "react-router-dom";
import styles from "../css-modules/nav.module.css";

export default function Nav () {
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
            <span className={styles.cart}>0</span>
          </li>
        </ul>
      </nav>
    )
}
