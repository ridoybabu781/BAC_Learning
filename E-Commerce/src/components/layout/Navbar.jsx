import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowDown,
  faHeart,
  faLeaf,
  faLocationDot,
  faPhone,
  faSearch,
  faShoppingBag,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="bg-green-100 shadow-lg sticky top-0 z-50">
      <div className="bg-white ">
        <div className="max-w-7xl m-auto flex justify-between  py-2 px-1">
          <div>
            <ul className="flex gap-4 ">
              <li>
                <Link to={"/"} className="hover:text-green-700 ">
                  Home
                </Link>
              </li>
              <li>
                <Link to={"/shop"} className="hover:text-green-700 ">
                  Shop
                </Link>
              </li>
              <li>
                <Link to={"/pages"} className="hover:text-green-700 ">
                  Pages
                </Link>
              </li>
              <li>
                <Link to={"/blog"} className="hover:text-green-700 ">
                  Blog
                </Link>
              </li>
              <li>
                <Link to={"/aboutus"} className="hover:text-green-700 ">
                  About Us
                </Link>
              </li>
            </ul>
          </div>
          <div className="font-[600]">
            <FontAwesomeIcon icon={faLeaf} className="text-green-500" />
            RR-Commerce
          </div>
          <div className="flex gap-4">
            <button>
              <FontAwesomeIcon icon={faPhone} />
              +8801735699781
            </button>
            <button>
              <FontAwesomeIcon icon={faSearch} />
            </button>
            <button>
              <FontAwesomeIcon icon={faHeart} />
            </button>
            <button className="relative">
              <span className="absolute bg-green-400 text-white rounded-full p-0 -top-1 -right-2 px-1 text-xs">
                0
              </span>
              <FontAwesomeIcon icon={faShoppingBag} />
            </button>
            <button>
              <FontAwesomeIcon icon={faUser} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
