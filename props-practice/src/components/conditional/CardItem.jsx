export default function CardItem({price ,Quantity}){
    let total;
    return(
        <div>
            <h1>{price}</h1>
            <h2>{Quantity}</h2>
            <h2>Total {total= price * Quantity}</h2>
        </div>
    )
}