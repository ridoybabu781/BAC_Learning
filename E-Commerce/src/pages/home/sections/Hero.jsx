import React from "react";
import BG from "../../../assets/img/BG.png";
import sobjiHero from "../../../assets/img/sobjiHero.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function Hero() {
  return (
    <div className="bg-green-100 min-h-[640px] relative">
      <img src={BG} alt="" className="w-fit h-full absolute" />
      <div className="max-w-7xl m-auto flex h-full items-center relative">
        <div className="w-1/2 flex items-center justify-center h-[640px]">
          <img
            src={sobjiHero}
            alt=""
            className="object-contain h-[80%] w-[80%] mx-auto my-auto"
          />
        </div>
        <div className="w-1/2 space-y-2">
          <h4 className="text-green-500 font-medium">Welcome to shopery</h4>
          <h1 className="text-5xl font-bold">Fresh & Healthy Organic Food</h1>
          <h3 className="text-3xl font-semibold">
            Sale up to <span className="text-orange-400">30% OFF</span>
          </h3>
          <p>Free shipping on all your order. we deliver, you enjoy</p>
          <button className="bg-green-500 text-white px-6 py-3 rounded-full mt-4 hover:bg-green-600 flex items-center gap-2">
            Shop Now <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </div>
      </div>
    </div>
  );
}
