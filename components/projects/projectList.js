import React, { useState, useEffect } from "react";
import { getProjectLists } from "../../common/services/projects";
import P_STYLES from "../../styles/projects/Projects.module.scss";
import {
  MDBContainer,
  MDBPagination,
  MDBRow,
  MDBCol,
  MDBPageItem,
  MDBPageNav,
  MDBBtn,
  MDBIcon,
} from "mdbreact";
import { paginateArray } from "../../common/utilities";
import { useRouter } from "next/router";

export const ProjectListSection = (props) => {
  const router = useRouter();

  const [projectsArr, setProjectsArr] = useState([]);
  const [projectDisplayArr, setProjectDisplayArr] = useState([]);
  const [pages, setPages] = useState([]);
  const [projectList, setProjectList] = useState([]);
  const [activePage, setActivePage] = useState(0);

  useEffect(() => {
    console.log("projects", projectsArr);
    getProjectLists(props.filter)
      .then((data) => {
        console.log("data", data);
        let paginatedArr = paginateArray(data, 12);
        let pagesArr = Array.from({ length: paginatedArr.length }, (v, i) => i);
        setPages(pagesArr);
        setProjectList(data);
        setProjectsArr(paginatedArr);
        setProjectDisplayArr(paginatedArr[0]);
      })
      .catch((err) => {
        return <h2>Error</h2>;
      });
  }, []);

  const onPageNoClick = (pageNo) => {
    setActivePage(pageNo);
    setProjectDisplayArr(projectsArr[pageNo]);
  };

  // const onClickFirst = () => {
  //   setActivePage(0);
  //   setProjectDisplayArr(projectsArr[0]);
  // }

  // const onClickLast = () => {
  //   setActivePage(projectsArr.length - 1);
  //   setProjectDisplayArr(projectsArr[projectsArr.length - 1]);
  // }

  const onClickRight = () => {
    let nextPageNo = activePage + 1;
    setProjectDisplayArr(projectsArr[nextPageNo]);
    setActivePage(nextPageNo);
  };

  const onClickLeft = () => {
    let nextPageNo = activePage - 1;
    setProjectDisplayArr(projectsArr[nextPageNo]);
    setActivePage(nextPageNo);
  };

  const goToPlan = (projectCode) => {
    console.log(projectCode);
    router.push(
      {
        pathname: "/projects/details/floor-plans",
        query: { project: projectCode },
      },
      undefined,
      { scroll: false }
    );
  };

  if (!Array.isArray(projectsArr) || projectsArr.length === 0) {
    return <h2>NO PROJECTS FOUND...</h2>;
  }

  return (
    <>
      <section className={P_STYLES.projectPage}>
        <MDBContainer>
          <MDBRow className={P_STYLES.projectList}>
            {/* <MDBCol md="2">
              <ul className={P_STYLES.projectListCont}>
                {projectList.map((p, i) => (
                  <li key={i}>
                    <a onClick={() => goToPlan(p.ProjectCode)}>
                      {p.DisplayName}
                    </a>
                  </li>
                ))}
              </ul>
            </MDBCol> */}
            <MDBCol md="1"></MDBCol>

            <MDBCol md="9" sm="12" xs="12">
              <MDBRow center>
                {projectDisplayArr.map((p, i) => (
                  <MDBCol
                    md="6"
                    sm="12"
                    xs="12"
                    lg="3"
                    key={i}
                    className="ml-0 mr-0"
                  >
                    {/* <div className={P_STYLES.label}>{p.DisplayName}</div>

                    <div
                      className={P_STYLES.projectCards}
                      onClick={() => goToPlan(p.ProjectCode)}
                    > */}
                    {/* <img src={`${THUMBS_FILE_ROOT}${p.FileName}.${p.FileExtension}`} /> */}
                    {/* <img src={p.Thumbnail} />
                      <span className={P_STYLES.redirectBtnCont}> */}
                    {/* <MDBBtn
                          size="md"
                          className={P_STYLES.redirectBtn}
                          onClick={() => goToPlan(p.ProjectCode)}
                        >
                          View Plans
                        </MDBBtn> */}
                    {/* </span>
                    </div> */}
                    <div
                      className={P_STYLES.projectCards}
                      onClick={() => goToPlan(p.ProjectCode)}
                    >
                      <img src={p.Thumbnail} alt={p.DisplayName} />

                      <div className={P_STYLES.label}>{p.DisplayName}</div>
                    </div>
                  </MDBCol>
                ))}
              </MDBRow>
              <MDBPagination color="red">
                {/* <MDBPageItem disabled>
                <MDBPageNav className="page-link" onClick={() => onClickFirst()}> 
                  <span>First</span>
                </MDBPageNav>
              </MDBPageItem> */}
                <MDBPageItem disabled={activePage == 0}>
                  <MDBPageNav
                    className="page-link"
                    aria-label="Previous"
                    onClick={() => onClickLeft()}
                  >
                    <span aria-hidden="true">&laquo;</span>
                    <span className="sr-only">Previous</span>
                  </MDBPageNav>
                </MDBPageItem>
                {pages.map((p, i) => (
                  <MDBPageItem key={i} active={i == activePage}>
                    <MDBPageNav
                      className="page-link"
                      onClick={() => onPageNoClick(i)}
                    >
                      {i + 1} <span className="sr-only">(current)</span>
                    </MDBPageNav>
                  </MDBPageItem>
                ))}
                <MDBPageItem disabled={activePage == pages?.length - 1}>
                  <MDBPageNav
                    className="page-link"
                    onClick={() => onClickRight()}
                  >
                    &raquo;
                  </MDBPageNav>
                </MDBPageItem>
                {/* <MDBPageItem>
                <MDBPageNav className="page-link" onClick={() => onClickLast()}>
                  Last
                </MDBPageNav>
              </MDBPageItem> */}
              </MDBPagination>
            </MDBCol>
            <MDBCol md="1"></MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>
    </>
  );
};
