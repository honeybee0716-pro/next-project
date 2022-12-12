import React, { useEffect, useState } from "react";
import STYLES from "../../styles/Common.module.scss";
import Link from "next/link";
import { MDBBtn, MDBContainer, MDBRow, MDBCol } from "mdbreact";
import { useRouter } from "next/router";

export const NavigatorSection = (props) => {
  const router = useRouter();
  const [subNavbar, setSubNavbar] = useState(true);
  const goToLink = (link) => {
    //window.location = `/home-plans/details/floor-plans?plan=${planCode}`
    router.push(link, undefined, { scroll: true, shallow: true });
  };
  // const ChangeStyle = () => {
  //   if (window.scrollY >= 5) {
  //     setSubNavbar(false);
  //   } else {
  //     setSubNavbar(true);
  //   }
  // };
  // useEffect(() => {
  //   window.addEventListener("scroll", ChangeStyle);
  // });
  return (
    <MDBContainer fluid>
      <MDBRow
        className={STYLES.navigatorBtnCont}
        style={{ backgroundColor: props?.bgColor }}
      >
        <MDBCol>
          <div>
            <Link href={props.hrefPrev} scroll={true}>
              <a href={props.hrefPrev}>
                <MDBBtn className={STYLES.prev}>{props.prevLabel}</MDBBtn>
              </a>
            </Link>
            {props.hrefNext ? (
              <Link
                href={props.hrefNext}
                scroll={true}
                onClick={() => goToLink(props.hrefPrev)}
              >
                <a href={props.hrefNext}>
                  <MDBBtn className={STYLES.next}>{props.nextLabel}</MDBBtn>
                </a>
              </Link>
            ) : (
              <></>
            )}
          </div>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};
