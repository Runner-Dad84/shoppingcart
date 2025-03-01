import { Link } from "react-router-dom";
import styles from "../css-modules/nav.module.css";

export default function Nav () {
    return (
    <nav className={styles.nav}>
        <ul className={styles.ul}>
          <li className={styles.li}>
            <Link to="cart">Cart</Link>
          </li>
          <li className={styles.li}>
           
                <Link to="shop">Shop Now</Link>
                <span>0</span>
         
          </li>
          <li className={styles.li}>
             <Link to="/">Return</Link>
          </li>
        </ul>
      </nav>
    )
}
