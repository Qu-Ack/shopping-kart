import { useEffect, useState } from "react"

function Shop() {

    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

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

    const items = data.map(element => {
        return(
            <div className="card" key={element.id}>
                {element.name}
            </div>
        )
    })
    // console.log(items)

    if (loading) return <h1>Loading ...</h1>
    if (error) return <h1>We have encountered an error</h1>

    return(
        <div>
            {items}
        </div>
        )
}

export default Shop