import { ReactNode } from "react";
import dosis from "@/fonts/dosis";
import './globals.css'
import Header from "./Header";
import Chat from "./Chat";
import Providers from "./Providers";

export default function Layout({ children }: { children: ReactNode}) {
    return (
        <html lang="en">
            <Providers>
                <body className={`bg-blue-50 ${dosis.medium} w-full min-h-screen`}>
                    <Header />
                    {children}
                </body>
            </Providers>
        </html>
    )
}