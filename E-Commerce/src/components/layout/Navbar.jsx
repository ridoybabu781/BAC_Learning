import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faArrowDown,
    faChevronDown,
    faHeart,
    faLeaf,
    faLocationDot,
    faPhone,
    faSearch,
    faShoppingBag,
    faUser,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { BagIcon, CaretDownIcon, HeartIcon, MagnifyingGlassIcon, PhoneCallIcon, ShoppingBagIcon, ShoppingCartIcon, UserIcon } from "@phosphor-icons/react";

let navData = [
    { name: "Home", link: "/", downArray: true },
    { name: "Shop", link: "/", downArray: true },
    { name: "Pages", link: "/", downArray: true },
    { name: "Blogs", link: "/", downArray: true },
    { name: "About Us", link: "/", downArray: false },
];

export default function Navbar() {
    return (
        <div className='bg-green-100 shadow-lg sticky top-0 z-50'>
            <div className='bg-white py-7'>
                <div className='max-w-7xl m-auto flex justify-between items-center py-2 px-1'>
                    <div className='flex gap-7'>
                        {navData.map((item, index) => {
                            return (
                                <div
                                    className='space-x-2 text-gray-600 flex items-center gap-2'
                                    key={index}
                                >
                                    <a href={item.link}> {item.name}</a>
                                    {item.downArray ? (
                                        <CaretDownIcon size={16} />
                                    ) : null}
                                </div>
                            );
                        })}
                    </div>
                    <div className='text-3xl flex items-center gap-2'>
                        <FontAwesomeIcon
                            icon={faLeaf}
                            className='text-green-500'
                        />
                        Ecobazar
                    </div>
                    <div className='flex items-center gap-10'>
                        <div className='gap-5'>
                            <button className='flex items-center gap-2'>
                                <PhoneCallIcon size={32} />
                                <span className="text-gray-600">+880 1735 699781</span>
                            </button>
                        </div>
                        <div className='flex items-center gap-5'>
                             <span>
                                <MagnifyingGlassIcon size={36}/>
                             </span>
                             <span>
                                <HeartIcon size={36}/>
                             </span>
                             <span>
                                <ShoppingCartIcon size={36}/>
                             </span>
                             <span>
                                <UserIcon size={36}/>
                             </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
