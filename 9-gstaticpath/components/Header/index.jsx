import Link from "next/link"
import style from "./Header.module.css"

export default function Header() {
    return (
        <>
            <header>
                {/* <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/blog">Blog</a></li>
                    <li><a href="/user">Users</a></li>

                </ul> */}
                <div className={style.navbarBack}>
                    <div className={style.NavContent}>
                        <h4 className={style.NavLeft}><Link href={`/`} >Home</Link ></h4>
                        <Link href={`/blog`}>Blog</Link >
                        <Link href={`/user`}>Users</Link >
                    </div>

                </div>
            </header>
            {/* <h1>Welcome Faris</h1> */}
        </>
    )
}
