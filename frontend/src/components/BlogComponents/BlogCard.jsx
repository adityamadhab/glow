import { Link } from "react-router-dom";

export function BlogCard({imgSrc, title, desc}) {
    return (
        <div className="bg-white rounded-lg shadow-md p-4 flex flex-col justify-evenly">
            <img alt={title} src={imgSrc} fetchpriority="high" width="100" height="100" decoding="async" data-nimg="1" class="false  w-full  h-48 object-cover mb-2 rounded" />
            <h2 class="text-lg font-semibold mb-1">{title}</h2>
            <p className="text-gray-600 mb-2">{desc}</p>
        </div>
    )
}