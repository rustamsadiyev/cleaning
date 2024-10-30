import Container from "../utils/Utils";
import CountUp from "react-countup";
import ratings from "../assets/ratingse.png";
import ScrollTrigger from "react-scroll-trigger";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useTranslation } from "react-i18next";

const Ratings = () => {
  const [counterOn, setCounterOn] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    AOS.init({
      // Global settings:
      disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
      startEvent: "DOMContentLoaded", // name of the event dispatched on the document, that AOS should initialize on
      initClassName: "aos-init", // class applied after initialization
      animatedClassName: "aos-animate", // class applied on animation
      useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
      disableMutationObserver: false, // disables automatic mutations' detections (advanced)
      debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
      throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

      // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
      offset: 150, // offset (in px) from the original trigger point
      delay: 0, // values from 0 to 3000, with step 50ms
      duration: 400, // values from 0 to 3000, with step 50ms
      easing: "ease-out", // default easing for AOS animations
      once: false, // whether animation should happen only once - while scrolling down
      mirror: false, // whether elements should animate out while scrolling past them
      anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
    });
  }, []);

  return (
    <div
      id="about"
      style={{
        backgroundImage: `url(${ratings})`,
        backgroundSize: "100% 120%",
        backgroundPosition: "center",
      }}
      className="bg-cover bg-center pt-20 pb-32"
    >
      <Container>
        <ScrollTrigger
          onEnter={() => setCounterOn(true)}
          onExit={() => setCounterOn(false)}
        >
          <div className="overflow-x-hidden">
            <h2
              data-aos="fade-left"
              data-aos-delay="500"
              className="text-white text-2xl font-bold mb-16"
            >
              {t("ratings.h2")}
            </h2>
            <div
              data-aos="zoom-in"
              data-aos-duratioin="1200"
              className="flex items-center gap-16 flex-wrap"
            >
              <div>
                <strong className="text-white text-3xl sm:text-4xl md:text-5xl mb-3 block">
                  {counterOn && (
                    <CountUp
                      start={0}
                      end={998950003080}
                      duration={4}
                      formattingFn={(num) => {
                        const numStr = num.toString().padStart(12, "0"); // 12 ta raqam bo'lishini ta'minlaydi
                        return `${numStr.slice(0, 3)}-${numStr.slice(
                          3,
                          5
                        )}-${numStr.slice(5, 8)}-${numStr.slice(
                          8,
                          10
                        )}-${numStr.slice(10, 12)}`;
                      }}
                    />
                  )}
                </strong>
                <strong className="text-white text-3xl sm:text-4xl md:text-5xl mb-3 block">
                  {counterOn && (
                    <CountUp
                      start={0}
                      end={998990603080}
                      duration={4}
                      formattingFn={(num) => {
                        const numStr = num.toString().padStart(12, "0"); // 12 ta raqam bo'lishini ta'minlaydi
                        return `${numStr.slice(0, 3)}-${numStr.slice(
                          3,
                          5
                        )}-${numStr.slice(5, 8)}-${numStr.slice(
                          8,
                          10
                        )}-${numStr.slice(10, 12)}`;
                      }}
                    />
                  )}
                </strong>
                <p className="text-white text-sm sm:text-lg md:text-xl">
                  {t("ratings.p1")}
                </p>
              </div>
            </div>
          </div>
        </ScrollTrigger>
      </Container>
    </div>
  );
};

export default Ratings;
