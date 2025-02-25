import { useState } from "react";



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
            >+
            </button>
            <span>{count}</span>
            <button
            onClick={()=>decrement()}
            >-
            </button>
        </div>



    )
};



