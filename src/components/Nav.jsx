import { Link } from "react-router-dom";
import styles from "../css-modules/productcard.module.css";

export default function Nav () {
    return (
    <nav className={styles.nav}>
        <ul className={styles.ul}>
          <li>
            <Link to="cart">Cart</Link>
          </li>
          <li>
            <button>
                <Link to="shop">Shop Now</Link>
                <span>0</span>
            </button>
          </li>
          <li>
             <Link to="/">Return</Link>
          </li>
        </ul>
      </nav>
    )
}
