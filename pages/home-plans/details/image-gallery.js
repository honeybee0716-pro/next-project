import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { BannerSection } from "../../../components/common/banner";
import { SubNavbar } from "../../../components/common/subNavbar";
import { ImageGallerySection } from "../../../components/home-plans/imageGallerySection";
import { getHomePlan } from "../../../common/services/home-plans";
import { processHomePlans } from "../../../components/home-plans/homePlanHelper";
import { NavigatorSection } from "../../../components/common/navigator";
import { HomePlanNav } from "../../../components/home-plans/homePlanNav";
import { ScrollIntoView } from "../../../components/common/scrollIntoView";
import { FloaterNav } from "../../../components/home-plans/floaterNav";

const IMG_BANNER_FILE_ROOT = `${process.env.IMG_BASE_URL}/home-plans/_banner/`;

const ImageGalleryPage = () => {
  const router = useRouter();
  let planCode = router.query.plan;

  const [header, setHeader] = useState("");
  const [navBarItems, setNavBarItems] = useState([]);
  const [nextPlanLink, setNextPlanLink] = useState("");
  const [currHomePlan, setCurrHomePlan] = useState({});
  const [allHomePlans, setAllHomePlans] = useState([]);
  const [processedHomePlans, setProcessedHomePlans] = useState([]);

  useEffect(() => {
    getHomePlan("all")
      .then((homePlans) => {
        if (homePlans) {
          setAllHomePlans(homePlans);
          let hp = processHomePlans(planCode, homePlans, "gallery");
          console.log("ighp", hp);

          setProcessedHomePlans(hp);
          setCurrHomePlan(hp.currHomePlan);
          setHeader(hp.header);
          setNavBarItems(hp.navBarItems);
          setProcessedHomePlans(hp);
          if (hp.nextHomePlan) {
            setNextPlanLink(
              `/home-plans/details/floor-plans?plan=${hp.nextHomePlan.planCode}&scroll=false`
            );
          } else {
            setNextPlanLink("");
          }
        }
      })
      .catch((err) => {});
  }, [planCode]);

  return (
    <>
      {/* <BannerSection img={`${IMG_BANNER_FILE_ROOT}${planCode}.jpg`} /> */}
      {/* <BannerSection
        img={`${IMG_BANNER_FILE_ROOT}${planCode}.jpg`}
        data={processedHomePlans}
        page={"IMAGE_GALLERY"}
      /> */}

      <img src={`${IMG_BANNER_FILE_ROOT}${planCode}.jpg`} />

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
      <ImageGallerySection homePlan={currHomePlan} />
      <HomePlanNav data={processedHomePlans} page={"IMAGE_GALLERY"} />
    </>
  );
};

export default ImageGalleryPage;
