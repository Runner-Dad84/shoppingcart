import { Link } from "react-router-dom";

export default function Nav () {
    return (
    <nav>
        <ul>
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
