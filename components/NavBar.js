import Link from 'next/link'
import Image from 'next/image'
import {Button, Nav, Navbar, Form, FormControl} from "react-bootstrap";

import styles from "../styles/NavBar.module.css"

function NavBar(props) {
    //TODO Chinh navbar color cho dep ti
    return (
        <Navbar className={styles.navbar}>
            <Image src="/Nextjs-logo.svg" width={79} height={49}/>
            <Nav className="ml-2 mr-auto">
                <Link href="/">
                    <Nav.Link href="#home">Home</Nav.Link>
                </Link>
                <Link href="/product">
                    <Nav.Link href="#features">Product</Nav.Link>
                </Link>
                <Nav.Link href="#pricing">About</Nav.Link>
            </Nav>
            <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2"/>
                <Button variant="outline-info">Search</Button>
            </Form>
        </Navbar>
    )
}

export default NavBar
