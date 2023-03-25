import React from "react";
import { Projects } from "./TamamlananData";
import { useLocation } from "react-router-dom";
import ScrollToTop from "react-scroll-to-top";

function Project() {
  const location = useLocation();
  const firma = location.state;

  return (
    <>
      <div className="flex flex-col items-center justify-items-center gap-2 px-3 pt-5 pb-10 lg:grid lg:grid-cols-2 lg:gap-24 lg:px-20 lg:pt-20 lg:pb-40">
        {Projects.map((each, index) =>
          each.isveren === firma ? (
            <div
              className="grid grid-cols-2 gap-0 rounded-3xl border-slate-50 p-1 shadow-myShadow backdrop-blur-sm lg:p-5"
              key={index}
            >
              <div className="flex items-center justify-items-center p-4 lg:p-8">
                <img
                  className="h-40 w-full lg:h-full"
                  src={each.resim}
                  alt={each.resim}
                />
              </div>
              <div className="justify-content-center flex flex-col content-center">
                <h2 className="pt-8 pb-6 font-sans text-base font-semibold text-black lg:text-2xl">
                  {each.title}
                </h2>
                <h4 className="self-start pb-2 text-sm font-medium lg:text-xl">
                  Proje Detayları:
                </h4>
                <ul className="pb-5 text-xs lg:text-base">
                  <li>Başlangıç Tarihi: {each.baslangic}</li>
                  <li>İşveren: {each.isveren}</li>
                  <li>İnşaat Kapalı Alan: {each.insaat}</li>
                  <li>İşin Yeri: {each.yer}</li>
                  <li>Yapılan İşler: {each.isler}</li>
                </ul>
              </div>
            </div>
          ) : (
            <></>
          )
        )}
      </div>
      <ScrollToTop
        smooth
        className="flex items-center justify-center lg:mb-20"
      />
    </>
  );
}

export default Project;
