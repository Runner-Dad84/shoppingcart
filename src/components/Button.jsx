import { useState, useContext } from "react";
import styles from "../css-modules/productcard.module.css";





export default function SetAmount () {
    const [count, setCount] = useState(0);
    const [input, setInput] = useState(0);

    /*decrement handler min of 0 */
    function decrement () {
        if (count > 0) {
            setCount(count - 1)
        } else {
            setCount(0);
        }
        
    };

    function increment () {
        setCount(count + 1);
       
    };
    /*
    const handleInput = (event) => {
        const inputVal = setInput(event.target.value);
        console.log('test')
    };
    */
    return (
        <div>
            <button
            onClick={()=>increment()}
            className={styles.addBtn}
            >+
            </button>
            <span>{count}</span>
            <button
            onClick={()=>decrement()}
            className={styles.subBtn}
            >-
            </button>
              <label>
                <input
                  className={styles.input}
                  type="number"
                  min='0'
                  placeholder={count}
                  onChange={(e)=>{setInput(e.target.value); setCount(e.target.value)}}
                />
              </label>
        </div>

    )
};



