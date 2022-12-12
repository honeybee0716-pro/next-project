import React, { useState, useEffect } from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBNavbar,
  MDBNavbarBrand,
} from "mdbreact";
import STYLES from "../../styles/projects/HomeOurProjects.module.scss";
import { getProjectLists } from "../../common/services/projects";
import { useRouter } from "next/router";

export const OurProjectsSection = () => {
  const router = useRouter();
  const [projectDisplayArr, setProjectDisplayArr] = useState([]);
  const [projectArr, setProjectArr] = useState([]);
  const [filter, setFilter] = useState({
    isCurrent: true,
    isPast: false,
  });

  useEffect(() => {
    getProjectLists()
      .then((data) => {
        setProjectArr(data);

        let past = data.filter((x) => {
          return x.Status === "past";
        });

        let current = data.filter((x) => {
          return x.Status === "current";
        });

        if (past && past.length > 1) {
          setProjectDisplayArr(past.slice(0, 3));
          setFilter({
            isCurrent: false,
            isPast: true,
          });
        } else if (current && current.length > 1) {
          setProjectDisplayArr(current.slice(0, 3));
          setFilter({
            isCurrent: true,
            isPast: false,
          });
        }
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

  const goToProjects = () => {
    router.push({ pathname: "/projects/current" });
  };

  const onClickFilter = (filter) => {
    if (filter === "current") {
      setFilter({
        isCurrent: true,
        isPast: false,
      });
    } else if (filter === "past") {
      setFilter({
        isCurrent: false,
        isPast: true,
      });
    }

    let temp = projectArr.filter((x) => {
      return x.Status === filter;
    });
    setProjectDisplayArr(temp.slice(0, 3));
  };

  return (
    <section className="mt-5">
      <MDBNavbar expand="md" className={STYLES.navbarCont}>
        <MDBNavbarBrand>
          <span className={`${STYLES.title} ml-4 text-white`}>
            Our Projects
          </span>
        </MDBNavbarBrand>
      </MDBNavbar>
      <MDBContainer>
        <MDBRow>
          <MDBCol size="12" className={`${STYLES.tab} mt-3`}>
            <a
              className={`${STYLES.tabTitle} ml-md-4 ${
                filter.isCurrent === true ? STYLES.active : STYLES.notActive
              }`}
              onClick={() => onClickFilter("current")}
            >
              Current Projects
            </a>
            <a
              className={`${STYLES.tabTitle} ml-md-5 ml-4 ${
                filter.isPast === true ? STYLES.active : STYLES.notActive
              }`}
              onClick={() => onClickFilter("past")}
            >
              Past Projects
            </a>
          </MDBCol>
        </MDBRow>
        <MDBRow center className="mb-3 mt-4 text-center">
          {projectDisplayArr.map((p, i) => (
            <MDBCol
              md="4"
              sm="12"
              key={i}
              className="mx-2 mx-md-0 mb-3 px-md-0"
            >
              <div
                className={`${STYLES.projectCards} mx-4`}
                onClick={() => goToPlan(p.ProjectCode)}
              >
                <img src={p.Thumbnail} />
                {/* <span className={STYLES.redirectBtnCont}>
                  <MDBBtn
                    size="md"
                    className={STYLES.redirectBtn}
                    onClick={() => goToPlan(p.ProjectCode)}
                  >
                    View Plans
                  </MDBBtn>
                </span> */}
                <div className={STYLES.label}>{p.DisplayName}</div>
              </div>
            </MDBCol>
          ))}
        </MDBRow>
        <MDBRow center>
          <MDBBtn
            size="lg"
            className={STYLES.redirectBtn}
            onClick={() => goToProjects()}
          >
            VIEW ALL
          </MDBBtn>
        </MDBRow>
      </MDBContainer>
    </section>
  );
};
