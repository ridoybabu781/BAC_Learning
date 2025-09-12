import React from "react";
import Hero from "./sections/Hero";
import FeaturesSection from "./sections/Features";
import SectionTitleBar from "./components/sectionTitleBar";
import FeaturedProduct from "./sections/FeaturedProduct";
import ShopByCategory from "./sections/shopByCategory";
import WhyChooseUs from "./sections/whyChooseUs";

export default function Home() {
    return (
        <div>
            <Hero />
            <FeaturesSection />
            <FeaturedProduct />
            <ShopByCategory />
            <WhyChooseUs />
        </div>
    );
}
