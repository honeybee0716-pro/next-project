import React, { Component } from "react";
import { AboutSection } from "../components/main/aboutSection";
import { ReadMoreSection } from "../components/main/readMoreSection";
import { HomeOfTheMonthSection } from "../components/main/homeOfTheMonth";
import { OurProjectsSection } from "../components/projects/ourProjectsSection";
import { BannerSection } from "../components/common/banner";
import { PlanBookSection } from "../components/main/planBookSection";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";

import { MDBCol, MDBContainer, MDBRow } from "mdbreact";
import { useState } from "react";
// const IMG_BANNER_FILE_ROOT = `${process.env.IMG_BASE_URL}/assets/splash_images/`;

const HomePage = () => {

  return (
    <>
      {/* <Fade top> */}
      <BannerSection />
      {/* </Fade> */}
      <MDBContainer fluid>
            <MDBRow center>
              <MDBCol md="1" className="px-0"></MDBCol>
              <MDBCol md="10" sm="12" lg="10" xs="12">
                <AboutSection />
                {/* </Zoom> */}
                <ReadMoreSection />
                <HomeOfTheMonthSection />
                <OurProjectsSection />
                {/* <Fade bottom> */}
                <PlanBookSection />
                {/* </Fade> */}
              </MDBCol>
              <MDBCol md="1" className="px-0"></MDBCol>
            </MDBRow>
          </MDBContainer>
    </>
  );
}

export default HomePage;
