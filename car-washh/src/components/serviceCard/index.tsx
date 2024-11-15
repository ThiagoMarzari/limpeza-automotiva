interface ServiceCardProps {
    imgPath: string;
    title: string;
    description: string;
}

export function ServiceCard({imgPath, title, description}: ServiceCardProps) {
    return (
        <div className="flex flex-col items-center">
            <div>
                <img src={imgPath} alt="Serviço 1" />
            </div>

            <h3 className="text-2xl text-white">{title}</h3>
            <p className="text-white">{description}</p>
        </div>
    )
}