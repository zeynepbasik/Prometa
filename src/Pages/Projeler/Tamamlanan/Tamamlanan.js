import React from "react";
import { Projects } from "./TamamlananData";
import { BsArrowRightCircleFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import ScrollToTop from "react-scroll-to-top";

const Tamamlanan = () => {
  const navigate = useNavigate();

  const ToProjects = (isveren) => {
    navigate(`/projeler/tamamlanan-projeler/${isveren}`, { state: isveren });
  };

  return (
    <>
      <div className="grid grid-cols-3 gap-2 p-3 lg:mb-20 lg:mt-10 lg:gap-14 lg:pr-20 lg:pl-20 lg:pb-16">
        {[
          ["TİMUR YAPI GAYRİMENKUL A.Ş."],
          ["ÜNAL YAPI İNŞAAT LTD.ŞTİ."],
          ["PİYATUR TURİZM LTD.ŞTİ."],
          ["MURAT İNŞAAT LTD.ŞTİ."],
          ["TAV STANDART REKLAM LTD.ŞTİ."],
          ["FFK İNŞAAT LTD.ŞTİ."],
          ["TS MÜHENDİSLİK LTD.ŞTİ."],
          ["ÇAĞLAR İNŞAAT VE TURİZM LTD.ŞTİ."],
          ["ANADOLU JAPAN TURİZM A.Ş."],
          ["GEMAK A.Ş."],
          ["İSOTÜRK İNŞAAT LTD.ŞTİ."],
          ["ECZACIBAŞI GENTA"],
          ["İMAJ A.Ş."],
          ["İ.T.Ü."],
          ["İ.E.L.E.V."],
          ["MATRAŞ"],
          ["DİMEL"],
          ["APARTİST GAYRİMENKUL"],
          ["KİLİM GRUP A.Ş."],
        ].map(([baslik]) => (
          <div className="flex h-full flex-col justify-items-center self-center rounded-3xl border-slate-50 px-4 pb-2 pt-3 shadow-myShadow backdrop-blur-sm lg:px-0 lg:pb-8 lg:pt-5">
            <h2 className="self-center font-sans text-sm font-semibold text-darkBlue lg:py-8 lg:text-2xl">
              {baslik}
            </h2>
            <div className="flex flex-col items-center justify-items-center self-center">
              {Projects.map((each, index) =>
                each.isveren === baslik ? (
                  <div key={index}>
                    <p className="pt-1 text-xs lg:text-base">{each.title},</p>
                  </div>
                ) : (
                  <></>
                )
              )}
            </div>
            <button
              className="mt-auto flex items-center self-end border-none bg-inherit pt-6 text-xs text-darkBlue lg:gap-3 lg:pr-5 lg:text-base"
              onClick={() => {
                ToProjects(baslik);
              }}
            >
              Projelere Göz At <BsArrowRightCircleFill />
            </button>
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

export default Tamamlanan;
