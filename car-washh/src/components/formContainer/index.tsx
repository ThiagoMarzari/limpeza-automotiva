import { FormEventHandler, ReactNode } from "react";

export function FormContainer({ children, handleSubmit }: { children: ReactNode, handleSubmit: FormEventHandler }) {
    return (
        <div className="w-full flex-col flex items-center justify-center">
            <form className="max-w-xl text-center" onSubmit={handleSubmit}>
                {children}
            </form>
        </div>
    )
}