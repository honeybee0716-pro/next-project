import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon } from "mdbreact";
import Link from "next/link";
import IMG_about1 from "../../assets/images/home/about_img_1.png";
import IMG_about2 from "../../assets/images/home/about_img_2.png";
import STYLES from "../../styles/Home.module.scss";

export const AboutSection = () => {
  return (
    <section className={`${STYLES.aboutSection} my-4 mx-md-6  mx-sm-4 mx-2`}>
      <MDBContainer>
        <MDBRow center>
          <MDBCol md="6" sm="12" lg="6" className="px-0">
            <div className={STYLES.imgCont}>
              <div className={STYLES.img1}>
                <img src={IMG_about1} />
              </div>
              <div className={STYLES.img2}>
                <img src={IMG_about2} />
              </div>
            </div>
          </MDBCol>
          <MDBCol md="6" sm="12" lg="6">
            <div className={`${STYLES.title}`}>EMBRACE YOUR PASSION</div>
            <p className={`${STYLES.content} text-justify`}>
              {" "}
              Our skilled craftsmen are passionate about producing the highest
              quality hand crafted log work. With over 30 years of design and
              construction experience you can place your trust in the
              award-winning crew at The Log Connection for your new home. More
              than an industry leading log home producer, our visualization team
              will bring to life your round log post and beam, stacked log home,
              or timber frame package before you build.
            </p>
            <Link href="/home-plans">
              <a href="/home-plans">
                <div>
                  <MDBBtn
                    size="lg"
                    className={`${STYLES.yellowRoundeBtn} mt-3`}
                  >
                    <MDBIcon icon="clone" className="mr-2"></MDBIcon> Log Home
                    Plans
                  </MDBBtn>
                </div>
              </a>
            </Link>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
};
