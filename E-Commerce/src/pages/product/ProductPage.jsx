import React from "react";
import Sidebar from "./sections/Sidebar";
import ProductList from "./sections/ProductList";
import { CaretRightIcon, HouseIcon } from "@phosphor-icons/react";

export default function ProductPage() {
    return (
        <div className=''>
            <div>
                <div className='bg-[url(/images/shopHero.jpg)]'>
                    <div className=' backdrop-brightness-50 text-white w-full'>
                        <div className=" py-12 px-12 flex  items-center gap-4 text-xl container m-auto '  ">
                            <HouseIcon /> Home <CaretRightIcon /> Product
                        </div>
                    </div>
                </div>
            </div>
            <div className='py-4 px-2 container m-auto flex flex-col lg:flex-row gap-2 my-8'>
                <div className='w-full lg:w-1/3'>
                    <Sidebar />
                </div>
                <div className='w-full lg:w-2/3'>
                    <ProductList />
                </div>
            </div>
        </div>
    );
}
