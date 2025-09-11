import React from "react";
import Navbar from "./components/layout/Navbar";
import Home from "./pages/home/Home";
import TopBar from "./components/layout/TopBar";

export default function App() {
  return (
    <div>
      <TopBar />
      <Navbar />
      <Home />
    </div>
  );
}
