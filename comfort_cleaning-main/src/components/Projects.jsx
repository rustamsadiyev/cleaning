import React, { useEffect } from "react";
import Container from "../utils/Utils";
import ProjectsCard from "./ProjectsCard";
import magic from "../assets/m1.jpeg";
import gardens from "../assets/m2.jpg";
import fonon from "../assets/m3.webp";
import invento from "../assets/m4.jpg";
import school from "../assets/m5.jpeg";
import boulevard from "../assets/m6.jpeg";
import { useTranslation } from "react-i18next";
import initializeAOS from "../aos/aosSetup";

const Projects = () => {
  const { t } = useTranslation();

  useEffect(() => {
    initializeAOS();
  }, []);

  return (
    <div id="projects" className="mt-12 overflow-hidden">
      <Container>
        <div>
          {/* Project Title */}
          <h2
            data-aos="fade-right"
            data-aos-delay="200"
            className="text-2xl sm:text-3xl font-semibold mb-8"
          >
            {t("projects.h2")}
          </h2>
          
          {/* Projects Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-[320px,320px,320px] gap-7 md:gap-6 lg:gap-12">
            <ProjectsCard
              ind={1}
              img={magic}
              title={t("maslahat.m1")}
              desc={t("projects.p1")}
            />
            <ProjectsCard
              ind={2}
              img={gardens}
              title={t("maslahat.m2")}
              desc={t("projects.p2")}
            />
            <ProjectsCard
              ind={3}
              img={fonon}
              title={t("maslahat.m3")}
              desc={t("projects.p3")}	
            />
            <ProjectsCard
              ind={4}
              img={invento}
              title={t("maslahat.m4")}
              desc={t("projects.p4")}
            />
            <ProjectsCard
              ind={5}
              img={school}
              title={t("maslahat.m5")}
              desc={t("projects.p5")}
            />
            <ProjectsCard
              ind={6}
              img={boulevard}
              title={t("maslahat.m6")}
              desc={t("projects.p6")}
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Projects;
