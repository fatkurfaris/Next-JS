import { NavDropdown, Navbar, Nav, Container } from 'react-bootstrap'
import Link from 'next/link'
import style from './Navigation.module.css'


export default function Navigation() {
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            {/* <Link href="/user">User</Link> */}
                            <h6 className={style.NavText}>
                                <Link
                                    className={style.NavLink}
                                    href={"/blog"}>
                                    Blog
                                </Link>
                            </h6>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>


            <Link href="/blog" className={style.text1}>
                <h6>
                    blogger
                </h6>
            </Link>
            <h1><Link href={`blog`}>blogger2</Link></h1>







        </div>
    )
}

