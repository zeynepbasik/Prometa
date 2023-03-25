import React from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../Header/prometa-logo.png";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <div className="bottom-0 flex w-full h-5 items-center justify-between bg-darkBlue lg:h-20">
      <p className="pl-2 text-xs text-white lg:pl-10">
        © 2017 Her hakkı saklıdır. Prometa Group
      </p>
      <button
        className="cursor-pointer border-none bg-inherit"
        onClick={() => navigate("/")}
      >
        <img src={Logo} className="h-3 pr-2 lg:h-10 lg:pr-20"></img>
      </button>
    </div>
  );
};

export default Footer;
