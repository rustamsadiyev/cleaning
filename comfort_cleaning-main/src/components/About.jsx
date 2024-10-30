import React, { useEffect, useState } from "react";
import Container from "../utils/Utils";
import { useTranslation } from "react-i18next";
import initializeAOS from "../aos/aosSetup";
import fadbak from "../assets/news2.jpg";
import loadingGif from "../assets/logoqizill.png"; // Make sure to import your loading GIF

import atir from "../assets/atirgul.webp";
import minora from "../assets/minora.jpg";
import shax from "../assets/shax.jpg";
import ayol from "../assets/ayol.jpg";
import korest from "../assets/kores.jpg";
import kaba from "../assets/kaba.jpg";

const About = () => {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(true); // Add loading state

  useEffect(() => {
    initializeAOS();
    // Simulate a loading delay
    const timer = setTimeout(() => {
      setLoading(false); // Set loading to false after 2 seconds (or any duration)
    }, 2000);

    return () => clearTimeout(timer); // Clean up the timer
  }, []);

  const testimonials = [
    {
      id: 1,
      name: "Nigora",
      username: "@nigora_dostva",
      image: kaba,
      quote: t("fadibac.fadi1"),
    },
    {
      id: 2,
      name: "Muhlisa",
      username: "@prsens",
      image: atir,
      quote: t("fadibac.fadi2"),
    },
    {
      id: 3,
      name: "Lobar",
      username: "@hyot",
      image: minora,
      quote: t("fadibac.fadi3"),
    },
    {
      id: 4,
      name: "Barno",
      username: "@barno",
      image: shax,
      quote: t("fadibac.fadi4"),
    },
    {
      id: 5,
      name: "Bonu",
      username: "@bonu_hamidova",
      image: ayol,
      quote: t("fadibac.fadi5"),
    },
    {
      id: 6,
      name: "Samiya",
      username: "@samiya_smm",
      image: korest,
      quote: t("fadibac.fadi6"),
    },
  ];

  return (
    <section
      className="py-16 bg-cover bg-center bg-gray-50"
      style={{
        backgroundImage: `url(${fadbak})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 text-center bg-white bg-opacity-80 p-8 rounded-lg">
        <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          {t("fadibac.titel")}
        </p>
      </div>

      {/* Show loading GIF while loading */}
      {loading ? (
        <div className="flex justify-center items-center h-64">
          <img src={loadingGif} alt="Loading..." />
        </div>
      ) : (
        <div className="mt-10 grid gap-8 max-w-7xl mx-auto grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 px-4">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white p-6 shadow rounded-lg">
              <p className="text-gray-600">{`"${testimonial.quote}"`}</p>
              <div className="mt-4 flex items-center">
                <img
                  className="w-12 h-12 rounded-full"
                  src={testimonial.image}
                  alt={testimonial.name}
                />
                <div className="ml-3">
                  <p className="text-gray-900 font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.username}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default About;
