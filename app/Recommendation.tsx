import { RecommendColorType } from "@/types/Recommendations";
import Link from "next/link";

export default function Recommendation({ title, color }: { title: string, color: RecommendColorType}) {
    const backgroundColors = {
        "white": "bg-gray-50",
        "red": "bg-red-50",
        "yellow": "bg-yellow-50",
        "green": "bg-green-50",
    }

    return (
        <Link href="/what_is_chat-fu" >
            <div className={`w-full h-[60px] border-2 rounded-xl shadow-sm p-[10px] flex justify-center items-center hover:shadow smoothe ${backgroundColors[color]}`}>
                <h1 className="w-fit text tracking-wide text-gray-800">{title}</h1>
            </div>
        </Link>
    )
}