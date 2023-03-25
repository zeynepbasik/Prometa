import React from "react";
import Hakkımızda from "./hakkımızda.jpg";

function Hakkimizda() {
  return (
    <div className="pt-2 pb-24 lg:grid lg:grid-cols-2 lg:justify-items-center lg:gap-1 lg:pt-24">
      <div className="float-left h-40 w-44 px-5 pt-2 lg:float-none lg:flex lg:h-full lg:w-auto lg:items-center lg:justify-items-center lg:px-0 lg:pt-5">
        <img className="h-full" src={Hakkımızda} />
      </div>
      <div className="px-5 pt-2 text-darkBlue lg:self-center lg:justify-self-center lg:pr-20 lg:pt-10">
        <h1 className="pb-4 font-serif text-xl lg:pb-8 lg:text-center lg:text-4xl">
          Hakkımızda
        </h1>
        <h2 className="pb-4 text-sm lg:text-lg">
          PROMETA MÜHENDİSLİK; 2000 yılında, Elektrik ve Mekanik tesisat
          sistemlerinin, projelendirme, uygulama, danışmanlık hizmetlerinde
          doğru çözümler sunmak amacıyla kurulmuş bir yapıdır.
        </h2>
        <p className="pb-4 text-sm lg:text-lg">
          2004 yılında, büyüme hedefimiz ile faaliyetlerimizi Limited Şirket
          olarak sürdürme kararı alarak kurumsal bir yapıya geçiş yaptık.
        </p>
        <p className="pb-4 text-sm lg:text-lg">
          Proje dinamiklerine kolay uyum sağlayan, planlı, kaliteli, estetik ve
          ekonomik çözümler bulmayı kendine amaç edinmiş teknik kadromuz, bu
          yönü ile hem mimari ihtiyaçlara cevap verebilmekte, hem de işveren
          ve/veya müteahhit firmayı korumayı hedeflemektedir.
        </p>
        <h4 className="pb-3 text-xl text-darkBlue lg:font-semibold">
          Amacımız;
        </h4>
        <p className="text-sm lg:text-lg">
          Elektrik ve Mekanik sistemlerin projelendirilmesi, uygulaması çağdaş
          işletim yöntemleriyle işletilmesi, bakım ve onarımını enerji tasarrufu
          ve çevre bilinci perspektifiyle, etik kurallar içinde ve “Müşteri
          memnuniyeti” gözeten toplam kalite anlayışı çerçevesinde yapmaktır.
        </p>
      </div>
    </div>
  );
}

export default Hakkimizda;
