import Layout from "../../components/Layout";
import { useRouter } from "next/router"
import style from "./user.module.css"
export default function User(props) {
    const { dataUsers } = props;
    const router = useRouter()
    console.log(dataUsers);
    return (
        <Layout pageTitle="User Page">
            {
                dataUsers.map((item, index) => (
                    <div className={style.card} key={index} onClick={() => router.push(`/user/${item.id}`)}>
                        <p>{item.name}</p>
                        <p>{item.email}</p>
                    </div>
                ))
            }
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