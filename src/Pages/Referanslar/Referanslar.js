import React from "react";
import Tahinci from "./tahincioglu.jpg";
import Nef from "./nef.png";
import Bilgili from "./bilgili.jpg";

function Referanslar() {
  return (
    <>
      <h1 className="pt-12 text-center font-serif text-2xl text-darkBlue lg:text-5xl ">
        Bazı Referanslarımız...
      </h1>
      <div className="grid grid-cols-3 pt-28 pl-3 lg:py-32 lg:pl-64">
        <div className="flex w-full items-center justify-items-center">
          <button className="flex h-[90%] w-[90%] items-center justify-items-center border bg-white lg:h-[60%] lg:w-[55%]">
            <img src={Tahinci} className="h-full w-full self-center" />
          </button>
        </div>
        <div className="flex w-full items-center justify-items-center">
          <button className="flex h-[90%] w-[90%] items-center justify-items-center border bg-white lg:h-[60%] lg:w-[55%]">
            {" "}
            <img src={Nef} className="h-full w-full self-center" />
          </button>
        </div>
        <div className="flex w-full items-center justify-items-center">
          <button className="flex h-[90%] w-[90%] items-center justify-items-center border bg-white lg:h-[60%] lg:w-[55%]">
            <img src={Bilgili} className="h-full w-full self-center" />
          </button>
        </div>
      </div>
    </>
  );
}

export default Referanslar;
