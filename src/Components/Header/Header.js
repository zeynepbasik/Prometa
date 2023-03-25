import React from "react";
import { useNavigate } from "react-router-dom";
import { useState, useRef } from "react";
import { useDetectClickOutside } from "react-detect-click-outside";
import Logo from "./prometa-logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const menu = useRef();

  const [isActive, setIsActive] = useState(false);

  const closeDropdown = () => {
    if (isActive === true) setIsActive(false);
  };

  const ref = useDetectClickOutside({ onTriggered: closeDropdown });

  const showMenu = () => {
    menu.current.classList.toggle("hidden");
  };

  return (
    <div className="flex-start sticky top-0 left-0 z-40 flex h-32 items-center justify-between px-8 lg:px-0 lg:justify-around border-b-2 bg-white pt-10 lg:h-48 lg:pt-14">
      <div className="h-10 flex justify-center lg:h-16">
        <Link
          className="h-full w-full cursor-pointer border-none bg-inherit"
          to="/"
        >
          <img src={Logo} className="h-full w-full"></img>
        </Link>
      </div>
      <nav className="hidden h-20 w-3/6 gap-5  lg:flex">
        <button
          onClick={() => navigate("/")}
          className="h-full w-full cursor-pointer rounded-xl border-none bg-darkBlue text-xl font-medium text-white decoration-inherit hover:bg-lightBlue"
        >
          Anasayfa
        </button>
        <button
          onClick={() => navigate("/hakkimizda")}
          className="h-full w-full cursor-pointer rounded-xl border-none bg-darkBlue text-xl font-medium text-white decoration-inherit hover:bg-lightBlue"
        >
          Hakkımızda
        </button>
        <button
          onClick={() => navigate("/referanslar")}
          className="h-full w-full cursor-pointer rounded-xl border-none bg-darkBlue text-xl font-medium text-white decoration-inherit hover:bg-lightBlue "
        >
          Referanslar
        </button>
        <div className="w-full">
          <button
            onClick={() => {
              setIsActive(!isActive);
            }}
            ref={ref}
            className="h-full w-full cursor-pointer rounded-xl border-none bg-darkBlue text-xl font-medium text-white decoration-inherit hover:bg-lightBlue"
          >
            Projeler
          </button>
          <div
            className="justify-content-center w-full flex-col content-center pt-2"
            style={{ display: isActive ? "flex" : "none" }}
          >
            <button
              onClick={() => {
                setIsActive(!isActive);
                navigate("/projeler/devam-eden-projeler");
              }}
              className="border-2 border-gray-400 bg-lighterBlue p-5 hover:bg-midBlue"
            >
              Devam Eden
            </button>
            <button
              onClick={() => {
                setIsActive(!isActive);
                navigate("/projeler/tamamlanan-projeler");
              }}
              className="border-2 border-gray-400 bg-lighterBlue p-5 hover:bg-midBlue"
            >
              Tamamlanan
            </button>
          </div>
        </div>
        <button
          onClick={() => navigate("/iletisim")}
          className="h-full w-full cursor-pointer rounded-xl border-none bg-darkBlue text-xl font-medium text-white decoration-inherit hover:bg-lightBlue"
        >
          İletişim
        </button>
      </nav>
      <div className="dropdown dropdown-end lg:hidden">
        <label className="btn-circle swap swap-rotate">
          <input type="checkbox" />
          <svg
            className="swap-off fill-current"
            onClick={showMenu}
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 512 512"
          >
            <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
          </svg>
          <svg
            className="swap-on fill-current"
            onClick={showMenu}
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 512 512"
          >
            <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
          </svg>
        </label>
        <ul className="dropdown-content hidden w-52 p-2" ref={menu}>
          <li>
            <a
              href="/"
              className="block bg-slate-500 px-2 py-4 text-sm font-semibold text-white"
            >
              Anasayfa
            </a>
          </li>
          <li>
            <a
              href="/hakkimizda"
              className="block bg-slate-500 px-2 py-4 text-sm font-semibold text-white"
            >
              Hakkımızda
            </a>
          </li>
          <li>
            <a
              href="/referanslar"
              className="block bg-slate-500 px-2 py-4 text-sm font-semibold text-white"
            >
              Referanslar
            </a>
          </li>
          <li>
            <a
              href="/projeler/devam-eden-projeler"
              className="block bg-slate-500 px-2 py-4 text-sm font-semibold text-white"
            >
              Devam Eden Projeler
            </a>
          </li>
          <li>
            <a
              href="/projeler/tamamlanan-projeler"
              className="block bg-slate-500 px-2 py-4 text-sm font-semibold text-white"
            >
              Tamamlanan Projeler
            </a>
          </li>
          <li>
            <a
              href="/iletisim"
              className="block bg-slate-500 px-2 py-4 text-sm font-semibold text-white"
            >
              İletişim
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
