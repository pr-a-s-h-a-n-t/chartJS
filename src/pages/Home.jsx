import React, { useEffect, useState } from "react";
import { menuItems } from "../constant/constant";
import "./Home.css";

const GptHome = () => {
  return (
    <nav>
      {menuItems?.map((item, index) => {
        return (
          <a href={item.link} key={index}>
            {item.label}
          </a>
        );
      })}
    </nav>
  );
};
export default GptHome;
