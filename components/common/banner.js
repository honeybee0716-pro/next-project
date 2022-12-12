import { useState, useEffect, useCallback } from "react";
import { MDBContainer } from "mdbreact";
import STYLES from "../../styles/Common.module.scss";
import { useRouter } from "next/router";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import BannerImage1 from "../../assets/banner_images/1.jpg";
import BannerImage2 from "../../assets/banner_images/2.jpg";
import BannerImage3 from "../../assets/banner_images/3.jpg";
import BannerImage4 from "../../assets/banner_images/4.jpg";
import BannerImage5 from "../../assets/banner_images/5.jpg";
import ArrowLeft from "../../assets/images/common/media-left-arrow.png";
import ArrowRight from "../../assets/images/common/media-right-arrow.png";

import { MDBCarousel, MDBCarouselItem } from "mdb-react-ui-kit";

// export const BannerSection = () => {
//   return (
//     <section>
//       <MDBCarousel showControls showIndicators dark fade dealy={3000}>
//         <MDBCarouselItem   style={{ height: '80vh', objectFit: 'cover'}}
//           className='w-100 d-block'

//           src={BannerImage1}
//           alt='...'
//         >
//         </MDBCarouselItem>
//         <MDBCarouselItem   style={{ height: '80vh', objectFit: 'cover'}}
//           className='w-100 d-block'

//           src={BannerImage2}
//           alt='...'
//         >
//         </MDBCarouselItem>

//         <MDBCarouselItem  style={{ height: '80vh', objectFit: 'cover'}}
//           className='w-100 d-block'

//           src={BannerImage3}
//           alt='...'
//         >
//         </MDBCarouselItem>
//         <MDBCarouselItem  style={{ height: '80vh', objectFit: 'cover'}}
//           className='w-100 d-block'

//           src={BannerImage4}
//           alt='...'
//         >
//         </MDBCarouselItem>
//         <MDBCarouselItem  style={{ height: '80vh', objectFit: 'cover'}}
//           className='w-100 d-block'

//           src={BannerImage5}
//           alt='...'
//         >
//         </MDBCarouselItem>
//       </MDBCarousel>
//     </section>
//   );
// };

export const BannerSection = (props) => {
  // console.log(".,.,", props.BuildingBanner);
  const router = useRouter();
  let prevPlanCode = null;
  let prevPageName = null;
  let nextPlanCode = null;
  let nextPageName = null;
  const goToPlan = (e, planCode) => {
    e.preventDefault();
    if (props.page === "IMAGE_GALLERY") {
      router.push(
        {
          pathname: "/home-plans/details/floor-plans",
          query: { plan: planCode, scroll: false },
        },
        undefined,
        { scroll: true }
      );
    } else if (props.page === "FLOOR_PLAN") {
      router.push(
        {
          pathname: "/home-plans/details/floor-plans",
          query: { plan: planCode, scroll: false },
        },
        undefined,
        { scroll: true }
      );
    } else if (props.page === "PRICE_QUOTE") {
      router.push(
        {
          pathname: "/home-plans/details/floor-plans",
          query: { plan: planCode, scroll: false },
        },
        undefined,
        { scroll: true }
      );
    }
  };
  if (props.data) {
    if (props.data.prevHomePlan) {
      prevPageName = `${props.data.prevHomePlan.name} ~ ${props.data.prevHomePlan.sf} SQ. FT.`;
      prevPlanCode = props.data.prevHomePlan.planCode;
    }

    if (props.data.nextHomePlan) {
      nextPageName = `${props.data.nextHomePlan.name} ~ ${props.data.nextHomePlan.sf} SQ. FT.`;
      nextPlanCode = props.data.nextHomePlan.planCode;
    }
  }
  return (
    <section>
      <MDBContainer
        fluid
        className={`${STYLES.bannerCont} ${STYLES.boxShadow1}`}
      >
        <div className={STYLES.bannerImgCont}>
          {props.img == undefined ? (
            <Carousel
              autoPlay={true}
              interval={3000}
              infiniteLoop={true}
              showArrows={false}
              // showIndicators={false}
              showThumbs={false}
              transitionTime="1000"
              showStatus={false}
              swipeable={false}
              animationHandler="fade"
            >
              <div>
                <img
                  src={BannerImage1}
                  alt="image1"
                  className={`${STYLES.homeBannerImg}`}
                />
              </div>
              <div>
                <img
                  src={BannerImage2}
                  alt="image1"
                  className={`${STYLES.homeBannerImg}`}
                />
              </div>
              <div>
                <img
                  src={BannerImage3}
                  alt="image1"
                  className={`${STYLES.homeBannerImg}`}
                />
              </div>
              <div>
                <img
                  src={BannerImage4}
                  alt="image1"
                  className={`${STYLES.homeBannerImg}`}
                />
              </div>
              <div>
                <img
                  src={BannerImage5}
                  alt="image1"
                  className={`${STYLES.homeBannerImg}`}
                />
              </div>
            </Carousel>
          ) : (
            <div>
              <img
                src={props?.img}
                alt="image"
                className={
                  props?.BuildingBanner
                    ? `${STYLES.mainBuildingBannerImg}`
                    : `${STYLES.mainBannerImg}`
                }
              />
              {prevPlanCode != null ? (
                <div onClick={(e) => goToPlan(e, prevPlanCode)}>
                  <img src={ArrowLeft} className={`${STYLES.LeftArrow}`} />
                </div>
              ) : (
                <></>
              )}
              {nextPlanCode != null ? (
                <div onClick={(e) => goToPlan(e, nextPlanCode)}>
                  <img src={ArrowRight} className={`${STYLES.RightArrow}`} />
                </div>
              ) : (
                <></>
              )}
            </div>
          )}
        </div>
      </MDBContainer>
    </section>
  );
};
