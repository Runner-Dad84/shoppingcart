import  SetAmount from "./Button";



export default function Productcard ({ title, url, alt, price }) {
    function add () {
        console.log('added to cart')
    }
    return (
        <>
         <h1 className="productTitle">{title}</h1>
         <img src={url} alt={alt} />
         <h2>{`Price: ${price}`}</h2>
         <SetAmount></SetAmount>
         <button
         onClick={add}
         >Add to Cart
        </button>
        </>
    );
}