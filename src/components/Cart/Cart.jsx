import { useEffect, useState } from "react";
import styles from "./Cart.module.css"
import { useOutletContext } from "react-router-dom";

function Cart()
{

    const {cartItems, addItems, addItemsUsingInput} = useOutletContext();
    const [val , setVal] = useState(0);
    console.log(cartItems)
    return(
        <div className={styles.cartwrapper}>
            {cartItems.map((item) => {
                return (
                <div className={styles.itemwrapper} key={item.id}>
                 <img src={item.img} alt={item.name}></img> 
                 <div className={styles.info}>
                    <h1>{item.name}</h1>
                    <h1>{item.quantity}</h1>
                    <p>{item.description}</p> 
                    <div className={styles.quantity}>
                    <button className={styles.plus} onClick={() => {
                        addItems(-1, item.id);
                    }}>-</button>
                    <input type="number"  className={styles.input} onChange={(e) => {
                        addItemsUsingInput(parseInt(e.target.value), item.id);
                    }}></input>
                    <button className={styles.minus} onClick={() => {
                        addItems(1 , item.id);
                    }}>+</button>
                    </div>
                    <p>{item.price}</p>
                 </div>
                </div>
                )
            })}
        </div>
    )

}

export default Cart;