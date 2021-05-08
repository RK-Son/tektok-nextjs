import Image from 'next/image'
import Link from 'next/link'

import Card from 'react-bootstrap/Card'

import styles from '../../styles/Products.module.css'

function Index(props) {

    return (
        <div className={styles.productContainer}>
            {
                props.products.map((product) => (
                    <Card className={styles.productCard}>
                        <Image src={product.image} width={200} height={200}/>
                        <Card.Body>
                            <Card.Title className={styles.productTitle}>{product.title}</Card.Title>
                            <Card.Text className={styles.productDescription}>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                        </Card.Body>
                        <div className={styles.cardFooter}>
                            <Link href={`product/${product.id}`}>
                                <a>Go to detail</a>
                            </Link>
                        </div>
                    </Card>
                    // </Col>
                ))
            }
        </div>
    )
}

export const getServerSideProps = async (context) => {
    const res = await fetch('https://fakestoreapi.com/products?limit=15')
    const products = await res.json();

    return {
        props: {
            products
        }
    }
}

export default Index
