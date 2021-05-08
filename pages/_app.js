import '../styles/globals.css'
import Layout from '../components/Layout'
import 'bootstrap/dist/css/bootstrap.css'
import {useEffect} from "react";
import { useRouter } from 'next/router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

function MyApp({Component, pageProps}) {
    const router = useRouter();

    useEffect(() => {
        const handleRouteChange = (url, {shallow}) => {
            NProgress.start();
        }
        const routeChangeCompleteOrError = (url, {shallow}) => {
            NProgress.done();
        }

        router.events.on('routeChangeStart', handleRouteChange)
        router.events.on('routeChangeComplete', routeChangeCompleteOrError)
        router.events.on('routeChangeError', routeChangeCompleteOrError)

        return () => {
            router.events.off('routeChangeStart', handleRouteChange)
            router.events.off('routeChangeComplete', routeChangeCompleteOrError)
            router.events.off('routeChangeError', routeChangeCompleteOrError)
        }
    }, [])
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    )
}

export default MyApp
