export function Services() {
    return (
        <div className="mx-auto pt-12">
            <div className="text-center">
                <h2 className="pt-6 sm:pt-10 text-md font-extrabold md:text-2xl lg:text-4xl text-neutral-800 capitalize">
                    Recomended Services
                </h2>
                <div className="mt-10 text-sm sm:text-lg m-auto flex items-center justify-center">
                    <p>
                        Discover our top services, curated to elevate your style and enhance your natural beauty effortlessly.
                    </p>
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-12">
                <div className="bg-white cursor-pointer rounded-lg p-4 flex flex-col justify-evenly shadow transform transition-transform duration-300 ease-in hover:scale-105">
                    <div className="relative w-full h-48 rounded mb-2">
                        <img alt="Book Salon online" fetchpriority="high" decoding="async" data-nimg="fill" className="object-cover"
                            style={{ position: 'absolute', height: '100%', width: '100%', left: 0, top: 0, right: 0, bottom: 0, color: 'transparent' }} sizes="100%"
                            src="/recommended/r1.jpg"
                        />
                    </div>
                    <h2 className="text-lg font-semibold mb-1">Haircut and Styling</h2>
                    <p className="text-gray-600 mb-2">Revamp your appearance with precision cuts and bespoke styling for your unique personality.</p>
                </div>

                <div className="bg-white cursor-pointer rounded-lg p-4 flex flex-col justify-evenly shadow transform transition-transform duration-300 ease-in hover:scale-105">
                    <div className="relative w-full h-48 rounded mb-2">
                        <img alt="Book Salon online" fetchpriority="high" decoding="async" data-nimg="fill" className="object-cover"
                            style={{ position: 'absolute', height: '100%', width: '100%', left: 0, top: 0, right: 0, bottom: 0, color: 'transparent' }} sizes="100%"
                            src="/recommended/r2.jpg"
                        />
                    </div>
                    <h2 className="text-lg font-semibold mb-1">Hair Coloring</h2>
                    <p className="text-gray-600 mb-2">Embrace a vibrant new look with our professional coloring services and expert color consultations.</p>
                </div>

                <div className="bg-white cursor-pointer rounded-lg p-4 flex flex-col justify-evenly shadow transform transition-transform duration-300 ease-in hover:scale-105">
                    <div className="relative w-full h-48 rounded mb-2">
                        <img alt="Book Salon online" fetchpriority="high" decoding="async" data-nimg="fill" className="object-cover"
                            style={{ position: 'absolute', height: '100%', width: '100%', left: 0, top: 0, right: 0, bottom: 0, color: 'transparent' }} sizes="100%"
                            src="/recommended/r3.jpg"
                        />
                    </div>
                    <h2 className="text-lg font-semibold mb-1">Facial Treatments</h2>
                    <p className="text-gray-600 mb-2">Rejuvenate your skin with luxurious facials tailored to your needs.</p>
                </div>
            </div>
        </div>
    )
}