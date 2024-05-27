import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Salons } from "../components/FilterComponents/Salons";
import { FeatureSlider } from "../components/FilterComponents/FeatureSlider";
import Footer from "../components/HomeNavComponents/Footer";
import { useLocation } from "react-router-dom";
import { UnderConstruction } from './UnderConstruction';

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

export function FilterPage() {
    const query = useQuery();
    const location = query.get('location');
    const category = query.get('category');
    const [topRatedSalons, setTopRatedSalons] = useState([]);
    const [allSalons, setAllSalons] = useState([]);
    const [dataLoaded, setDataLoaded] = useState(false);
    const [salonsAvailable, setSalonsAvailable] = useState(true);

    useEffect(() => {
        if (category === 'book-salon') {
            const fetchSalons = async () => {
                try {
                    const [topRatedResponse, allSalonsResponse] = await Promise.all([
                        axios.get(`/salons/search`, { params: { location } }),
                        axios.get(`/salons/all-salons`, { params: { location } })
                    ]);

                    const topRated = topRatedResponse.data.salons;
                    const allSalons = allSalonsResponse.data.salons;

                    setTopRatedSalons(topRated);
                    setAllSalons(allSalons);
                    setDataLoaded(true);

                    if (topRated.length === 0 && allSalons.length === 0) {
                        setSalonsAvailable(false);
                    } else {
                        setSalonsAvailable(true);
                    }
                } catch (error) {
                    console.error('Error fetching salons:', error);
                    setDataLoaded(true);
                    setSalonsAvailable(false);
                }
            };

            fetchSalons();
        }
    }, [category, location]);

    return (
        <div>
            {category === 'book-salon' ? (
                <div className="p-10 m-10 flex flex-col min-h-screen z-0">
                    <h1 className="text-3xl font-semibold">Salons in "{location}"</h1>

                    <div>
                        <FeatureSlider />
                        <hr color="white" className="border-1 mb-6" />
                    </div>

                    {dataLoaded && !salonsAvailable ? (
                        <div className="flex justify-center items-center">
                            <div className="my-10 py-5">
                                <div class=" w-full max-w-7xl mx-auto xl:px-20  md:px-10 px-4 text-center">
                                    <h1 class="text-sm sm:text-xl font-semibold">Developer is working to add salons at "{location}"</h1>
                                    <p class="text-md">Have patience </p>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <>
                            <Salons title="Top Rated Salons" salons={topRatedSalons} />
                            <Salons title="All Salons" salons={allSalons} />
                        </>
                    )}
                </div>
            ) : (
                <div className="p-10 m-10 flex flex-col min-h-screen z-0">
                    <UnderConstruction />
                </div>
            )}
            <Footer />
        </div>
    );
}
