import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import initializeAos from "../aos/aosSetup";
import banner from "../assets/stirka.jpg"; // Import normally

const Banner = () => {
  const { t } = useTranslation();

  useEffect(() => {
    initializeAos();
  }, []);

  return (
    <div
      className="h-[100vh] relative bg-cover bg-center overflow-hidden"
      style={{
        backgroundImage: `url(${banner})`,
        backgroundRepeat: "no-repeat", 
        backgroundSize: "cover", 
        backgroundPosition: "center right", 
      }}
    >
      {/* Slightly dark overlay */}
      <div className="absolute inset-0 bg-black opacity-20 md:opacity-10"></div>

      <div className="h-[100vh] flex flex-col justify-center max-w-[1320px] px-5 mx-auto text-white relative z-10">
        <h1
          data-aos="zoom-in"
          data-aos-duration="600"
          data-aos-delay="300"
          className="text-[40px] sm:text-[58px] md:text-[70px] lg:text-[80px] font-extrabold leading-normal"
        >
          Comfort
        </h1>
        <p
          data-aos="fade-right"
          data-aos-duration="700"
          data-aos-delay="340"
          className="mt-7 mb-8 text-lg sm:text-xl font-bold"
        >
          {t("banner.p")}
        </p>
        <div
          data-aos="fade-up"
          data-aos-duration="700"
          data-aos-delay="300"
          className="flex items-center gap-5"
        >
          <a
            className="border-[1px] border-white text-white bg-transparent rounded-3xl px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-[16px] font-semibold transition-all duration-300 hover:bg-white hover:text-main"
            href="#projects"
          >
            {t("banner.btn1")}
          </a>
          <a
            className="border-[1px] border-white text-white bg-transparent rounded-3xl px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-[16px] font-semibold transition-all duration-300 hover:bg-white hover:text-main"
            href="#communication"
          >
            {t("banner.btn2")}
          </a>
        </div>
      </div>

      {/* Adjust styles */}
      <style jsx>{`
        .bg-cover {
          background-size: cover;
          background-position: center right; 
        }

        @media (max-width: 768px) {
          .bg-cover {
            height: 80vh; 
            background-size: contain; 
            background-position: center right; 
            background-repeat: no-repeat; 
          }
          
          .bg-black {
            opacity: 0.2; /* Slightly darkens the image */
          }
        }
      `}</style>
    </div>
  );
};

export default Banner;
