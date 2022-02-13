// export async function getStaticProps(context) {
//     const catfacts = await fetch("https://catfact.ninja/fact")
//     const catfactsjson = await catfacts.json()
//     console.log(catfactsjson)
//     return {
//         props: { catfacts: catfactsjson }, // will be passed to the page component as props
//     }
// }

export default function Cat({ context }) {

}

export async function getStaticProps(context) {
    const catfacts = await fetch("https://catfact.ninja/fact")
    const catfactsjson = await catfacts.json()
    console.log(catfactsjson)
    return {
        props: { catfacts: catfactsjson }, // will be passed to the page component as props
    }
}
