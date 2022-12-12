import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { BannerSection } from "../../components/common/banner";
import { SubNavbar } from "../../components/common/subNavbar";
import { PriceQuoteSection } from "../../components/home-plans/priceQuoteSection";
import { getHomePlan } from "../../common/services/home-plans";
import { processHomePlans } from "../../components/home-plans/homePlanHelper";
import { ScrollIntoView } from "../../components/common/scrollIntoView";
import { FloaterNav } from "../../components/home-plans/floaterNav";

const IMG_BANNER_FILE_ROOT = `${process.env.IMG_BASE_URL}/home-plans/_banner/`;

const PriceQuotePage = () => {
  const router = useRouter();
  let planCode = router.query.plan;

  const [header, setHeader] = useState("");
  const [navBarItems, setNavBarItems] = useState([]);
  const [allHomePlans, setAllHomePlans] = useState([]);
  const [processedHomePlans, setProcessedHomePlans] = useState([]);

  // useEffect(() => {
  //   getHomePlan(planCode)
  //     .then((homePlan) => {
  //       let hp = processHomePlans(planCode, homePlan, "priceQuote");
  //       setHeader(hp.header);
  //       setNavBarItems(hp.navBarItems);
  //     })
  //     .catch((err) => {});
  // }, [planCode]);

  useEffect(() => {
    getHomePlan("all")
      .then((homePlans) => {
        // if (homePlans) {
        let hp = processHomePlans(planCode, homePlans, "priceQuote");
        console.log(hp);
        setHeader(hp.header);
        setNavBarItems(hp.navBarItems);
        setAllHomePlans(homePlans);
        setProcessedHomePlans(hp);

        // }
      })
      .catch((err) => {});
  }, [planCode]);
  return (
    <>
      <BannerSection
        img={`${IMG_BANNER_FILE_ROOT}${planCode}.jpg`}
        data={processedHomePlans}
        page={"PRICE_QUOTE"}
      />
      <ScrollIntoView mode={"default"} />
      <SubNavbar
        navBarItems={navBarItems}
        header={header}
        // scrollingNav={true}
      />
      <FloaterNav homePlans={allHomePlans} />
      <PriceQuoteSection />
    </>
  );
};

export default PriceQuotePage;
