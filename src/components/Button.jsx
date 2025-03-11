import { useState, useContext } from "react";
import styles from "../css-modules/productcard.module.css";
import { CountContext } from "./Counter.jsx";




export default function SetAmount () {
    const [countOne, setCountOne] = useState(0);
    const [input, setInput] = useState(0);
    const context= useContext(CountContext);
    const { count, setCount } = context;

    /*decrement handler min of 0 */
    function decrement () {
        if (countOne > 0) {
            setCountOne(countOne - 1)
        } else {
            setCountOne(0);
        }
        
    };

    function increment () {
        setCountOne(countOne + 1);
    };
   
   function addtoCart () {
    setCount(count + countOne);
    setCountOne(0);
   }

    return (
        <div>
            <button
            onClick={()=>increment()}
            className={styles.addBtn}
            >+
            </button>
            <span>{countOne}</span>
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
                  placeholder='0'
                  value={countOne}
                  onChange={(e)=>{
                    const val = e.target.value;
                    setInput(Number(val)); setCountOne(Number(val))}}
                />
              </label>
              <button
                className={styles.btn}
                onClick={addtoCart}
                >Add to Cart
              </button>
        </div>

    )
};


//export default SetAmount;