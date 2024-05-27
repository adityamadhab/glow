import React from 'react';
import Footer from "../components/HomeNavComponents/Footer";
import SalonDetails from "../components/SalonComponents/SalonDetails";

export function SalonPage() {
    return (
        <div>
            <div className="py-8">
                <SalonDetails />
            </div>
            <Footer />
        </div>
    );
}
