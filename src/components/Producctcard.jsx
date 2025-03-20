import  SetAmount from "./Button";
import { useState, useEffect } from "react";
import styles from "../css-modules/productcard.module.css";
import fetchData from "./FetchData.jsx";


function Productcard ({ title, alt, price, id }) {
    const [imageUrl, setImageUrl] = useState(null);
    const [error, setError] = useState('');

    useEffect(()=> {
        async function getImage () {
            try {
                const url = await fetchData(id);
                setImageUrl(url);
            } catch(err) {
                setError(err.message)
            }
        }

        getImage();
    }, [id]);

   //Product card with title, image and cost. Set Amount are buttons.
    return (
        <div className={styles.item}>
         <h1 className={styles.title}>{title}</h1>
         <img src={imageUrl} alt={alt} className={styles.image}/>
         <h2>{`Price: ${price}`}</h2>
            <SetAmount></SetAmount>
        </div>
    );
}

export default Productcard