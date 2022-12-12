import React, { useState, useEffect } from "react";
import { BannerSection } from '../../components/common/banner';
import { SubNavbar } from '../../components/common/subNavbar';
import { TLC_NAVBAR } from '../../common/constants/tlc';
import TLC_STYLES from '../../styles/tlc/TLC.module.scss';
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";

const IMG_BANNER_FILE_ROOT = `${process.env.IMG_BASE_URL}/tlc-monthly/banner/`;
const IMG_TLC_FILE_ROOT = `${process.env.IMG_BASE_URL}/tlc-monthly/awards/images/`;

const CABINS_AWARDS = [
  {
    label: "Saginaw: Best Master Bathroom",
    subLabel: "Honourable Mention",
    imageUrl: `${IMG_TLC_FILE_ROOT}CBL-2012awards-Saginaw.jpg`
  },
  {
    label: "Fairmont: Best Master Bedroom",
    subLabel: "Honourable Mention",
    imageUrl: `${IMG_TLC_FILE_ROOT}CBL-2012awards-Fairmont.jpg`
  },
  {
    label: "Pinecrest: Wins Best Master Bedroom",
    subLabel: "",
    imageUrl: `${IMG_TLC_FILE_ROOT}CBL-2011Design Award-Pinecrest.jpg`
  },
  {
    label: "Blue Ridge: Best Floor Plan 2500 to 4000 Sq. Ft. Honourable Mention",
    subLabel: "Honourable Mention",
    imageUrl: `${IMG_TLC_FILE_ROOT}CBL-2011Design Award-Blue_Ridge.jpg`
  }
]

const LIVING_FLOOR_AWARDS = [
  {
    label: "The Blue Ridge is Editor's Favorite",
    imageUrl: `${IMG_TLC_FILE_ROOT}LHLEditorsPick-Blue_Ridge-m.jpg`
  },
  {
    label: "Algonquin: Winner, Best Floor Plan Under 2,500 sq ft.",
    imageUrl: `${IMG_TLC_FILE_ROOT}LHL-2007-04-contest.jpg`
  },
  {
    label: "The Linden: Editor's Choice",
    imageUrl: `${IMG_TLC_FILE_ROOT}LHD-2006-10-ad.jpg`
  },
  {
    label: "The Astoria: Editor's Choice",
    imageUrl: `${IMG_TLC_FILE_ROOT}LHL-2005-04-ad.jpg`
  },

]

const DesignAwardsPage = () => {

  return (
    <>
      <BannerSection img={`${IMG_BANNER_FILE_ROOT}tlc_banner_1.jpg`} />
      {/* <SubNavbar navBarItems={TLC_NAVBAR} header={"Our Log Home Design Awards"} /> */}
      <SubNavbar navBarItems={TLC_NAVBAR} header={""} />
      <section className={TLC_STYLES.designAwards}>
        <MDBContainer size="sm">
          <div className="pt-5">
            <p className={TLC_STYLES.header}>AWARD WINNING LOG HOME DESIGNS</p>
          </div>
          <div className="mt-5 mb-3">
            <p className={`${TLC_STYLES.subHeader} ${TLC_STYLES.borderBtm}`}>COUNTRIES BEST LOG CABINS DESIGN AWARDS</p>
          </div>
          <MDBRow center>
            {CABINS_AWARDS.map((t, i) => (
                <MDBCol key={i}>
                  <div className={TLC_STYLES.thumbnail}>
                    <img src={t.imageUrl} />
                    <p className="mt-2">{t.label}</p>
                  </div>
                </MDBCol>
              ))}
          </MDBRow>
          <div className="mt-5 mb-3">
            <p className={`${TLC_STYLES.subHeader} ${TLC_STYLES.borderBtm}`}>LOG HOME LIVING FLOOR PLAN DESIGN AWARDS</p>
          </div>
          <MDBRow center>
            {LIVING_FLOOR_AWARDS.map((t, i) => (
                <MDBCol key={i} >
                  <div className={TLC_STYLES.thumbnail}>
                    <img src={t.imageUrl} />
                    <p className="mt-2">{t.label}</p>
                  </div>
                </MDBCol>
              ))}
          </MDBRow>
          
        </MDBContainer>
      </section>
    </>
  );
}

export default DesignAwardsPage;
