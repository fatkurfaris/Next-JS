// // Server side rendering. cant have both static and server
export default function Cat(props) {
    const { catfacts: { fact, length } } = props

    return (
        <>
            <h1>{fact}</h1>
            <h1>{length}</h1>
        </>
    )
}

export async function getServerSideProps(context) {
    const catfacts = await fetch('https://catfact.ninja/fact')
    const catfactsjson = await catfacts.json()
    console.log("test", catfactsjson);
    return {
        props: { catfacts: catfactsjson }
    }
}


// export default function Cat(props) {
//     const { catfacts: { fact, length } } = props

//     return (
//         <>
//             <h1>{fact}</h1>
//             <h1>{length}</h1>
//         </>
//     )
// }

// export async function getStaticProps(context) {
//     const catfacts = await fetch("https://catfact.ninja/fact")
//     const catfactsjson = await catfacts.json()
//     console.log(catfactsjson)
//     return {
//         props: { catfacts: catfactsjson }, // will be passed to the page component as props
//     }
// }

