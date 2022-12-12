import React from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import STYLES from "../../styles/Home.module.scss";

const IMG_FILE_ROOT = `${process.env.IMG_BASE_URL}/home/`;

export const ReadMoreSection = () => {

  return (
    <section className={`${STYLES.readMoreSection} my-5 mx-2`} >
      <MDBContainer> 
        <MDBRow center>
          <MDBCol md="7" sm="12" lg="6">
            <div className={STYLES.imgCont}>
              <img src={`${IMG_FILE_ROOT}why-choose.jpg`} />
            </div>
          </MDBCol>
          <MDBCol md="5" sm="12" lg="6">
            <div className={`${STYLES.textCont} my-3 p-4`}>
              <p className={`${STYLES.title} my-2`}>WHY CHOOSE</p>
              <p className={`${STYLES.subTitle} my-2`}>The Log Connection</p>
              <p className={`${STYLES.content} text-justify`}>
                Fulfilling our client's dreams and exceeding their expectations has always been our main priority. This inspires our log home designers to produce unique log homes that last for generations while motivating our craftsmen to be precise and meticulous with even the smallest of details. Sure, we have over 30 years in the log home industry but our passion and desire are still as young and eager as they were in year one. We love this stuff!
              </p>
            </div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>)
}

