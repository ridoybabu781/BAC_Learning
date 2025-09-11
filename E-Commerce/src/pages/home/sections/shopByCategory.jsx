import { ArrowLeftIcon, ArrowRightIcon } from "@phosphor-icons/react";
import SectionTitleBar from "../components/sectionTitleBar";

import vegetable from "../../../assets/img/category-icons/vegetables.png";
import fruits from "../../../assets/img/category-icons/fruits 1.png";
import fish from "../../../assets/img/category-icons/fish 1.png";
import meat from "../../../assets/img/category-icons/meat 1.png";
import drinks from "../../../assets/img/category-icons/soft-drink 1.png";
import snacks from "../../../assets/img/category-icons/snacks 1.png";
import { useRef } from "react";

let CategoryCard = ({ data }) => {
    let { image, title, productCount } = data;
    return (
        <div className='text-center border border-gray-200 py-8 rounded-lg shrink-0 px-10'>
            <img src={image} className='m-auto mb-4' alt='' />
            <p className='text-lg font-semibold text-primary'>{title}</p>
            <p className='text-sm text-gray-500 '>{productCount} prodcuts</p>
        </div>
    );
};

let categories = [
    {
        image: vegetable,
        title: "Vegetable",
        productCount: 129,
    },
    {
        image: fruits,
        title: "Fresh Fruit",
        productCount: 137,
    },
    {
        image: fish,
        title: "Fish",
        productCount: 34,
    },
    {
        image: meat,
        title: "Meat",
        productCount: 165,
    },
    {
        image: drinks,
        title: "Water and Drinks",
        productCount: 48,
    },
    {
        image: snacks,
        title: "Snacks",
        productCount: 165,
    },
];
let ShopByCategory = () => {
    let scrollContainerRef = useRef(null);
    let scrollFactor = 200
    
    let scrollLeft = () => {
        let scrollContainer = scrollContainerRef.current;
        scrollContainer.scrollBy({
            left: -scrollFactor,
            behavior: "smooth",
        });
    };
    let scrollRight = () => {
        let scrollContainer = scrollContainerRef.current;
        scrollContainer.scrollBy({
            left: scrollFactor,
            behavior: "smooth",
        });
    };
    return (
        <div className='container m-auto mb-12'>
            <SectionTitleBar
                title={"Shop by Top Categories"}
                nextPageLink={"/"}
            />
            <div className='flex items-center justify-between gap-8'>
                <button onClick={()=>scrollLeft()} className='p-4 border border-gray-300 rounded-full text-gray-600 '>
                    <ArrowLeftIcon />
                </button>
                <div
                    className='flex flex-1 gap-6 overflow-auto'
                    ref={scrollContainerRef}
                >
                    {categories.map((items, index) => {
                        return <CategoryCard data={items} key={index} />;
                    })}
                </div>
                <button onClick={()=>scrollRight()} className='p-4 border border-gray-300 rounded-full text-gray-600 '>
                    {" "}
                    <ArrowRightIcon />
                </button>
            </div>
        </div>
    );
};

export default ShopByCategory;
