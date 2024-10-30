import React, { useRef } from 'react';
import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";
import video3 from "../assets/vide3.mp4";
import video4 from "../assets/video4.mp4";
import {useTranslation} from "react-i18next";
const Forex = () => {
	const {t} = useTranslation();
  const carouselRef = useRef(null);

  const scrollLeft = () => {
    carouselRef.current.scrollBy({
      left: -carouselRef.current.offsetWidth,
      behavior: 'smooth',
    });
  };

  const scrollRight = () => {
    carouselRef.current.scrollBy({
      left: carouselRef.current.offsetWidth,
      behavior: 'smooth',
    });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-4 text-center">{t("vide.videotitel")}</h2>

      <div className="relative flex items-center justify-center">
        {/* Left arrow */}
        <button
          className="absolute left-0 z-10 p-2 bg-gray-300 rounded-full focus:outline-none"
          onClick={scrollLeft}
        >
          &#8249;
        </button>

        {/* Video carousel */}
        <div
          className="flex overflow-x-auto gap-4 no-scrollbar scroll-smooth justify-center"
          ref={carouselRef}
        >
          <div className="min-w-full md:min-w-[33.33%] lg:min-w-[25%] flex justify-center">
            <video
              className="rounded w-[90%] md:w-[375px] h-auto" // Responsive width for different devices
              controls
              muted
              autoPlay
            >
              <source src={video1} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="min-w-full md:min-w-[33.33%] lg:min-w-[25%] flex justify-center">
            <video
              className="rounded w-[90%] md:w-[375px] h-auto"
              controls
              muted
              autoPlay
            >
              <source src={video2} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="min-w-full md:min-w-[33.33%] lg:min-w-[25%] flex justify-center">
            <video
              className="rounded w-[90%] md:w-[375px] h-auto"
              controls
              muted
              autoPlay
            >
              <source src={video3} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="min-w-full md:min-w-[33.33%] lg:min-w-[25%] flex justify-center">
            <video
              className="rounded w-[90%] md:w-[375px] h-auto"
              controls
              muted
              autoPlay
            >
              <source src={video4} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
		  <div className="min-w-full md:min-w-[33.33%] lg:min-w-[25%] flex justify-center">
            <video
              className="rounded w-[90%] md:w-[375px] h-auto" // Responsive width for different devices
              controls
              muted
              autoPlay
            >
              <source src={video1} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
		

        {/* Right arrow */}
        <button
          className="absolute right-0 z-10 p-2 bg-gray-300 rounded-full focus:outline-none"
          onClick={scrollRight}
        >
          &#8250;
        </button>
      </div>
    </div>
  );
};

export default Forex;
