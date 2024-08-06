import Link from "next/link";
import s from "./link.module.scss"

export default function A({ text, href }: any) {
    return (
        <Link href={href} >
            <div className={s.link} style={{}}>
                {text}
            </div>
        </Link>
    )
}
