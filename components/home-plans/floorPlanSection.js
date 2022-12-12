import React from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import STYLES from "../../styles/home-plans/FloorPlan.module.scss";

export const FloorPlanSection = (props) => {
  return (
    <MDBContainer fluid>
      <div className={STYLES.floorPlan}>
        <MDBRow center>
          {props.floorPlans.map((img, index) => (
            <MDBCol md="5" sm="12" lg="6" key={index}>
              <div className={STYLES.imgCont}>
                <img src={img} />
              </div>
            </MDBCol>
          ))}
        </MDBRow>
      </div>
    </MDBContainer>
  );
};

export default FloorPlanSection;
