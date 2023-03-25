import React from "react";
import { FiPhone } from "react-icons/fi";
import { AiOutlineMail } from "react-icons/ai";
import { GoLocation } from "react-icons/go";

function Iletisim() {
  return (
    <div className="flex flex-col items-center pb-6">
      <div className="mb-0 flex h-20 justify-center pb-0 lg:h-36">
        <h2 className="self-center justify-self-center font-sans text-xl font-medium text-darkBlue lg:text-5xl">
          Bize Ulaşın
        </h2>
      </div>
      <div className="flex h-full flex-col gap-0 pt-0 lg:grid lg:grid-cols-2">
        <div className="pb-8 pr-5 lg:pb-5 lg:pl-5 lg:pr-0">
          <div
            class="mapouter h-[300px] w-[350px] pl-3 lg:h-[500px] lg:w-[744px] lg:text-right"
            style={{ position: "relative" }}
          >
            <div
              class="gmap_canvas h-[300px] w-[350px] lg:h-[500px] lg:w-[744px]"
              style={{ overflow: "hidden", backgroundColor: "white" }}
            >
              <iframe
                width="744"
                height="500"
                id="gmap_canvas"
                src="https://maps.google.com/maps?q=%C3%9Cmraniye%20elit%20sok.%20no:9&t=&z=15&ie=UTF8&iwloc=&output=embed"
                frameborder="0"
                scrolling="no"
                marginheight="0"
                marginwidth="0"
              ></iframe>
              <a href="https://fmovies-online.net">fmovies</a>
              <a href="https://www.embedgooglemap.net">embedgooglemap.net</a>
            </div>
          </div>
        </div>
        <div className="flex flex-col content-center justify-center pb-5">
          <h4 className="w-9/12 self-center pb-5 font-sans text-lg font-medium lg:pb-20 lg:text-2xl">
            Prometa Mühendislik Elektrik Elektronik İnşaat Sanayi ve Dış Ticaret
            LTD.ŞTİ.
          </h4>
          <ul className="self-center pb-5 pl-12 lg:self-start lg:pl-28">
            <li className="flex items-center gap-3 pb-5">
              <FiPhone className="text-lightBlue" /> Telefon: 0216 380 45 41
            </li>
            <li className="flex items-center gap-3 pb-5">
              <AiOutlineMail className="text-lightBlue " /> Email:
              info@prometagroup.com
            </li>
            <li className="flex items-center gap-3 pb-5">
              <GoLocation className="text-lightBlue" />
              Adres: Esenşehir Mah., Elit Sok., No:9, Ümraniye, İstanbul,
              Türkiye
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Iletisim;
