import React from "react";
import Hero from "./sections/Hero";
import FeaturesSection from "./sections/Features";
import SectionTitleBar from "./components/sectionTitleBar";
import FeaturedProduct from "./sections/FeaturedProduct";
import ShopByCategory from "./sections/shopByCategory";

export default function Home() {
  return (
    <div>
      <Hero />
      <FeaturesSection/>
      <FeaturedProduct/>
      <ShopByCategory/>
    </div>
  );
}
