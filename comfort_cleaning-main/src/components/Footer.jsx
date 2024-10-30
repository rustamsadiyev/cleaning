import React, {useEffect} from "react";
import logo from "../assets/logoqizill.png";
import Container from "../utils/Utils";
import {FaInstagram, FaTelegram} from "react-icons/fa";
import {useTranslation} from "react-i18next";
import initializeAos from "../aos/aosSetup";

const Footer = () => {
  const {t} = useTranslation();

  useEffect(() => {
    initializeAos();
  }, []);
  return (
    <div className="bg-white py-12 sm:py-20">
      <Container>
        <div
          data-aos="zoom-in"
          data-aos-duration="700"
          data-aos-delay="140"
          className="flex flex-col sm:flex-row items-center sm:items-start sm:justify-between gap-10 sm:gap-5"
        >
          <div>
            <img
              className="w-full mb-5"
              style={{width: "160px", height: "80px"}} // Mos ravishda width va height qiymatlarini o'zgartiring
              src={logo}
              alt=""
            />
            <div className="flex items-center gap-4">
              <button className="rounded-full w-[34px] h-[34px] sm:w-[40px] sm:h-[40px] flex items-center justify-center border-[1px] border-black bg-black text-white text-lg sm:text-xl p-6 hover:text-black hover:bg-transparent transition-colors duration-300">
                <a
                  href="https://www.instagram.com/comfort.cleaning.uz?utm_source=qr&igsh=MWk1dW54NWRrY2xieQ=="
                  target="blank"
                >
                  <FaInstagram />
                </a>
              </button>
              <button className="rounded-full w-[34px] h-[34px] sm:w-[40px] sm:h-[40px] flex items-center justify-center border-[1px] border-black bg-black text-white text-lg sm:text-xl p-6 hover:text-black hover:bg-transparent transition-colors duration-300">
                <a
                  href="https://t.me/comfortgilam"
                  target="blank"
                >
                  <FaTelegram />
                </a>
              </button>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-xl sm:text-2xl mb-3">
              {t("footer.h4")}
            </h4>
            <ul className="flex flex-col gap-3">
              <li className="opacity-90 text-lg sm:text-xl">
                <a
                  className="hover:border-b-black border-transparent border-b-2 transition-all duration-500"
                  href="#enterprises"
                >
                  {t("nav.enterprises")}
                </a>
              </li>
              <li className="opacity-90 text-lg sm:text-xl">
                <a
                  className="hover:border-b-black border-transparent border-b-2 transition-all duration-500"
                  href="#about"
                >
                  {t("nav.about")}
                </a>
              </li>
              <li className="opacity-90 text-lg sm:text-xl">
                <a
                  className="hover:border-b-black border-transparent border-b-2 transition-all duration-500"
                  href="#news"
                >
                  {t("nav.news")}
                </a>
              </li>
              <li className="opacity-90 text-lg sm:text-xl">
                <a
                  className="hover:border-b-black border-transparent border-b-2 transition-all duration-300"
                  href="#projects"
                >
                  {t("footer.projects")}
                </a>
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-3">
            <h4 className="font-semibold text-xl sm:text-2xl mb-3">
              {t("footer.h42")}
            </h4>
            <a
              className="hover:border-b-black w-[84%] border-transparent border-b-2 transition-all duration-300 opacity-90 text-lg sm:text-xl"
              href="tel:+998950003080"
            >
              +998950003080
            </a>
            <a
              className="hover:border-b-black w-[84%] border-transparent border-b-2 transition-all duration-300 opacity-90 text-lg sm:text-xl"
              href="tel:+998990603080"
            >
              +998990603080
            </a>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
