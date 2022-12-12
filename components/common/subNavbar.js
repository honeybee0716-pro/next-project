import React, { useState, useEffect } from "react";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBCollapse,
  MDBContainer,
  MDBHamburgerToggler,
  MDBPopover,
  MDBPopoverBody,
  MDBPopoverHeader,
  MDBIcon,
} from "mdbreact";
import Link from "next/link";
import {
  FacebookShareButton,
  FacebookIcon,
  FacebookMessengerShareButton,
} from "next-share";
import { useRouter } from "next/router";
import S_STYLES from "../../styles/modules/SubNavbar.module.scss";
import BackArrow from "../../assets/images/common/media-left-arrow.png";
import { FacebookShareCount } from "react-share";
import ShareLink from "react-facebook-share-link";
export const SubNavbar = ({
  header,
  navBarItems,
  activePageInd,
  forGoBack,
  scrollingNav,
}) => {
  const router = useRouter();

  const path = router.pathname;
  let planCode = router.query.plan;
  let scrollCode = router.query.plan;
  const [subNavbar, setSubNavbar] = useState(false);

  let isActivePageIndEnabled = activePageInd === false ? false : true;
  const goBack = () => {
    router.push(
      {
        pathname: "/home-plans/details/floor-plans",
        query: { plan: planCode, scroll: false },
      },
      undefined,
      { scroll: true }
    );
  };

  if (navBarItems && Array.isArray(navBarItems)) {
    navBarItems.forEach((el) => {
      el.isActive = false;
      el.scroll = false;
      if (el.href.indexOf(path) !== -1 && isActivePageIndEnabled === true) {
        el.isActive = true;
      }
      if (el.scroll) {
        el.scroll = true;
      }
    });
  }

  const [url, setUrl] = useState("");
  const [state, setState] = useState({
    isOpen: false,
  });

  useEffect(() => {
    setUrl(window.location.href);
  }, [path]);

  const toggleCollapse = () => {
    setState({ isOpen: !state.isOpen });
  };
  // const ChangeStyle = () => {
  //   if (window.scrollY >= 3) {
  //     setSubNavbar(true);
  //   } else {
  //     setSubNavbar(false);
  //   }
  // };
  // useEffect(() => {
  //   window.addEventListener("scroll", ChangeStyle);
  // });
  return (
    // <section
    //   className={
    //     subNavbar && scrollingNav
    //       ? S_STYLES.subNavbarMainActive
    //       : S_STYLES.subNavbarMain
    //   }
    // >
    <section className={S_STYLES.subNavbar}>
      <MDBNavbar
        className={`${S_STYLES.navbarCont} p-1`}
        dark
        expand="md"
        scrolling
      >
        {header ? (
          <MDBNavbarBrand
            className={`${S_STYLES.headerBg}  ml-sm-1 ml-md-3 ml-lg-5`}
          >
            <div className={`${S_STYLES.header} ${S_STYLES.borderBtm}`}>
              {header}
            </div>
          </MDBNavbarBrand>
        ) : (
          <></>
        )}
        <MDBHamburgerToggler
          id="hamburger2"
          onClick={toggleCollapse}
          className="d-block d-md-none mx-3"
        />
        <MDBCollapse isOpen={state.isOpen} navbar style={{ zIndex: "999" }}>
          {forGoBack ? (
            <div className={`${S_STYLES.main}`} onClick={goBack}>
              <img src={BackArrow} className={`${S_STYLES.imgForGoback}`} />

              <div className={`${S_STYLES.titleForGoback}`}>GoBack</div>
            </div>
          ) : (
            <MDBNavbarNav
              right={header ? true : false}
              className={`${S_STYLES.menuButton} my-2 mr-md-2 mr-lg-2`}
            >
              {navBarItems &&
                navBarItems.map((item, i) => (
                  <MDBNavItem
                    className={
                      item.isActive === true
                        ? S_STYLES.active
                        : S_STYLES.notActive
                    }
                    key={i}
                  >
                    <Link href={item.href}>
                      <div className={`${S_STYLES.title}`}>{item.title}</div>
                    </Link>
                  </MDBNavItem>
                ))}
              <MDBNavItem
                className={`${S_STYLES.shareBg} ${S_STYLES.sharePopUp}`}
              >
                <MDBPopover placement="top" domElement clickable>
                  <div className={`${S_STYLES.title}`}>Share</div>
                  <MDBPopoverBody>
                    {/* <div className="my-3">
                      <a
                        target="_blank"
                        title={`https://www.facebook.com/sharer/sharer.php?u=${url}`}
                        href={`https://www.facebook.com/sharer/sharer.php?u=${url}`}
                      >
                        <MDBIcon size="2x" fab icon="facebook-f" />
                      </a>
                    </div> */}
                    {/* <FacebookShareButton url={`${url}`}>
                      <MDBIcon
                        size="2x"
                        fab
                        icon="facebook-f"
                        className={`${S_STYLES.fb_icon}`}
                      />
                    </FacebookShareButton> */}

                    <div className="my-3">
                      <a
                        target="_blank"
                        title={`https://twitter.com/intent/tweet?text=${url}`}
                        href={`https://twitter.com/intent/tweet?text=${url}`}
                      >
                        <MDBIcon size="2x" fab icon="twitter" />
                      </a>
                    </div>
                    <div className="my-3">
                      <a
                        target="_blank"
                        title={`whatsapp://send?text=${url}`}
                        href={`whatsapp://send?text=${url}`}
                      >
                        <MDBIcon size="2x" fab icon="whatsapp" />
                      </a>
                    </div>
                    {/* <div className="my-3">
                      <a
                        target="_blank"
                        title={`https://messenger.com/?link=${url}`}
                        href={`https://messenger.com/?link=${url}`}
                      >
                        <MDBIcon size="2x" fas icon="comment" />
                      </a>
                    </div> */}
                    <FacebookMessengerShareButton
                      url={`${url}`}
                      appId={"572394677953375"}
                    >
                      <MDBIcon
                        size="2x"
                        color="white"
                        fas
                        icon="comment"
                        className={`${S_STYLES.fb_icon}`}
                      />
                    </FacebookMessengerShareButton>
                  </MDBPopoverBody>
                </MDBPopover>
              </MDBNavItem>
            </MDBNavbarNav>
          )}
        </MDBCollapse>
      </MDBNavbar>
    </section>
    // </section>
  );
};

