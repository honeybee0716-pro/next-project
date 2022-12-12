import React, { useEffect } from "react";
import STYLES from "../../styles/modules/HomePlanNav.module.scss";
import { useRouter } from "next/router";
import Zoom from "react-reveal/Zoom";

export const GoToPlan = ({ homePlans }) => {
  const router = useRouter();

  const onSelectPlan = (planCode) => {
    if (planCode) {
      router.push({
        pathname: "/home-plans/details/floor-plans",
        query: { plan: planCode, scroll: false },
      });
      //window.location.href = `/home-plans/details/floor-plans?plan=${planCode}&locate=#${planCode}`
    }
  };
  return (
    <>
      {homePlans && homePlans.length > 0 ? (
        <Zoom>
          <div className={`${STYLES.goToPlan}`}>
            <select
              id="state"
              name="state"
              onChange={(e) => onSelectPlan(e.target.value)}
              className="browser-default custom-select"
            >
              <option style={{ display: "none" }} value={homePlans[0].planCode}>
                Go To Plan
              </option>
              {homePlans.map((hp, i) => (
                <option value={hp.planCode} key={i}>
                  {hp.name}
                </option>
              ))}
            </select>
          </div>
        </Zoom>
      ) : (
        <></>
      )}
    </>
  );
};
