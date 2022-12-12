import React, { useState, useEffect } from "react";
import { Typeahead } from "react-bootstrap-typeahead";
import { MDBContainer, MDBCardImage, MDBRow, MDBCol } from "mdbreact";
import { useRouter } from "next/router";
import STYLES from "../../styles/home-plans/HomePlan.module.scss";
import { FloaterNav } from "../../components/home-plans/floaterNav";
import { SubNavbarHomePlan } from "../../components/common/subNavbar";
import { getHomePlan } from "../../common/services/home-plans";
import HomePlansBanner from "../../assets/images/plans-gallery-banner.jpg";
import { Sort } from "@material-ui/icons";
const IMG_ROOT = `${process.env.IMG_BASE_URL}/home-plans/_main/banner.jpg`;

export const HomePlansPage = () => {
  const router = useRouter();

  const [allHomePlans, setAllHomePlans] = useState([]);
  const [gallery, setGallery] = useState([]);
  const [showingOptions, setShowingOptions] = useState("");

  useEffect(() => {
    getHomePlan("all")
      .then((data) => {
        setAllHomePlans(data);
        setGallery(data);
      })
      .catch((err) => {});
  }, []);

  let typeahead = null;

  const filterHomePlansByName = (s) => {
    console.log("s=>>", s);
    if (s && s.name) {
      if (allHomePlans && Array.isArray(allHomePlans)) {
        const filtered = allHomePlans.filter((c) => c.name === s.name);
        setGallery(filtered);
      }
    }
    router.push({
      pathname: "/home-plans/details/floor-plans",
      query: { plan: s?.planCode, scroll: false },
    });
    typeahead.clear();
  };

  const filterHomePlanByStyle = (filter) => {
    if (filter === "All") {
      setGallery(allHomePlans);
    } else {
      const filtered = allHomePlans.filter((c) => c.Style === filter);
      setGallery(filtered);
    }
  };

  const goToPlan = (planCode) => {
    router.push({
      pathname: "/home-plans/details/floor-plans",
      query: { plan: planCode, scroll: false },
    });
  };
  if (showingOptions == "Show by Size") {
    // gallery.sort((a, b) =>
    //   a.sf > b.sf ? 1 : a.sf === b.sf ? (a.sf > b.sf ? 1 : -1) : -1
    // );
    gallery.sort(function (a, b) {
      return a.sf - b.sf;
    });
  } else if (showingOptions == "Show by Name") {
    gallery.sort(function (a, b) {
      return a.name === b.name ? 0 : a.name < b.name ? -1 : 1;
    });
  }

  console.log(showingOptions);
  return (
    <section className={`${STYLES.homePlan}`}>
      <MDBContainer fluid className="p-0">
        <div className={`${STYLES.banner}`}>
          <div className={`${STYLES.content}`}>
            <img src={`${IMG_ROOT}`} />
          </div>
          <div className={`${STYLES.overlay}`}>
            <p className={`${STYLES.titleLbl} text-center`}>
              Log and Timber Homes
            </p>
            <p className={STYLES.searchLbl}>Search a Plan:</p>
            <Typeahead
              labelKey={(option) => `${option.name} ~ ${option.sf} SQ. FT.`}
              id="searchPlan"
              options={allHomePlans}
              ref={(ref) => (typeahead = ref)}
              onChange={(selected) => {
                filterHomePlansByName(selected[0]);
              }}
            />
          </div>
        </div>
      </MDBContainer>
      <SubNavbarHomePlan filterFn={filterHomePlanByStyle} />
      <FloaterNav homePlans={allHomePlans} />
      <div className="p-0 text-center">
        <MDBRow>
          <MDBCol md="1"></MDBCol>
          <MDBCol xl="12" md="12" sm="12" xs="12">
            <MDBRow center>
              <MDBCol md="12" sm="12" xs="12">
                <div className="selectorForSorting">
                  <label htmlFor="">Sort by</label>
                  <select
                    type="text"
                    className={STYLES.selectInputBox}
                    onChange={(e) => setShowingOptions(e.target.value)}
                  >
                    <option value={""}>--Select--</option>
                    <option value="Show by Name" key="Show by Name">
                      Show by Name
                    </option>
                    <option value="Show by Size" key="Show by Size">
                      Show by Size
                    </option>
                  </select>
                </div>
              </MDBCol>
              <div className={STYLES.cardbanner}>
              {gallery.map((hp, i) => (
                <div>
                  <div className={STYLES.cards} key={i}>
                    <a onClick={() => goToPlan(hp.planCode)}>
                      <div className={`${STYLES.lblCont} text-left`}>
                        <div className={STYLES.cardLbl}>
                          <sup>The </sup>
                          {hp.name}
                          <span className={STYLES.cardLbl2}>
                            {hp.sf} SQ. FT.
                          </span>
                        </div>
                      </div>
                      <div className={`${STYLES.cardImage}`}>
                        <MDBCardImage
                          className={STYLES.img}
                          src={hp.imageUrl}
                          waves
                        />
                      </div>
                    </a>
                  </div>
                </div>
              ))}
              </div>

            </MDBRow>
          </MDBCol>
          <MDBCol md="1"></MDBCol>
        </MDBRow>
      </div>
    </section>
  );
};

export default HomePlansPage;
