import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      INI HOME
      <div>

        INI make a href
        <h1> <a href="/">Home</a> </h1>
        <h1> <a href="/blogger/blogger">blogger</a> </h1>
        <h1> <a href="/blogger2/blogger2">blogger2</a> </h1>
      </div>
      <div>
        ini make LINK
        <h1><Link href="/blogger/blogger">blogger</Link></h1>
        <h1><Link href="/blogger2/blogger2">blogger2</Link></h1>
      </div>
    </>

  )
}
