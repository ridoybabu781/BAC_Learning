import React from "react";
import Hero from "./sections/Hero";
import FeaturesSection from "./sections/Features";
import SectionTitleBar from "./components/sectionTitleBar";
import FeaturedProduct from "./sections/FeaturedProduct";
import ShopByCategory from "./sections/shopByCategory";
import WhyChooseUs from "./sections/whyChooseUs";
import Statistics from "./sections/statistics";
import Footer from "../../components/layout/footer";
import Contact from "./sections/contactSection";
import Sponsor from "./sections/sponsor";
import LatestBlogs from "./sections/Latest-blogs";
import BestSeller from "./sections/Best-seller";
import { CaretRightIcon, HouseIcon } from "@phosphor-icons/react";

export default function Home() {
  return (
    <div className="bg-white">
      <div className="bg-[url(/images/shopHero.jpg)]">
        <div className=" backdrop-brightness-50 text-white w-full">
          <div className=" py-12 px-12 flex  items-center gap-4 text-xl container m-auto '  ">
            <HouseIcon /> Home
          </div>
        </div>
      </div>
      <Hero />
      <FeaturesSection />
      <FeaturedProduct />
      <ShopByCategory />
      <WhyChooseUs />
      <Statistics />
      <BestSeller />
      <LatestBlogs />
      <Sponsor />
      <Contact />
    </div>
  );
}