const HOME_PLANS_FILTER = [
  { filter: "All", title: "All Home Plans" },
  { filter: "PB", title: "Post And Beam" },
  { filter: "Stacked", title: "Stacked Log Homes" },
  { filter: "Timber", title: "Timber Frame" },
  { filter: "Custom", title: "Custom Design Services" },
];

export const SubNavbarHomePlan = ({ filterFn }) => {
  const [state, setState] = useState({
    isOpen: false,
  });

  const toggleCollapse = () => {
    setState({ isOpen: !state.isOpen });
    console.log(state);
  };
  return (
    <section className={S_STYLES.subNavbar}>
      <MDBNavbar
        className={`${S_STYLES.navbarCont} p-1 mb-3`}
        dark
        expand="md"
        scrolling
      >
        <MDBNavbarBrand
          className={`${S_STYLES.headerBg} ml-sm-1 ml-md-3 ml-lg-5`}
        >
          <div className={`${S_STYLES.header} ${S_STYLES.borderBtm}`}>
            Home Plans
          </div>
        </MDBNavbarBrand>
        <MDBHamburgerToggler
          id="nav2"
          onClick={toggleCollapse}
          className="d-block d-md-none mx-3"
        />
        <MDBCollapse isOpen={state.isOpen} navbar style={{ zIndex: "999" }}>
          <MDBNavbarNav
            right
            className={`${S_STYLES.menuButton} my-2 mr-md-2 mr-lg-2`}
          >
            {HOME_PLANS_FILTER.map((item, i) => (
              <MDBNavItem
                className={
                  item.isActive === true ? S_STYLES.active : S_STYLES.notActive
                }
                key={i}
              >
                <div
                  onClick={() => {
                    filterFn(item.filter);
                  }}
                  className={`${S_STYLES.title}`}
                >
                  {item.title}
                </div>
              </MDBNavItem>
            ))}
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
    </section>
  );
};
