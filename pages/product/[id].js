import Image from 'next/image'
import styles from '../../styles/ProductDetail.module.css'
import {Button, Container} from "react-bootstrap";
import {useRouter} from "next/router";
import {useEffect} from "react";

function ProductDetail({product}) {
    const router = useRouter();

    useEffect(() => {
        document.getElementById(`btn-${product.id}`)
            .addEventListener('click', function () {
                router.back()
            })
        console.log(Math.random());
    }, [])

    if (router.isFallback) {
        //TODO Sua thanh overclay spinner
        return <div>Loading...</div>
    }

    return (
        <Container className={styles.container}>
            <div className={styles.productWrapper}>
                <div className={styles.leftColumn}>
                    <Image
                        width={1000}
                        height={967}
                        src={product.image}
                    />
                </div>
                <div className={styles.rightColumn}>
                    <div className={styles.productTitle}>{product.title}</div>
                    <div className={styles.productPrice}>
                        <span className={styles.price}>${product.price}</span>
                        <span className={styles.discount}>{product.price * 1.5}</span>
                    </div>
                    <p className={styles.description}>{product.description}</p>
                    <button id={`btn-${product.id}`} className={styles.roundBlackBtn}>Add to cart
                    </button>
                </div>
            </div>

        </Container>
    )
}

export async function getStaticPaths() {
    const res = await fetch('https://fakestoreapi.com/products?limit=15')
    const products = await res.json()

    const paths = products.map((product) => ({
        params: {id: product?.id?.toString()},
    }))

    return {paths, fallback: true}
}

export async function getStaticProps({params}) {
    const res = await fetch(`https://fakestoreapi.com/products/${params.id}`)
    const product = await res.json()

    return {props: {product}}
}

export default ProductDetail
