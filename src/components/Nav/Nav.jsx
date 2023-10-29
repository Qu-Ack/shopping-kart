import styles from './Nav.module.css'
import { Link } from 'react-router-dom'

export default function Nav() {
    return(
        <nav>
            <div className= {styles.logowrapper}>
                <p ><Link className={styles.logo} to={"/"}>Shoppo</Link></p>
            </div>

            <div className={styles.elementswrapper}>
                <ul className={styles.elements}>
                    <li ><Link className={styles.about} to={"/about"}>About</Link></li>
                    <li ><Link className={styles.shop} to={"/shop"}>Shop</Link></li> 
                </ul>
            </div>
        </nav>
    )
}