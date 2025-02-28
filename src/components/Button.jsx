import { useState } from "react";
import styles from "../css-modules/productcard.module.css";



export default function SetAmount () {
    const [count, setCount] = useState(0);

    /*decrement handler min of 0 */
    function decrement () {
        if (count > 0) {
            return setCount(count - 1)
        } else {
            return setCount(0);
        }
    };

    return (
        <div>
            <button
            onClick={()=>setCount(count + 1)}
            className={styles.addBtn}
            >+
            </button>
            <span>{count}</span>
            <button
            onClick={()=>decrement()}
            className={styles.subBtn}
            >-
            </button>
        </div>



    )
};



