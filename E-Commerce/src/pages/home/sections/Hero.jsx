import React from "react";
import BG from "/images/BG.png";
import sobjiHero from "/images/sobjiHero.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function Hero() {
<<<<<<< HEAD
  return (
    <div className="relative py-20" style={{ background: `url(${BG})` }}>
      <div className=" container m-auto flex h-full items-center  relative">
        <div className="w-1/2 pr-6">
          <img src={sobjiHero} alt="" className="object-contain w-full" />
=======
    return (
        <div className='relative py-20' style={{ background: `url(${BG})` }}>
            <div className=' container m-auto flex flex-col xl:flex-row px-12 h-full items-center  relative'>
                <div className=' pr-6'>
                    <img
                        src={sobjiHero}
                        alt=''
                        className='object-contain w-full'
                    />
                </div>
                <div className=''>
                    <h4 className='text-green-500 font-medium'>
                        Welcome to shopery
                    </h4>
                    <h1 className='text-4xl text-center lg:text-left md:text-7xl font-semibold my-7'>
                        Fresh & Healthy Organic Food
                    </h1>
                    <div className='space-y-2 text-center lg:text-left'>
                        <h3 className='text-3xl font-semibold'>
                            Sale up to{" "}
                            <span className='text-orange-400'>30% OFF</span>
                        </h3>
                        <p>
                            Free shipping on all your order. we deliver, you
                            enjoy
                        </p>
                    </div>
                    <button className='bg-green-500 text-white px-6 py-3 rounded-full mt-4 hover:bg-green-600 flex items-center gap-2 m-auto lg:m-0 lg:mt-4'>
                        Shop Now <FontAwesomeIcon icon={faArrowRight} />
                    </button>
                </div>
            </div>
>>>>>>> 90a121d (Made home page mobile responsive)
        </div>
        <div className="w-1/2">
          <h4 className="text-green-500 font-medium">Welcome to shopery</h4>
          <h1 className="text-7xl font-semibold my-7">
            Fresh & Healthy Organic Food
          </h1>
          <div className="space-y-2">
            <h3 className="text-3xl font-semibold">
              Sale up to <span className="text-orange-400">30% OFF</span>
            </h3>
            <p>Free shipping on all your order. we deliver, you enjoy</p>
          </div>
          <button className="bg-green-500 text-white px-6 py-3 rounded-full mt-4 hover:bg-green-600 flex items-center gap-2">
            Shop Now <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </div>
      </div>
    </div>
  );
}
