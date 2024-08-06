import Head from "next/head"
import DrawerComponent from "./drawer"
import s from "./main-container.module.scss"
const MainContainer = ({ children }:any) => {
    return (
        <div className='layout'>
            <Head>
                <meta></meta>
                <title>NEXTJS</title>
            </Head>
            <div className={s.navbar}>
                <DrawerComponent />
                {/* <Link href="/">
                    <div className="link">Main</div>
                </Link>
                <Link href="/users">
                    <div className="link">Users</div>
                </Link> */}
                {/* <A href="/" text='Main' />
                <A href="/users" text='Users' /> */}
            </div>
            <div className={s.container}>
                {children}
            </div>
        </div>
    )
}
export default MainContainer