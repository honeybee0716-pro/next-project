import STYLES from "../../styles/modules/HomePlanNav.module.scss";
import IMG_nextArrowBg from "../../assets/images/common/next-arrow-bg.png";
import IMG_prevArrowBg from "../../assets/images/common/prev-arrow-bg.png";
import React from "react";
import { useRouter } from "next/router";

export const HomePlanNav = (props) => {
  const router = useRouter();

  let prevPlanCode = null;
  let prevPageName = null;
  let nextPlanCode = null;
  let nextPageName = null;

  const nextArrow = {
    backgroundImage: `url(${IMG_nextArrowBg})`,
    padding: `30px 40px 48px 25px`,
  };

  const prevArrow = {
    backgroundImage: `url(${IMG_prevArrowBg})`,
    padding: `35px 20px 48px 50px`,
  };

  const goToPlan = (e, planCode) => {
    e.preventDefault();
    //window.location = `/home-plans/details/floor-plans?plan=${planCode}`
    if (props.page === "IMAGE_GALLERY") {
      router.push(
        {
          pathname: "/home-plans/details/image-gallery",
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
    <section className={STYLES.hpNav}>
      {prevPlanCode != null ? (
        <a
          className={STYLES.prevBtnCont}
          onClick={(e) => goToPlan(e, prevPlanCode)}
          title={prevPlanCode}
        >
          {/* <span className={STYLES.label}>Next:</span> */}
          <div style={prevArrow} className={STYLES.arrow}>
            {prevPageName}
          </div>
        </a>
      ) : (
        <></>
      )}

      {nextPlanCode != null ? (
        <a
          className={STYLES.nextBtnCont}
          onClick={(e) => goToPlan(e, nextPlanCode)}
          title={nextPlanCode}
        >
          {/* <span className={STYLES.label}>Next:</span> */}
          <div style={nextArrow} className={STYLES.arrow}>
            {nextPageName}
          </div>
        </a>
      ) : (
        <></>
      )}
    </section>
  );
};
