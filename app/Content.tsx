'use client'

import { ReactNode, Suspense } from "react";
import { useEffect, useState } from "react";
import { useRouter } from 'next/navigation';
import { useChangingPage } from "@/components/hooks/ChangingPageContext";



export default function Content({ children } : { children: ReactNode}) {
    const { changingPage } = useChangingPage()
    const [isStarted, setIsStarted] = useState(false)

    useEffect(() => {
        setIsStarted(true);
    })

    return (
        <div className={`w-full flex flex-col items-center pt-[200px] gap-6 smoothe opacity-0 ${(isStarted)  && 'opacity-100'}`}>
            {children}
        </div>
    )
}