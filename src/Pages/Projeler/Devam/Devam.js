import React, { useRef } from "react";
import { FaRegEye } from "react-icons/fa";
import { RiEyeCloseLine } from "react-icons/ri";
import { Projects } from "./DevamData";
import ScrollToTop from "react-scroll-to-top";

const Devam = () => {
  const desc1 = useRef();
  const content1 = useRef();
  const desc2 = useRef();
  const content2 = useRef();
  const desc3 = useRef();
  const content3 = useRef();

  const showContent1 = () => {
    desc1.current.classList.toggle("hidden");
    content1.current.classList.toggle("hidden");
  };
  const showContent2 = () => {
    desc2.current.classList.toggle("hidden");
    content2.current.classList.toggle("hidden");
  };
  const showContent3 = () => {
    desc3.current.classList.toggle("hidden");
    content3.current.classList.toggle("hidden");
  };
  return (
    <>
      <div className="grid grid-cols-3 gap-2 p-2 lg:gap-12 lg:p-14 lg:pb-32">
        {[
          ["TİMUR YAPI GAYRİMENKUL A.Ş.", desc1, content1, showContent1],
          ["NİDA İNŞAAT TURİZM A.Ş.", desc2, content2, showContent2],
          ["ENLEM İNŞAAT ARTAŞ", desc3, content3, showContent3],
        ].map(([baslik, first, second, third]) => (
          <div className="flex h-fit flex-col content-center items-center rounded-3xl border-slate-50 px-4 pb-4 shadow-myShadow backdrop-blur-sm lg:px-0 lg:pt-6 lg:pb-8">
            <h2 className="self-center p-4 font-sans text-base font-semibold text-darkBlue lg:text-2xl">
              {baslik}
            </h2>
            <h3 className="self-center pb-1 font-sans text-sm font-semibold text-darkBlue lg:pb-4 lg:text-xl">
              Devam Eden Projelerimiz:
            </h3>
            <div
              className="flex flex-col items-center justify-between"
              ref={first}
            >
              {Projects.map((each, index) =>
                each.isveren === baslik ? (
                  <div key={index}>
                    <p className="p-1 text-xs text-black lg:p-3 lg:text-lg lg:font-semibold">
                      {each.title},
                    </p>
                  </div>
                ) : (
                  <></>
                )
              )}
              <div className="flex flex-col items-center gap-0 pt-4">
                <button onClick={third} className="border-none bg-none">
                  <FaRegEye className="h-4 w-4 text-gray-400 lg:h-8 lg:w-8" />
                </button>
                <p className="text-xs text-gray-400 lg:text-sm lg:font-medium">
                  Detaylı bak
                </p>
              </div>
            </div>
            <div
              className="flex hidden flex-col items-center justify-between"
              ref={second}
            >
              <div className="flex h-full flex-col items-center gap-0 pt-4">
                <button onClick={third} className="border-none bg-none">
                  <RiEyeCloseLine className="h-4 w-4 text-gray-400 lg:h-8 lg:w-8" />
                </button>
                <p className="text-xs text-gray-400 lg:text-sm lg:font-medium">
                  Projeleri gizle
                </p>
              </div>
              <div className="flex flex-col w-[95%]">
                {Projects.map((each, index) =>
                  each.isveren === baslik ? (
                    <div
                      key={index}
                      className="mt-5 flex flex-col items-center justify-items-center rounded-xl border-2 border-gray-400 p-2 lg:mt-10 lg:w-[100%] lg:border-black lg:p-16"
                    >
                      <div className="w-20 lg:w-60">
                        <img
                          className="w-full"
                          src={each.resim}
                          alt={each.title}
                        />
                      </div>
                      <h2 className="self-center pt-1 text-sm font-medium lg:pt-5 lg:text-xl break-normal">
                        {each.title}
                      </h2>
                      <h3 className="font-small pt-0 text-xs lg:text-lg">
                        {each.desc}
                      </h3>
                      <h4 className="self-start pt-5 text-sm font-medium lg:text-lg">
                        Proje Detayları
                      </h4>
                      <ul className="gap-2 self-start pt-1 text-xs lg:text-sm lg:gap-2 lg:pt-2">
                        <li>Başlangıç Tarihi: {each.baslangic}</li>
                        <li>İşveren: {each.isveren}</li>
                        <li>İnşaat Kapalı Alan: {each.insaat}</li>
                        <li>İşin Yeri: {each.yer}</li>
                      </ul>
                    </div>
                  ) : (
                    <></>
                  )
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      <ScrollToTop
        smooth
        className="flex items-center justify-center lg:mb-20"
      />
    </>
  );
};

export default Devam;
