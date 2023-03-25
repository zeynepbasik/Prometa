import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { FiPhone } from "react-icons/fi";

const MainHeader = () => {
  return (
    <nav className="fixed top-0 left-0 z-50 flex w-full border-b-2 lg:h-12 lg:justify-end lg:pr-20">
      <div className="justif-items-center flex w-full items-center lg:w-96 lg:border-x-2">
        <button
          className="flex h-full w-full items-center justify-items-center gap-2 border-r-2 bg-inherit px-2"
          onClick={() => (window.location = "mailto:info@prometagroup.com")}
        >
          <AiOutlineMail className="text-lightBlue " /> info@prometagroup.com
        </button>
        <button className="flex h-full w-full items-center justify-items-center gap-2 bg-inherit px-2 lg:pl-3">
          <FiPhone className="text-lightBlue" />
          <a href="tel:02163804541" title="02163804541">
            0216 380 45 41
          </a>
        </button>
      </div>
    </nav>
  );
};

export default MainHeader;
