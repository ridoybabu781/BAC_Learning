import React, { useState } from "react";
import Dashboard from "./sections/Dashboard";
import OrderHistory from "./sections/OrderHistory";
import Wishlist from "./sections/Wishlist";
import ShoppingCart from "./sections/ShoppingCart";
import Settings from "./sections/Settings";
import { CaretRightIcon, HouseIcon } from "@phosphor-icons/react";

export default function Profile() {
  const [selectedSection, setSelectedSection] = useState("dashboard");

  const Section = () => {
    switch (selectedSection) {
      case "dashboard":
        return <Dashboard />;
      case "orderHistory":
        return <OrderHistory />;
      case "wishlist":
        return <Wishlist />;
      case "shoppingCart":
        return <ShoppingCart />;
      case "settings":
        return <Settings />;
      default:
        return <Dashboard />;
    }
  };

  const sidebarItems = [
    { text: "Dashboard", key: "dashboard" },
    { text: "Order History", key: "orderHistory" },
    { text: "Wishlist", key: "wishlist" },
    { text: "Shopping Cart", key: "shoppingCart" },
    { text: "Settings", key: "settings" },
  ];

  return (
    <>
      <div className="bg-[url(/images/shopHero.jpg)]">
        <div className=" backdrop-brightness-50 text-white w-full">
          <div className=" py-12 px-12 flex  items-center gap-4 text-xl container m-auto '  ">
            <HouseIcon /> Home <CaretRightIcon /> {selectedSection}
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row min-h-screen bg-gray-100">
        <div className="w-full md:w-1/4 bg-white shadow-md p-6 flex flex-col space-y-4">
          {sidebarItems.map((item) => (
            <button
              key={item.key}
              onClick={() => setSelectedSection(item.key)}
              className={`text-left px-4 py-2 rounded-lg font-medium transition-colors
              ${
                selectedSection === item.key
                  ? "bg-green-500 text-white"
                  : "hover:bg-green-100 text-gray-700"
              }`}
            >
              {item.text}
            </button>
          ))}
        </div>

        <div className="w-full md:w-3/4 p-6">
          <Section />
        </div>
      </div>
    </>
  );
}
