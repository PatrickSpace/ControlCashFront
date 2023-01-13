import React from "react";
import VerticalNavBar from "../components/navigation/VerticalNavBar";
const LayoutPC = ({ children }) => {
  return (
    <div className="layout-pc bg-gradient-to-bl from-midnightlight to-midnight h-screen v-full grid grid-cols-10 gap-0">
      <VerticalNavBar />
      <div className="bg-white/10 col-span-8">{children}</div>
    </div>
  );
};

export default LayoutPC;
