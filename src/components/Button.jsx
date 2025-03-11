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
            setCount(count - 1)
            console.log(count)

        } else {
            setCountOne(0);
        }
        
    };

    function increment () {
        setCountOne(countOne + 1);
        setCount(count + 1)
        console.log(count)
    };
    /*
    const handleInput = (event) => {
        const inputVal = setInput(event.target.value);
        console.log('test')
    };
    */
   function addtoCart () {
    console.log('add to cart')
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
                  placeholder={countOne}
                  onChange={(e)=>{setInput(e.target.value); setCountOne(e.target.value)}}
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