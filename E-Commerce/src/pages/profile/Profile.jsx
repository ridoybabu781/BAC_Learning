import React, { useState } from "react";
import Dashboard from "./sections/Dashboard";
import OrderHistory from "./sections/OrderHistory";
import Wishlist from "./sections/Wishlist";
import ShoppingCart from "./sections/ShoppingCart";
import Settings from "./sections/Settings";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
        return <div>{<Dashboard />}</div>;
    }
  };

  const btns = [
    {
      text: "Dashboard",
      onClick: () => setSelectedSection("dashboard"),
    },
  ];
  return (
    <div className="flex flex-col md:flex-col">
      <div className="w-1/4"></div>
      <div className="w-3/4">
        <Section />
      </div>
    </div>
  );
}
