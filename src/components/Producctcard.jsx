export default function Productcard ({ title, url, alt, price }) {
    return (
        <>
         <h1 className="productTitle">{title}</h1>
         <img src={url} alt={alt} />
         <h2>{`Price: ${price}`}</h2>
        </>
    );
}