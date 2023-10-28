import dosis from "@/fonts/dosis";
import Link from "next/link";
import Chat from "./Chat";
import Github from "@/components/logos/Github";
import Image from "next/image";
import Recommendations from "./Recommendations";
import { useEffect, useState } from "react";
import Content from "./Content";

export default function Landing() {
    

    return (
        <div className="w-full h-full flex flex-col items-center min-h-screen">
            <Content>
                <h1 className={`text-4xl md:text-8xl ${dosis.bold} tracking-wide text-blue-700`}>Build the Future</h1>
                <h1 className={`text-2xl md:text-3xl ${dosis.medium} tracking-wide text-gray-700`}>Create an AI enabled website</h1>
                <Link target="_blank" href="https://github.com">
                    <button className="px-[15px] py-[10px] rounded-xl shadow text-gray-50 bg-gray-800 smoothe hover:shadow-md flex items-center gap-2" >
                        View Github
                        <Image alt="Github Link" width={25} height={25} src="/github-white.png"  />
                    </button>
                </Link>
                <h1 className="text-blue-500 text-lg tracking-wide">it's open-source!</h1>
            </Content>
            <Chat >
                <Recommendations />
            </Chat>
        </div>
    )
}