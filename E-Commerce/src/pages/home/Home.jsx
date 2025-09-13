import React from "react";
import Hero from "./sections/Hero";
import FeaturesSection from "./sections/Features";
import SectionTitleBar from "./components/sectionTitleBar";
import FeaturedProduct from "./sections/FeaturedProduct";
import ShopByCategory from "./sections/shopByCategory";
import WhyChooseUs from "./sections/whyChooseUs";
import Statistics from "./sections/statistics";
import Footer from "./sections/footer";
import Contact from "./sections/contactSection";

export default function Home() {
    return (
        <div className="bg-white">
            <Hero />
            <FeaturesSection />
            <FeaturedProduct />
            <ShopByCategory />
            <WhyChooseUs />
            <Statistics/>
            <Contact/>
            <Footer/>
        </div>
    );
}
