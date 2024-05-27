export function ProductCard({ imageSrc, name, description, price, rating }) {
    return (
        <div>
            <div className="bg-white rounded-lg shadow p-4 transition-transform duration-300 ease-in-out hover:scale-105 transform ">
                <div className="w-full relative h-48 object-cover mb-2 rounded ">
                    <img alt={name} src={imageSrc} className="object-contain h-full w-full" />
                </div>
                <h1 className="text-lg font-semibold mb-1">{name}</h1>
                <p className="text-neutral-600 mb-2">{description}</p>
                <p className="text-neutral-700 font-semibold">${price}</p>
                <p className="text-neutral-700">Rating: {rating}</p>
            </div>
        </div>
    );
}
