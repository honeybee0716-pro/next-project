import React, { useState, useEffect } from "react";
import { getProjectLists } from "../../common/services/projects";
import P_STYLES from "../../styles/projects/Projects.module.scss";
import { MDBBtn, MDBContainer } from "mdbreact";
import Carousel from "react-grid-carousel";
import { useRouter } from "next/router";
import {
  ProjectCarouselNextBtn,
  ProjectCarouselPrevBtn,
} from "../../components/common/buttons";
import { CommonTitle1 } from "../../components/common/labels";

export const ProjectsCarouselSection = (props) => {
  const router = useRouter();

  const [projectList, setProjectList] = useState([]);

  useEffect(() => {
    getProjectLists(props.filter)
      .then((data) => {
        setProjectList(data);
      })
      .catch((err) => {
        return <h2>Error</h2>;
      });
  }, []);

  const goToPlan = (projectCode) => {
    router.push({
      pathname: "/projects/details/floor-plans",
      query: { project: projectCode },
    });
  };

  return (
    <section className={P_STYLES.projectCarousel}>
      <MDBContainer>
        <CommonTitle1 title={"Other Past Projects"} />
        <Carousel
          cols={4}
          rows={1}
          gap="1%"
          // autoplay={10000}
          loop
          arrowLeft={<ProjectCarouselPrevBtn />}
          arrowRight={<ProjectCarouselNextBtn />}
          responsiveLayout={[
            {
              breakpoint: 767,
              cols: 1,
              rows: 1,
              gap: 10,
            },
          ]}
          mobileBreakpoint={320}
        >
          {projectList.map((p, i) => (
            <Carousel.Item key={i} className={P_STYLES.thumbnailCont}>
              <div
                className={P_STYLES.projectCards}
                onClick={() => goToPlan(p.ProjectCode)}
              >
                {/* <img src={p.Thumbnail} alt={p.DisplayName} /> */}
                <span className={P_STYLES.redirectBtnCont}>
                  <MDBBtn
                    size="md"
                    className={P_STYLES.redirectBtn}
                    onClick={() => goToPlan(p.ProjectCode)}
                  >
                    View Plans
                  </MDBBtn>
                </span>
                <div className={P_STYLES.label}>{p.DisplayName}</div>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </MDBContainer>
    </section>
  );
};
