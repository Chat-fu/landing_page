import Robot from "@/components/icons/Robot";
import dosis from "@/fonts/dosis";
import Link from "next/link";

export default function Header() {
    return (
        <div className={`fixed top-0 w-full h-[65px] flex justify-between px-[10px] md:px-[100px] items-center z-50`}>
            <Link href="/">
                <button className="flex gap-2 items-center">
                    <div className="h-[33px]">
                        <Robot color="blue" />
                    </div>
                    <h2 className={`text-blue-600 text-lg md:text-[28px] font-semibold tracking-wider ${dosis.bold}`}>chat-fu</h2>
                </button>
            </Link>
        </div>
    )
}