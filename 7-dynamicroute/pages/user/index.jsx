import Layout from "../../components/Layout";

export default function User(props) {
    const { dataUsers } = props;
    console.log(dataUsers);
    return (
        <Layout pageTitle="User Page">
            User Page
        </Layout>

    )
}

export async function getStaticProps() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const dataUsers = await res.json();
    return {
        props: {
            dataUsers,
        },
    };
}