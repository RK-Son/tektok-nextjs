import styles from '../styles/Layout.module.css';
import NavBar from "./NavBar";


function Layout(props) {
    return (
        <div className={styles.container}>
            <NavBar/>
            {
                props.children
            }
        </div>
    )
}

export default Layout
