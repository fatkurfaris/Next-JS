import { useRouter } from "next/router"
import Layout from "../../components/Layout";
import style from "./user.module.css"

export default function UserDetail(props) {
    const router = useRouter();
    const { id } = router.query
    const user = props
    console.log("ini props", props);
    return (
        <Layout pageTitle="Detail User">
            <div>
                {
                    user?.dataUsers.filter(item => item.id == id).map((item, index) => {
                        return (
                            <>
                                {item.name}
                            </>
                        )
                    })
                }

            </div>
        </Layout>
    )
}

export async function getStaticPaths() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const dataUsers = await res.json();
    const paths = dataUsers.map((user, index) => ({
        params: {
            id: `${user.id}`,
        },
    }))

    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps() {
    // const { id } = context.params.id
    // const { id } = router.query
    const res = await fetch('https://jsonplaceholder.typicode.com/users/')
    const dataUsers = await res.json();
    console.log(dataUsers);
    return {
        props: {
            dataUsers,
        },
    };
}
