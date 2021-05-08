import Carousel from 'react-bootstrap/Carousel'
import styles from '../styles/Home.module.css';
import {useEffect} from "react";
import {useRouter} from 'next/router';

function Home(props) {

    const router = useRouter();

    useEffect(() => {
        router.prefetch('/product');
    }, [])

    return (
        <div className={styles.container}>
            <Carousel className={styles.carousel} interval={null}>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        width={800}
                        height={600}
                        src="download.svg"
                    />
                    <Carousel.Caption className={styles.carouselCaption}>
                        <h1 className={styles.title}>Why Nextjs</h1>
                        <ul>
                            <li className={styles.item}>Giúp SEO tốt hơn, hiện tai chỉ có google có thể index được CSR,
                                còn lại thì không
                            </li>
                            <li className={styles.item}>Có thể render page bằng SSR hoặc SSG</li>
                            <li className={styles.item}>Chức năng Incremental Static Regeneration</li>
                            <li className={styles.item}>Hỗ trợ tự động optimize image, image mặc định là lazyload</li>
                            <li className={styles.item}>Api routes giúp mình có thể code luôn cả backend</li>
                        </ul>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        width={800}
                        height={600}
                        src="download.svg"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        width={800}
                        height={600}
                        src="download.svg"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default Home
