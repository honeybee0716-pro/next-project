import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import React, { useState } from "react";
import STYLES from "../../styles/Resources.module.scss";
import C_STYLES from "../../styles/Common.module.scss";

const IMG_ROOT = `${process.env.IMG_BASE_URL}/resources/`;

const RESOURCES_DATA = [
  {
    title: `Past ILBA Member`,
    details: `In past years The Log Connection was a proud member of the International Log Builders' Association. The ILBA is a worldwide organization dedicated to furthering the craft of handcrafted log building, to the advancement of log builders, and to the promotion of the highest standards of their trade.`,
    imgUrl: `${IMG_ROOT}ILBA_logo.jpg`,
    link: `https://logassociation.org/`,
  },
  {
    title: `Downtown Penticton Association`,
    details: `The voice of downtown Penticton, bringing together residents, merchants, businesses, not-for-profit social service agences, arts and cultural groups, governments, educational institutions and other organizations.`,
    imgUrl: `${IMG_ROOT}DowntownPentictonAssoc.png`,
    link: `https://downtownpenticton.org/`,
  },
  {
    title: `BC Wood`,
    details: `BC Wood is a not-for-profit trade association that has represented British Columbia's value-added wood products industry for over 20 years.`,
    imgUrl: `${IMG_ROOT}BCWoodLogo.jpg`,
    link: `http://www.bcwood.com/`,
  },
  {
    title: `Timber Products Inspection`,
    details: `Independent, third party wood products inspection, testing, and consulting company.`,
    imgUrl: `${IMG_ROOT}TPinspection.png`,
    link: `https://www.tpinspection.com/`,
  },
];

export const ResourcesPage = () => {
  const [display, setDisplay] = useState(RESOURCES_DATA);

  return (
    <section className={STYLES.resources}>
      <MDBContainer className="pb-5">
        <h2 className="pt-5 pb-2">Resources</h2>
        <div className={C_STYLES.divider} />
        {display.map((d, i) => (
          <div className="pb-2" key={i}>
            <MDBRow center>
              <MDBCol md="3" sm="12">
                <div className={STYLES.logoCont}>
                  <a href={d.link} target="_blank">
                    <img src={d.imgUrl} />
                  </a>
                </div>
              </MDBCol>
              <MDBCol md="9" sm="12">
                <h3>{d.title}</h3>
                <p>{d.details}</p>
              </MDBCol>
            </MDBRow>
            <div className={C_STYLES.divider} />
          </div>
        ))}
      </MDBContainer>
    </section>
  );
};

export default ResourcesPage;
