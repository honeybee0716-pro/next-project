import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { BannerSection } from "../../../components/common/banner";
import { SubNavbar } from "../../../components/common/subNavbar";
import {
  PROJECTS_DETAILS_PATH,
  PROJECTS_DETAILS_CONST,
} from "../../../common/constants/projects";
import { PlansDisplaySection } from "../../../components/projects/plansDisplay";
import { getProjectDetails } from "../../../common/services/projects";
import { ProjectsCarouselSection } from "../../../components/projects/projectsCarousel";
import S_STYLES from "../../../styles/modules/SubNavbar.module.scss";
import { NavigatorSection } from "../../../components/common/navigator";
import { ScrollIntoView } from "../../../components/common/scrollIntoView";

const IMG_BANNER_FILE_ROOT = `${process.env.IMG_BASE_URL}/projects/_banner/`;

const organizePlanData = (data) => {
  let result = [];
  if (Array.isArray(data)) {
    for (let i = 0; i < data.length; i++) {
      // result.push(`${IMG_FILE_ROOT}${data[i].file}`);
      result.push(data[i].imageUrl);
    }
  }
  return result;
};

const ProjectExteriorElevationPage = () => {
  const router = useRouter();
  let projectCode = router.query.project;

  const [display, setDisplay] = useState([]);

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

  useEffect(() => {
    getProjectDetails(projectCode)
      .then((data) => {
        let imgArr = organizePlanData(data.elevations.images);
        setDisplay(imgArr);
      })
      .catch((err) => {
        return <h2>ERROR...</h2>;
      });
  }, [projectCode]);

  return (
    <>
      <BannerSection img={`${IMG_BANNER_FILE_ROOT}project_banner_1.jpg`} />
      <ScrollIntoView mode={"default"} />

      <SubNavbar
        navBarItems={PROJECTS_DETAILS_NAVBAR}
        header={router.query.project}
        scrollingNav={true}
      />
      <NavigatorSection
        key={true}
        bgColor="white"
        hrefPrev={`/projects/current/`}
        prevLabel={`Back to Our Projects`}
      ></NavigatorSection>
      <PlansDisplaySection data={display} />
      {/* <ProjectsCarouselSection filter={"past"} /> */}
    </>
  );
};

export default ProjectExteriorElevationPage;
