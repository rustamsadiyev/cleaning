import React, {useEffect, useState} from "react";
import Container from "../utils/Utils";
import logo from "../assets/logoqizill.png";
import logoDark from "../assets/logoqizill.png";
import {GiHamburgerMenu} from "react-icons/gi";
import {FaPhoneFlip} from "react-icons/fa6";
import {IoClose} from "react-icons/io5";
import i18n from "../language/i18next";
import {useDispatch, useSelector} from "react-redux";
import {useTranslation} from "react-i18next";
import ContactModal from './Modal';
import "./All.css"
const Nav = () => {
   
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Modalni ochish funksiyasi
  const openModal = () => {
    setIsModalOpen(true);
  };

  // Modalni yopish funksiyasi
  const closeModal = () => {
    setIsModalOpen(false);
  };

  const [open, setOpen] = useState(false);
  const [navbarSolid, setNavbarSolid] = useState(false);
  const [smallScreen, setSmallScreen] = useState(false);
  const langCode = useSelector((state) => state.langCode);
  const dispatch = useDispatch();
  const {t} = useTranslation();

  function changeLang(lang) {
    i18n.changeLanguage(lang);
    dispatch({langCode: lang, type: "CHANGE_LANG"});
  }

  useEffect(() => {
    const handleScrollAndResize = () => {
      const isTop = window.scrollY < 100;
      const isSmallScreen = window.innerWidth < 768;
      setNavbarSolid(!isTop);
      setSmallScreen(isSmallScreen);
    };

    // Initial check for scroll position and screen size
    handleScrollAndResize();

    // Event listener for scroll and resize events
    window.addEventListener("scroll", handleScrollAndResize);
    window.addEventListener("resize", handleScrollAndResize);

    // Cleanup
    return () => {
      window.removeEventListener("scroll", handleScrollAndResize);
      window.removeEventListener("resize", handleScrollAndResize);
    };
  }, []);

  return (
    <nav
      className={`py-4 ${
        navbarSolid && !smallScreen
          ? "bg-white"
          : smallScreen
          ? "bg-white"
          : "bg-transparent"
      } fixed w-full top-0 left-0 z-50 transition-colors duration-500`}
    >
      <Container>
        <div className="flex justify-center">
          <ul className="hidden md:flex items-center md:gap-7 lg:gap-12">
            <li
              className={`text-[13px] lg:text-[16px] border-b-[1px] border-b-transparent ${
                navbarSolid ? "hover:border-b-black" : "hover:border-b-white"
              } transition-all duration-300`}
            >
              <a
                href="#info"
                className={`${navbarSolid ? "text-black" : "text-white"}`}
              >
                {t("nav.info")}
              </a>
            </li>
            <li
              className={`text-[13px] lg:text-[16px] border-b-[1px] border-b-transparent ${
                navbarSolid ? "hover:border-b-black" : "hover:border-b-white"
              } transition-all duration-300`}
            >
              <a
                href="#about"
                className={`${navbarSolid ? "text-black" : "text-white"}`}
              >
                {t("nav.about")}
              </a>
            </li>
            <li
              className={`text-[13px] lg:text-[16px] border-b-[1px] border-b-transparent ${
                navbarSolid ? "hover:border-b-black" : "hover:border-b-white"
              } transition-all duration-300`}
            >
              <a
                href="#enterprises"
                className={`${navbarSolid ? "text-black" : "text-white"}`}
              >
                {t("nav.enterprises")}
              </a>
            </li>
            <li className="">
              <a href="#">
                <img
                  className="object-contain w-[200px]"
                  src={navbarSolid ? logoDark : logo}
                  alt=""
                />
              </a>
            </li>
            <li
              className={`text-[13px] lg:text-[16px] border-b-[1px] border-b-transparent ${
                navbarSolid ? "hover:border-b-black" : "hover:border-b-white"
              } transition-all duration-300`}
            >
              <a
                href="#services"
                className={`${navbarSolid ? "text-black" : "text-white"}`}
              >
                {t("nav.adv")}
              </a>
            </li>
            <li
              className={`text-[13px] lg:text-[16px] border-b-[1px] border-b-transparent ${
                navbarSolid ? "hover:border-b-black" : "hover:border-b-white"
              } transition-all duration-300`}
            >
              <a
                href="#news"
                className={`${navbarSolid ? "text-black" : "text-white"}`}
              >
                {t("nav.news")}
              </a>
            </li>
            <li
              className={`text-[13px] lg:text-[16px] border-b-[1px] border-b-transparent`}
            >
			<button
                onClick={openModal}
                className="buton"
                style={{backgroundColor: "#01a5bb"}} 
            >
                {t("nav.comm")}
              </button>
            </li>
            <li className="relative group cursor-pointer">
              <p
                className={`text-[13px] lg:text-[16px] uppercase ${
                  navbarSolid ? "text-black" : "text-white"
                }`}
              >
				
                {langCode}
              </p>
              <div className="flex-col gap-1 bg-black overflow-hidden text-white rounded-xl w-[55px] absolute transition-all duration-300 transform scale-0 top-full left-1/2 -translate-x-1/2 opacity-0 group-hover:scale-100 group-hover:opacity-100 group-hover:flex">
                <button
                  onClick={(e) => changeLang("en")}
                  className="hover:bg-white pt-2 hover:text-black w-full"
                ></button>
                <button
                  onClick={(e) => changeLang("ru")}
                  className="hover:bg-white hover:text-black w-full"
                >
                  RU
                </button>
                <button
                  onClick={(e) => changeLang("uz")}
                  className="hover:bg-white pb-2 hover:text-black w-full"
                >
                  UZ
                </button>
              </div>
            </li>
          </ul>
          <ul className="flex md:hidden items-center justify-between w-full">
            <li>
              <button
                onClick={(e) => setOpen(true)}
                className="text-white rounded-full p-3 text-lg"
                style={{backgroundColor: "#01a5bb"}} 
              >
                <GiHamburgerMenu />
              </button>
            </li>
            <li>
              <a href="#">
                <img className="object-contain w-[110px]" src={logo} alt="" />
              </a>
            </li>
            <li>
              <button
			  style={{backgroundColor: "#01a5bb"}}  
			  className="text-white bg-secondary rounded-full p-3 text-lg">
                <a href="tel:+998950003080">
                  <FaPhoneFlip />
                </a>
              </button>
            </li>
          </ul>
          <div
            className={`h-full md:hidden fixed left-0 top-0 bg-primary w-[290px] pt-4 px-4 transition-transform duration-500 ${
              !open ? "translate-x-[-110%]" : "translate-x-[0%]"
            }`}
          >
            <div className="w-full flex justify-end">
              <button
                onClick={(e) => setOpen(false)}
                className=" text-main font-extrabold rounded-full p-2 text-lg"
              >
                <IoClose />
              </button>
            </div>
            <ul className=" flex flex-col gap-4">
              <li>
                <a href="#info">{t("nav.info")}</a>
              </li>
              <li>
                <a href="#about">{t("nav.about")}</a>
              </li>
              <li>
                <a href="#enterprises">{t("nav.enterprises")}</a>
              </li>
              <li>
                <a href="#services">{t("nav.adv")}</a>
              </li>
              <li>
                <a href="#news">{t("nav.news")}</a>
              </li>
              <li className="">
                <div className="flex justify-start gap-3">
                  {/* <button
                    onClick={(e) => changeLang("en")}
                    className="hover:bg-white hover:text-black font-bold"
                  >
                    EN
                  </button> */}
                  <button
                    onClick={(e) => changeLang("ru")}
                    className="hover:bg-white hover:text-black font-bold"
                  >
                    RU
                  </button>
                  <button
                    onClick={(e) => changeLang("uz")}
                    className="hover:bg-white hover:text-black font-bold"
                  >
                    UZ
                  </button>
                </div>
              </li>
            </ul>
          </div>
		  {isModalOpen && <ContactModal closeModal={closeModal} />} 
        </div>
      </Container>
    </nav>
  );
};

export default Nav;
