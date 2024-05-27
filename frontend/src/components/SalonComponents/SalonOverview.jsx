import Footer from "../HomeNavComponents/Footer";
import { SalonNav } from "./SalonNav";
import { SalonPhotosDetail } from "./SalonPhotosDetail";

export function SalonOverview() {
    return (
        <div>
            <SalonPhotosDetail />
            <div className="w-full max-w-7xl mx-auto xl:px-20 md:px-10 px-4">
                <SalonNav />
            </div>
            <div className="my-10 py-5">
                <div class=" w-full max-w-7xl mx-auto xl:px-20  md:px-10 px-4 ">
                    <h1 class="text-sm sm:text-xl font-semibold">Developer is working on this Page</h1>
                    <p class="text-sm">Have patience </p>
                </div>
            </div>
            <Footer/>
        </div>
    )
}