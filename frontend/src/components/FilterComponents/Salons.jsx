import { Link } from "react-router-dom";
import { SalonsCard } from "./SalonsCard";

export function Salons({ title, salons }) {
    return (
        <div className="w-full max-w-7xl mx-auto xl:px-20 md:px-10 px-4">
            <h1 className="text-xl font-semibold capitalize">{title}</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-12">
                {salons.map((salon) => (
                    <Link key={salon._id} to={`/salons/${salon._id}`}>
                        <SalonsCard
                            name={salon.name}
                            rating={salon.rating}
                            address={salon.address}
                            imageSrc={'/salons/s1.jpg'} // Assuming imageSrc is part of the salon data
                        />
                    </Link>
                ))}
            </div>
        </div>
    );
}
