import React from 'react';
import { useNavigate } from "react-router-dom";

export function SalonPhotosDetail({ salon }) {
    const navigate = useNavigate();
    
    return (
        <div className="w-full max-w-7xl mx-auto xl:px-20 md:px-10 px-4">
            <div className="my-4 max-w-[8rem]">
                <button className="hover:bg-neutral-50 ring-1 shadow-sm hover:shadow-md bg-white ring-neutral-300 rounded flex items-center p-2"
                    onClick={() => {
                        navigate(`/salons?location=${salon.city}&category=book-salon`);
                    }}
                >
                    <span className="opacity-50">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-chevron-left"
                        >
                            <path d="m15 18-6-6 6-6"></path>
                        </svg>
                    </span>{" "}
                    Go Back
                </button>
            </div>
            <div className="h-[12rem] md:h-[20rem] rounded-md flex gap-2">
                <div className="w-2/3">
                    <div className="relative w-full h-full rounded ">
                        <img
                            alt={salon.name}
                            fetchpriority="high"
                            decoding="async"
                            data-nimg="fill"
                            className="object-cover"
                            sizes="100%"
                            src={salon.photos[0]}
                            style={{
                                position: "absolute",
                                height: "100%",
                                width: "100%",
                                inset: "0px",
                                color: "transparent"
                            }}
                        />
                    </div>
                </div>
                <div className="w-1/3 flex flex-col gap-2">
                    {salon.photos.slice(1).map((src, index) => (
                        <div key={index} className="h-1/2">
                            <div className="relative w-full h-full rounded ">
                                <img
                                    alt={salon.name}
                                    fetchpriority="high"
                                    decoding="async"
                                    data-nimg="fill"
                                    className="object-cover"
                                    sizes="100%"
                                    src={src}
                                    style={{
                                        position: "absolute",
                                        height: "100%",
                                        width: "100%",
                                        inset: "0px",
                                        color: "transparent"
                                    }}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex flex-col gap-2 py-8">
                <div className="flex items-center justify-between">
                    <h1 className="text-neutral-900 text-xl font-semibold">{salon.name}</h1>
                    <div className="flex text-white gap-1 items-center rounded-sm bg-neutral-900 px-2 p-1">
                        <span>{salon.rating}</span>
                        <span>
                            {" "}
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="14"
                                height="14"
                                viewBox="0 0 24 24"
                                fill="white"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-star"
                            >
                                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                            </svg>
                        </span>
                    </div>
                </div>
                <h2 className="text-neutral-900">{salon.address}</h2>
                <h3 className="text-neutral-600">{salon.city}</h3>
                <p className="text-sm text-red-600">
                    Closed{" "}
                    <span className="text-neutral-600">(Today)</span>
                </p>
                <div className="flex flex-row my-2 gap-3 flex-wrap">
                    <button className="flex items-center gap-1 flex-grow sm:flex-grow-0 p-2 px-3 hover:bg-neutral-50 justify-center ring-1 rounded-md ring-neutral-300 ">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="red"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-navigation2"
                        >
                            <polygon points="12 2 19 21 12 17 5 21 12 2"></polygon>
                        </svg>{" "}
                        Direction
                    </button>
                    <button className="flex items-center gap-1 flex-grow sm:flex-grow-0 p-2 px-3 hover:bg-neutral-50 justify-center ring-1 rounded-md ring-neutral-300 ">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="red"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-bookmark-plus"
                        >
                            <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"></path>
                            <line x1="12" x2="12" y1="11" y2="17"></line>
                            <line x1="9" x2="15" y1="14" y2="14"></line>
                        </svg>{" "}
                        Save
                    </button>
                    <button className="flex items-center gap-1 flex-grow sm:flex-grow-0 p-2 px-3 hover:bg-neutral-50 justify-center ring-1 rounded-md ring-neutral-300 ">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="red"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-share"
                        >
                            <circle cx="18" cy="5" r="3"></circle>
                            <circle cx="6" cy="12" r="3"></circle>
                            <circle cx="18" cy="19" r="3"></circle>
                            <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
                            <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
                        </svg>{" "}
                        Share
                    </button>
                </div>
                <div className="flex gap-1">
                    {salon.tags?.map((tag, index) => (
                        <div key={index} className="bg-neutral-50 p-1 rounded-md">
                            <p className="text-neutral-700 text-sm">{tag}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
