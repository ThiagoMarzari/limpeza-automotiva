import { ReactNode } from "react";
import { Footer } from "../footer";
import { Header } from "../header";


export function Container({children}: {children: ReactNode}) {
    return(
        <div className="w-full max-w-7xl min-h-screen mx-auto px-2">
            <Header/>
            
            {children}

            <Footer/>
        </div>
    )
}