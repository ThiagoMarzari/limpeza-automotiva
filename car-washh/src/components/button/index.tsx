

export function Button({children}: {children: React.ReactNode}) {
    return (
        <button
        className="bg-slate-700 text-white p-2 rounded-md mt-4 px-8
        hover:scale-110 transition-all duration-105
        "
        >
            {children}
        </button>
    );
}