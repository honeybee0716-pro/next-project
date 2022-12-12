import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { BannerSection } from "../../../components/common/banner";
import { SubNavbar } from "../../../components/common/subNavbar";
import { FloorPlanSection } from "../../../components/home-plans/floorPlanSection";
import { HomePlanNav } from "../../../components/home-plans/homePlanNav";
import { HOME_PLAN_DETAILS_PATH } from "../../../common/constants/homePlans";
import { getHomePlan } from "../../../common/services/home-plans";
import { processHomePlans } from "../../../components/home-plans/homePlanHelper";
import { NavigatorSection } from "../../../components/common/navigator";
import { ScrollIntoView } from "../../../components/common/scrollIntoView";
import { FloaterNav } from "../../../components/home-plans/floaterNav";

const IMG_BANNER_FILE_ROOT = `${process.env.IMG_BASE_URL}/home-plans/_banner/`;

const FloorPlanPage = () => {
  const [floorPlans, setFloorPlans] = useState([]);
  const [header, setHeader] = useState("");
  const [navBarItems, setNavBarItems] = useState([]);
  const [processedHomePlans, setProcessedHomePlans] = useState({});
  const [nextPlanLink, setNextPlanLink] = useState({});
  const [allHomePlans, setAllHomePlans] = useState([]);

  const router = useRouter();
  let planCode = router.query.plan;

  useEffect(() => {
    getHomePlan("all")
      .then((homePlans) => {
        if (homePlans) {
          setAllHomePlans(homePlans);
          let hp = processHomePlans(planCode, homePlans);
          console.log("<+>", hp);
          setFloorPlans(hp.currHomePlan.floorPlans);
          setHeader(hp.header);
          setNavBarItems(hp.navBarItems);
          setProcessedHomePlans(hp);

          if (hp.nextHomePlan) {
            setNextPlanLink(
              `${HOME_PLAN_DETAILS_PATH.FLOOR_PLAN}?plan=${hp.nextHomePlan.planCode}&scroll=false`
            );
          } else {
            setNextPlanLink("");
          }
        }
      })
      .catch((err) => {});
  }, [planCode]);
  console.log("processedHomePlans", processedHomePlans);

  return (
    <section>
      {/* <BannerSection img={`${IMG_BANNER_FILE_ROOT}${planCode}.jpg`} /> */}
      <BannerSection
        img={`${IMG_BANNER_FILE_ROOT}${planCode}.jpg`}
        data={processedHomePlans}
        page={"FLOOR_PLAN"}
      />
      <ScrollIntoView mode={"default"} />
      <SubNavbar
        navBarItems={navBarItems}
        header={header}
        // scrollingNav={true}
      />
      <NavigatorSection
        bgColor="white"
        hrefPrev={`/home-plans`}
        hrefNext={nextPlanLink}
        prevLabel={`Back to Gallery`}
        nextLabel={nextPlanLink ? `Next Plan` : ""}
      ></NavigatorSection>
      <FloaterNav homePlans={allHomePlans} />
      <FloorPlanSection floorPlans={floorPlans} />
      <HomePlanNav data={processedHomePlans} page={"FLOOR_PLAN"} />
    </section>
  );
};

export default FloorPlanPage;
