import styles from '../styles/Layout.module.css';


function Layout(props) {
    return (
        <div className={styles.container}>
            <h1 className='text-center'>Nextjs Tesktok</h1>
            {
                props.children
            }
        </div>
    )
}

export default Layout
