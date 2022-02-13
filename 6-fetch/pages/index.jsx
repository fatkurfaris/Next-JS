import { useEffect, useState } from "react"
import Cat, { getStaticProps } from "../components/Cat2"


export default function Home(props) {
  // const {catfacts:{fact,length}}=props
  const [getData, setData] = useState({})
  //client side rendering (like react)
  useEffect(() => {
    console.log("ini react");
    fetch('https://catfact.ninja/fact')
      .then((res) => res.json())
      .then((data) => {
        setData(data)
      })
  }, [])
  return (
    <>
      <h1> cat </h1>
      <p> {getData.fact} </p>
      <h3>{getData.length}</h3>
    </>
  )
}

