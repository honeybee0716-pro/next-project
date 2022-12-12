import React, { useState, useEffect } from "react";
import STYLES from "../../styles/modules/HomePlanNav.module.scss";
import {
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBIcon,
} from "mdbreact";
import Zoom from "react-reveal/Zoom";
import IMG_MG from "../../assets/images/common/magnifying-glass.png";
import { searchHomePlan } from "../../common/services/home-plans";
import { useRouter } from "next/router";
import ANIMATION from "../../styles/Animation.module.scss";

export const SearchHomePlan = (props) => {
  const router = useRouter();
  const [state, setState] = useState({ modal: false });
  const [params, setParams] = useState({
    isPB: true,
    isSL: true,
    isTF: true,
    sfMin: 0,
    sfMax: 0,
    width: 0,
    depth: 0,
    bedsMin: 0,
    bedsMax: 0,
    bathsMin: 0,
    bathsMax: 0,
  });

  const toggle = (e) => {
    setState({
      modal: !state.modal,
    });
  };

  const closeModal = (e) => {
    e.preventDefault();
    setState({
      modal: false,
    });
  };

  const handleInput = (e) => {
    const target = e.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    setParams((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    searchHomePlan(params)
      .then((res) => {
        sessionStorage.setItem("hp_search_result", JSON.stringify(res));
        router.push("/home-plans/search-results/");

        if (router.pathname === "/home-plans/search-results") {
          router.reload(window.location.pathname);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <section className={STYLES.searchModal}>
      <Zoom>
        <div className={`${STYLES.thumbCont} ${ANIMATION.shakeable}`}>
          <img
            onClick={toggle}
            src={IMG_MG}
            alt={"search a home plan"}
            title={"Search a Home Plan"}
            className={`${ANIMATION.shakeable}`}
          />
        </div>
      </Zoom>
      <MDBModal isOpen={state.modal} toggle={toggle} size="md">
        <MDBModalHeader toggle={toggle}>
          <strong className="text-center">Search Our Designs</strong>
        </MDBModalHeader>
        <MDBModalBody>
          <div className={`mb-1`}>
            Search by choosing one or more building styles, floor area, number
            of bedrooms or bathrooms. <br /> (Leave any blank that you don't
            care about).
          </div>
          <MDBContainer className="my-2">
            <form onSubmit={handleSearch} autoComplete="off">
              <div className={`mt-2 ${STYLES.label}`}>Building Style:</div>
              <div>
                <input
                  type="checkbox"
                  id="isPB"
                  name="isPB"
                  checked={params.isPB === true}
                  onChange={handleInput}
                />
                <label htmlFor="isPB">Post and Beam Round Log</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="isSL"
                  name="isSL"
                  checked={params.isSL === true}
                  onChange={handleInput}
                />
                <label htmlFor="isSL">Stacked Log Walls</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="isTF"
                  name="isTF"
                  checked={params.isTF === true}
                  onChange={handleInput}
                />
                <label htmlFor="isTF">Timber Frame</label>
              </div>
              <div className={`my-2 ${STYLES.label}`}>
                Square Footage: (sq. ft.)
              </div>
              <MDBRow>
                <MDBCol md="1">
                  <label htmlFor="sfMin">Min.</label>
                </MDBCol>
                <MDBCol md="5">
                  <input
                    type="text"
                    id="sfMin"
                    name="sfMin"
                    value={params.sfMin}
                    onChange={handleInput}
                    onFocus={(e) => (e.target.value = "")}
                  />
                </MDBCol>
                <MDBCol md="1">
                  <label htmlFor="sfMax">Max.</label>
                </MDBCol>
                <MDBCol md="5">
                  <input
                    type="text"
                    id="sfMax"
                    name="sfMax"
                    value={params.sfMax}
                    onChange={handleInput}
                    onFocus={(e) => (e.target.value = "")}
                  />
                </MDBCol>
              </MDBRow>

              <div className={`my-2 ${STYLES.label}`}>
                Maximum Width/Depth: (feet)
              </div>
              <MDBRow>
                <MDBCol md="1">
                  <label htmlFor="width">Width</label>
                </MDBCol>
                <MDBCol md="5">
                  <input
                    type="text"
                    id="width"
                    name="width"
                    value={params.width}
                    onChange={handleInput}
                    onFocus={(e) => (e.target.value = "")}
                  />
                </MDBCol>
                <MDBCol md="1">
                  <label htmlFor="depth">Depth</label>
                </MDBCol>
                <MDBCol md="5">
                  <input
                    type="text"
                    id="depth"
                    name="depth"
                    value={params.depth}
                    onChange={handleInput}
                    onFocus={(e) => (e.target.value = "")}
                  />
                </MDBCol>
              </MDBRow>

              <div className={`my-2 ${STYLES.label}`}>Number of Bedrooms:</div>
              <MDBRow>
                <MDBCol md="1">
                  <label htmlFor="bedsMin">Min.</label>
                </MDBCol>
                <MDBCol md="5">
                  <input
                    type="text"
                    id="bedsMin"
                    name="bedsMin"
                    value={params.bedsMin}
                    onChange={handleInput}
                    onFocus={(e) => (e.target.value = "")}
                  />
                </MDBCol>
                <MDBCol md="1">
                  <label htmlFor="bedsMax">Max.</label>
                </MDBCol>
                <MDBCol md="5">
                  <input
                    type="text"
                    id="bedsMax"
                    name="bedsMax"
                    value={params.bedsMax}
                    onChange={handleInput}
                    onFocus={(e) => (e.target.value = "")}
                  />
                </MDBCol>
              </MDBRow>

              <div className={`my-2 ${STYLES.label}`}>Number of Bathrooms:</div>
              <MDBRow>
                <MDBCol md="1">
                  <label htmlFor="bathsMin">Min.</label>
                </MDBCol>
                <MDBCol md="5">
                  <input
                    type="text"
                    id="bathsMin"
                    name="bathsMin"
                    value={params.bathsMin}
                    onChange={handleInput}
                    onFocus={(e) => (e.target.value = "")}
                  />
                </MDBCol>
                <MDBCol md="1">
                  <label htmlFor="bathMax">Max.</label>
                </MDBCol>
                <MDBCol md="5">
                  <input
                    type="text"
                    id="bathsMax"
                    name="bathsMax"
                    value={params.bathsMax}
                    onChange={handleInput}
                    onFocus={(e) => (e.target.value = "")}
                  />
                </MDBCol>
              </MDBRow>

              <MDBRow className="my-2" center>
                <MDBCol md="6">
                  <div className="text-center">
                    <MDBBtn
                      type="submit"
                      size="medium"
                      className={`${STYLES.btn} ${ANIMATION.shakeable}`}
                    >
                      <MDBIcon
                        icon="search"
                        alt={"Search Home Plans"}
                        title={"Search Home Plans"}
                      ></MDBIcon>{" "}
                      Search Now
                    </MDBBtn>
                  </div>
                </MDBCol>
                <MDBCol md="6">
                  <div className="text-center">
                    <MDBBtn
                      onClick={closeModal}
                      size="medium"
                      className={`${STYLES.btn} ${ANIMATION.shakeable}`}
                    >
                      <MDBIcon
                        icon="times-circle"
                        alt={"Cancel"}
                        title={"Cancel"}
                      ></MDBIcon>{" "}
                      Cancel
                    </MDBBtn>
                  </div>
                </MDBCol>
              </MDBRow>
            </form>
          </MDBContainer>
        </MDBModalBody>
      </MDBModal>
    </section>
  );
};
