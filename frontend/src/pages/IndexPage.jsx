import Footer from "../components/HomeNavComponents/Footer";
import { HomeRest } from "../components/IndexComponents/HomeRest";
import { LandingPage } from "../components/IndexComponents/LandingPage";
import PopularLocations from "../components/IndexComponents/PopularLocations";
import { Services } from "../components/IndexComponents/Services";

export function IndexPage() {
    return (
        <div>
            <div className="p-10 m-10 flex flex-col min-h-screen z-0">
                <LandingPage />
                <HomeRest />
                <PopularLocations />
                <Services />
            </div>
            <Footer/>
        </div>
    );
}
