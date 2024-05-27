import { Link, useLocation } from "react-router-dom";

export const SalonNav = ({ salon }) => {
    const { pathname } = useLocation();
    let subpage = pathname.split('/')?.[3];
    if (subpage === undefined) {
        subpage = 'overview';
    }

    function linkClasses(type = null) {
        let classes = 'flex items-center text-base gap-2 whitespace-nowrap border-b-2 cursor-pointer p-2';
        if (type === subpage) {
            classes += ' border-neutral-900';
        } else {
            classes += ' border-transparent';
        }
        return classes;
    }

    return (
        <div className="flex text-neutral-500 noscrollbar font-medium text-xl items-center overflow-x-auto border-b">
            <Link to={`/salons/${salon._id}`} className={linkClasses('overview')}>
                <h1 className="text-neutral-900">Overview</h1>
            </Link>
            <div className="border-r-2 p-2 mr-4 border-neutral-300"></div>
            <Link to={`/salons/${salon._id}/services`} className={linkClasses('services')}>
                <h1 className="text-neutral-900">Services</h1>
            </Link>
            <div className="border-r-2 p-2 mr-4 border-neutral-300"></div>
            <Link to={`/salons/${salon._id}/reviews`} className={linkClasses('reviews')}>
                <h1 className="text-neutral-900">Reviews</h1>
            </Link>
            <div className="border-r-2 p-2 mr-4 border-neutral-300"></div>
            <Link to={`/salons/${salon._id}/photos`} className={linkClasses('photos')}>
                <h1 className="text-neutral-900">Photos</h1>
            </Link>
            <div className="border-r-2 p-2 mr-4 border-neutral-300"></div>
        </div>
    );
}
