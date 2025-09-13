import { Logo } from "../logo";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeaf } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import {
  BagIcon,
  CaretDownIcon,
  HeartIcon,
  ListIcon,
  MagnifyingGlassIcon,
  PhoneCallIcon,
  ShoppingBagIcon,
  ShoppingCartIcon,
  UserIcon,
  XIcon,
} from "@phosphor-icons/react";

let navData = [
  { name: "Home", link: "/", downArray: true },
  { name: "Shop", link: "/product", downArray: true },
  { name: "Pages", link: "/pages", downArray: true },
  { name: "Blogs", link: "/blogs", downArray: true },
  { name: "About Us", link: "/about", downArray: false },
];

export default function Navbar() {
  let [navBarOpen, setNavBarOpen] = useState(false);
  return (
    <div className="bg-green-100 shadow-lg sticky top-0 z-50">
      <div className="bg-white py-7 px-8 lg:px-0">
        <div className="container m-auto flex justify-between items-center py-2 px-1">
          <div className="lg:hidden" onClick={() => setNavBarOpen(true)}>
            <ListIcon size={32} />
          </div>

          <div
            className={
              "fixed top-0 left-0 bg-white  h-full space-y-12 flex flex-col  justify-between lg:hidden overflow-hidden transition-all " +
              (navBarOpen ? " w-2/3 " : " w-0 ")
            }
          >
            <div className="space-y-12 p-12">
              <div className="text-3xl flex items-center gap-2 justify-between ">
                <Logo />
                <XIcon
                  size={32}
                  onClick={() => setNavBarOpen(false)}
                  className="absolute top-4 right-0 cursor-pointer"
                />
              </div>

              <div className="flex flex-col lg:flex-row gap-7">
                {navData.map((item, index) => {
                  return (
                    <Link to={item.link}>
                      <div
                        className="space-x-2 text-gray-600 flex items-center justify-between gap-2 w-full text-2xl font-bold hover:underline "
                        key={index}
                      >
                        <li className="list-none"> {item.name}</li>
                        {item.downArray ? (
                          <CaretDownIcon size={18} weight="fill" />
                        ) : null}
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
            <div className="flex flex-col items-center gap-10 p-12 ">
              <div className="gap-5 sm:hidden xl:block">
                <button className="flex items-center gap-2">
                  <PhoneCallIcon size={32} />
                  <span className="text-gray-600">+880 1735 699781</span>
                </button>
              </div>
              <div className="flex items-center gap-4 w-full justify-evenly">
                <span>
                  <MagnifyingGlassIcon size={36} />
                </span>
                <span>
                  <HeartIcon size={36} />
                </span>
                <span>
                  <ShoppingCartIcon size={36} />
                </span>
                <span>
                  <UserIcon size={36} />
                </span>
              </div>
            </div>
          </div>

          <Logo />

          <div className="  gap-7 hidden lg:flex">
            {navData.map((item, index) => {
              return (
                <div
                  className="space-x-2 text-gray-600 flex items-center gap-2"
                  key={index}
                >
                  <a href={item.link}> {item.name}</a>
                  {item.downArray ? <CaretDownIcon size={16} /> : null}
                </div>
              );
            })}
          </div>

          <div className="flex items-center gap-10">
            <div className="gap-5 hidden xl:block">
              <button className="flex items-center gap-2">
                <PhoneCallIcon size={32} />
                <span className="text-gray-600">+880 1735 699781</span>
              </button>
            </div>
            <div className="flex items-center gap-5">
              <span>
                <MagnifyingGlassIcon size={36} />
              </span>
              <span className="hidden md:block">
                <Link to={"/wishlist"}>
                  <HeartIcon size={36} />
                </Link>
              </span>
              <span className="hidden md:block">
                <Link to={"/cart"}>
                  <ShoppingCartIcon size={36} />
                </Link>
              </span>
              <span>
                <Link to={"/profile"}>
                  <UserIcon size={36} />
                </Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
