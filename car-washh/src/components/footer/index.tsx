export function Footer(){
    return(
        <footer className="bg-gray-800 text-white flex flex-col justify-center items-center w-full mt-16 pb-4 pl-16">
            <span className="text-2xl mb-2">Desenvolvido por Thiago Marzari</span>
            <div className="flex space-x-4">
            <a href="https://github.com/ThiagoMarzari" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">GitHub</a>
            <a href="https://www.linkedin.com/in/thiago-marzari-087ba5326/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">LinkedIn</a>
            <a href="mailto:thiagomarzari01@gmail.com" className="hover:text-gray-400">Email</a>
            </div>
            <span className="text-sm mt-4">&copy; {new Date().getFullYear()} Todos os direitos reservados.</span>
        </footer>
    )
}