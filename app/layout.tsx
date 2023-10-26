import { ReactNode } from "react";
import dosis from "@/fonts/dosis";
import './globals.css'
import Header from "./Header";
import Chat from "./Chat";

export default function Layout({ children }: { children: ReactNode}) {
    return (
        <html lang="en">
            <body className={`bg-blue-50 ${dosis.medium} flex flex-col items-center w-full min-h-screen`}>
                <Header />
                {children}
                <Chat />
            </body>
        </html>
    )
}