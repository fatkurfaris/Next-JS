import Navigation from '../components/Navbar/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col } from 'react-bootstrap'
import Footer from '../components/Footer/Footer'
import Head from "next/head"


export default function Home() {
  return (
    <div>
      <Head>
        <title>NextJS Basix | HomePaage</title>
        <meta name="description" content="website NextJS Basic"></meta>
      </Head>
      {/* <Navbar /> */}
      <Navigation />
      <Container>
        <Row>
          <Col sm={2}>
          </Col>
          <Col sm={8}>
            <Footer />
          </Col>
          <Col sm={2}>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
