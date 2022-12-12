import { MDBContainer, MDBRow, MDBCol, MDBBtn } from "mdbreact";
import STYLES from "../../styles/projects/ProjectsDetails.module.scss";
import React, { useState } from "react";
import Link from "next/link";

export const PlansDisplaySection = (props) => {
  let plans = [];

  if (props && props.data) {
    plans = props.data;
  } else {
    return <h3>Missing Floor Plan</h3>;
  }

  return (
    <section className={`${STYLES.plansSection} my-3 my-md-5 mx-2`}>
      <MDBContainer>
        {/* <MDBRow>
          <Link href={`${props.hrefPrev}`} scroll={true}>
            <a href={`${props.hrefPrev}`}>
              <MDBBtn className={`${STYLES.prev}`}>
                BacK to our Project Gallery
              </MDBBtn>
            </a>
          </Link>
        </MDBRow> */}
        <MDBRow center>
          <MDBCol></MDBCol>
          {plans.map((img, index) => (
            <MDBCol md="12" sm="12" key={index}>
              <div className={`${STYLES.imgPlansSection}`}>
                <img src={img} />
              </div>
            </MDBCol>
          ))}
          <MDBCol md="2" sm="0"></MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
};
