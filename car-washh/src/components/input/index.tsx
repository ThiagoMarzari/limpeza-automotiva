import { InputHTMLAttributes } from "react";


export function Input({...props}: InputHTMLAttributes<HTMLInputElement>){
    return(
        <input 
        {...props}
        className="w-full bg-gray-800 text-white p-2 rounded-md mt-4"
        />
    )
}