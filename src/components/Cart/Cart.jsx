import { useEffect } from "react";
import styles from "./Cart.module.css"
import { useOutletContext } from "react-router-dom";

function Cart()
{
    const {cartItems} = useOutletContext();
    console.log(cartItems)
    return(
        <div className={styles.cartwrapper}>
            {cartItems.map((item) => {
                return (
                <div className={styles.itemwrapper} key={item.id}>
                 <img src={item.img} alt={item.name}></img> 
                 <div className={styles.info}>
                    <h1>{item.name}</h1>
                    <p>{item.description}</p> 
                 </div>
                </div>
                )
            })}
        </div>
    )

}

export default Cart;