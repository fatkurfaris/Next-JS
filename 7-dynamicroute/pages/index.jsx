import Layout from '../components/Layout'
import Head from 'next/head'
import Image from "next/image"

export default function Home() {
  return (
    <div>
      <Layout pageTitle="Home Page">
        {/* <Image /> */}
        <h1>Welcome Faris</h1>
      </Layout>
    </div>
  )
}

