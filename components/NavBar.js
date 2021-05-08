import styles from '../styles/Layout.module.css';
import Link from 'next/link'
import {Button, Nav, Navbar, Form, FormControl} from "react-bootstrap";

function NavBar(props) {
    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Nav className="mr-auto">
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
