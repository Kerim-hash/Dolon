import { useRouter } from "next/router"

export default function Custom404() {
    const router = useRouter()
    return <div className="flex flex-col items-center hero h-[100vh] justify-center">
        <h1 className="text-white text-[42px] font-bold">Oops! the page you are requesting does not exist</h1>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => router.push("/en")} >go to the main page</button>
    </div>
}