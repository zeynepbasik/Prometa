import MainHeader from "./Components/MainHeader/MainHeader";
import React from "react";
import Anasayfa from "./Pages/Anasayfa/Anasayfa";
import Hakkimizda from "./Pages/Hakkımızda/Hakkimizda";
import Referanslar from "./Pages/Referanslar/Referanslar";
import Tamamlanan from "./Pages/Projeler/Tamamlanan/Tamamlanan";
import Devam from "./Pages/Projeler/Devam/Devam";
import Project from "./Pages/Projeler/Tamamlanan/Project";
import Iletisim from "./Pages/Iletisim/Iletisim";
import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="flex flex-col justify-between content-start min-h-screen">
      <MainHeader />
      <Header />
      <div className="z-0">
        <Routes>
          <Route exact path="/" element={<Anasayfa />} />
          <Route path="/hakkimizda" element={<Hakkimizda />} />
          <Route path="/referanslar" element={<Referanslar />} />
          <Route
            path="/projeler/tamamlanan-projeler"
            element={<Tamamlanan />}
          />
          <Route
            path="/projeler/tamamlanan-projeler/:isveren"
            element={<Project />}
          />
          <Route path="/projeler/devam-eden-projeler" element={<Devam />} />
          <Route path="/iletisim" element={<Iletisim />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
