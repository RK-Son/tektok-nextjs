import Image from 'next/image'
import Link from 'next/link'

import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'


import styles from '../styles/Home.module.css'

function Home(props) {

    return (
        <div className={styles.productContainer}>
            {
                props.products.map((product) => (
                    // <Col key={product.id}>
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
    const res = await fetch('https://fakestoreapi.com/products')
    const products = await res.json();

    return {
        props: {
            products
        }
    }
}

export default Home
