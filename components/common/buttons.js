import React from "react";
import Link from "next/link";
import { MDBBtn, MDBIcon } from "mdbreact";
import PREV_BTN_GREEN from "../../assets/images/common/prev.png";
import NEXT_BTN_GREEN from "../../assets/images/common/next.png";
import PREV_BTN from "../../assets/images/common/media-left-arrow.png";
import NEXT_BTN from "../../assets/images/common/media-right-arrow.png";
import IMG_nextArrowBg from '../../assets/images/common/next-arrow-bg.png';
import IMG_prevArrowBg from '../../assets/images/common/prev-arrow-bg.png'
import STYLES from "../../styles/CommonButton.module.scss";

export const ProjectCarouselPrevBtn = () => {
  return (
    <div className={STYLES.projectCarouseLeftBtn}>
      <img src={PREV_BTN_GREEN}/>
    </div>
  )
}

export const ProjectCarouselNextBtn = () => {
  return (
    <div className={STYLES.projectCarouselRightBtn}>
      <img src={NEXT_BTN_GREEN}/>
    </div>
  )
}

export const CarouselPrevBtn = () => {
  return (
    <div className={STYLES.carouseLeftBtn}>
      <img src={PREV_BTN}/>
    </div>
  )
}

export const CarouselNextBtn = () => {
  return (
    <div className={STYLES.carouselRightBtn}>
      <img src={NEXT_BTN}/>
    </div>
  )
}

export const NextPageButton = (props) => {
  const arrow = {
      backgroundImage: `url(${IMG_nextArrowBg})`,
  }
  return (
      <div className={STYLES.nextBtn}>
          <div className={STYLES.nextBtnCont}>
              <span className={STYLES.label}>Next:</span>
              <Link href={props?.pageUrl}>
                  <div style={arrow} className={STYLES.arrow}>{props?.pageName}</div>
              </Link>
          </div>
      </div>
  )
}

export const PrevPageButton = (props) => {
  const arrow = {
      backgroundImage: `url(${IMG_prevArrowBg})`,
  }
  return (
      <div className={STYLES.nextBtn}>
          <div className={STYLES.nextBtnCont}>
              <span className={STYLES.label}>Next:</span>
              <Link href={props?.pageUrl}>
                  <div style={arrow} className={STYLES.arrow}>{props?.pageName}</div>
              </Link>
          </div>
      </div>
  )
}



export const RedirectButton = (props) => {
    return (
        <span className={STYLES.redirectBtnCont}>
            <Link href={props?.url}>
                <span>
                    <MDBBtn size="lg" className={STYLES.redirectBtn}>
                        <MDBIcon icon="link"></MDBIcon> {props?.label}
                    </MDBBtn>
                </span>
            </Link>
        </span>
    )
}