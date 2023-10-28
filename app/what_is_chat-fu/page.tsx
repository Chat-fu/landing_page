import dosis from "@/fonts/dosis";
import Link from "next/link";
import Chat from "../Chat";
import Github from "@/components/logos/Github";
import Image from "next/image";
import Recommendations from "../Recommendations";
import Content from "../Content";

export default function Home() {
    return (
        <div className="w-full h-full flex flex-col items-center">
            <Content>
                <div className="w-[600px] border-2 bg-white h-[400px] rounded-lg">
                    What is chat-fu
                </div>
            </Content>
            <Chat >
            </Chat>
        </div>
    )
}