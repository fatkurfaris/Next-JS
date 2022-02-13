// import Navigation from '../components/Navbar/Navbar'
// import 'bootstrap/dist/css/bootstrap.min.css'
// import { Container, Row, Col } from 'react-bootstrap'
// import Footer from '../components/Footer/Footer'
// import Head from "next/head"

// import Footer from '../components/Footer'
// import Header from '../components/Header'
import Layout from '../components/Layout'
import Head from 'next/head'
import Image from "next/image"

export default function Home() {
  return (
    <div>
      {/* <Head>
        <title>NextJS Basic | Home Page</title>
        <meta name="description" content="Website NextJS Basic"></meta>
      </Head> */}
      <Layout pageTitle="Home Page">
        {/* <Image /> */}
        <h1>Welcome Faris</h1>
      </Layout>

      {/* <Head>
        <title>NextJS Basix | HomePaage</title>
        <meta name="description" content="website NextJS Basic"></meta>
      </Head>
      
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
      </Container> */}
    </div>
  )
}
