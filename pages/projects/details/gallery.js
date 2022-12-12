import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { BannerSection } from "../../../components/common/banner";
import { SubNavbar } from "../../../components/common/subNavbar";
import S_STYLES from "../../../styles/modules/SubNavbar.module.scss";

import {
  PROJECTS_DETAILS_PATH,
  PROJECTS_DETAILS_CONST,
} from "../../../common/constants/projects";
import { ProjectGallerySection } from "../../../components/projects/gallerySection";
import { ProjectsCarouselSection } from "../../../components/projects/projectsCarousel";
import { NavigatorSection } from "../../../components/common/navigator";
import { ScrollIntoView } from "../../../components/common/scrollIntoView";

const IMG_BANNER_FILE_ROOT = `${process.env.IMG_BASE_URL}/projects/_banner/`;

const ProjectImageGalleryPage = () => {
  const router = useRouter();

  let projectCode = router.query.project;

  const PROJECTS_DETAILS_NAVBAR = [
    {
      title: PROJECTS_DETAILS_CONST.FLOOR_PLAN_HEADER_LABEL,
      href: `${PROJECTS_DETAILS_PATH.FLOOR_PLAN}?project=${projectCode}`,
    },
    {
      title: PROJECTS_DETAILS_CONST.ELEVATION_HEADER_LABEL,
      href: `${PROJECTS_DETAILS_PATH.ELEVATION}?project=${projectCode}`,
    },
    {
      title: PROJECTS_DETAILS_CONST.GALLERY_HEADER_LABEL,
      href: `${PROJECTS_DETAILS_PATH.GALLERY}?project=${projectCode}`,
    },
  ];

  return (
    <>
      <BannerSection img={`${IMG_BANNER_FILE_ROOT}project_banner_1.jpg`} />
      <ScrollIntoView mode={"default"} />

      <SubNavbar
        navBarItems={PROJECTS_DETAILS_NAVBAR}
        header={projectCode}
        scrollingNav={true}
      />
      <NavigatorSection
        key={true}
        bgColor="white"
        hrefPrev={`/projects/current/`}
        prevLabel={`Back to Our Projects`}
      ></NavigatorSection>
      <ProjectGallerySection />
      {/* <ProjectsCarouselSection filter={'past'}/> */}
    </>
  );
};

export default ProjectImageGalleryPage;
