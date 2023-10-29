import { useRouteError } from "react-router-dom";
import styles from './Errorpage.module.css'


export default function Errorpage() {
    const error = useRouteError();
    console.log(error)
    return (
        <div>
            <h1 className={styles.heading}>Oops !</h1>
            <h3>{error.error.message}</h3>
        </div>
    )
}