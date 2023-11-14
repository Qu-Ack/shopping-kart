import { useEffect, useState } from "react"
import styles from './Shop.module.css'
import { useOutletContext } from "react-router-dom";

function Shop() {

    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const {handleClick , cartItems} = useOutletContext();

    useEffect(() => {
        async function getData() {
            try {
                const tmp = await fetch("http://127.0.0.1:3000/products");
                if (!tmp.ok) {
                    throw new Error(`this is a HTTP error: the status is ${tmp.status}`)
                }
                const products = await tmp.json();
                setData(products);
                setError(null)
            } catch(err) {
                setError(err.message);
            } finally {
                setLoading(false)
            }

        }

        getData();
    } , []);



   
    if (loading) return <h1>Loading ...</h1>
    if (error) return <h1>We have encountered an error</h1>


    return(
        <div className={styles.cardwrapper}>
            {data.map(element => {
        return(
            <div className={styles.card} key={element.id}>
                <img src={element.img} alt={element.name} />
                <p className={styles.title}>{element.name}</p>
                <p className={styles.description}>{element.description}</p>
                <p className={styles.price}>{element.price}</p>
                <button className={styles.cart} onClick={() => 
                {handleClick(element)
                }}>Add To Cart</button>
                
            </div>
        )
    })}
        </div>
        )
}

export default Shop