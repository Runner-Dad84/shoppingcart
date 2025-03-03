import  SetAmount from "./Button";
import { useState, useEffect } from "react";
import styles from "../css-modules/productcard.module.css";


export default function Productcard ({ title, alt, price, id }) {
    const [url, setUrl] = useState(null);
    const [error, setError] = useState(null);
    
    function add () {
        console.log('added to cart')
    }


    useEffect(() => {
    const fetchImage = async ()=> {
        try {
            const apiKey = '47983806-5d69dad02fddea8f4141376c1';
            const proxyURL = 'https://corsproxy.io/?';
            const targetAPI = `http://pixabay.com/api/?key=${apiKey}&id=${id}`;
            const response = await fetch (proxyURL + targetAPI);

            const data = await response.json();
            console.log(data);
            

            if ( data.hits && data.hits.length > 0 ){
                setUrl(data.hits[0].largeImageURL);
                console.log(data.hits[0].largeImageURL);
            } else {
                throw new Error ('image not found');
            }
            } catch (err) {
                setError(err.message);
            }}
            fetchImage();
        }, []
    )
            

    return (
        <div className={styles.item}>
         <h1 className={styles.title}>{title}</h1>
         <img src={url} alt={alt} className={styles.image}/>
         <h2>{`Price: ${price}`}</h2>
         <SetAmount></SetAmount>
         <label>
            <input className={styles.input}></input>
         </label>
         <button
         onClick={add} className={styles.btn}
         >Add to Cart
        </button>
        </div>
    );
}