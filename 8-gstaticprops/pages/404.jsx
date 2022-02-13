import { useEffect } from 'react';
import { useRouter } from "next/router"

export default function Custom404() {
    const router = useRouter();
    useEffect(() => {
        setTimeout(() => {
            console.log("dipanggil setelah 2 detik");
            router.push(`/`)
        }, 2000)
    }, [])

    return (
        <div>
            <h1>Ooopss...</h1>
            <h1>Halaman yang anda cari tidak ada</h1>
        </div>
    )
}
