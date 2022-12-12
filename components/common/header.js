import React, { useState } from "react";
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBCollapse,
  MDBNavItem,
  MDBIcon,
  MDBHamburgerToggler,
} from "mdbreact";
import Link from "next/link";
import { useRouter } from "next/router";
import IMG_logoPng from "../../assets/images/common/logo.png";
import IMG_menubg from "../../assets/images/common/menu-bg.jpg";
import STYLES from "../../styles/Header.module.scss";

const MAIN_PAGES = [
  {
    href: "/home-plans",
    match: "/home-plans",
    title: "HOME PLANS",
    isActive: false,
  },
  {
    href: "/building-styles",
    match: "/building-styles",
    title: "BUILDING STYLES",
    isActive: false,
  },
  {
    href: "/galleries/exterior",
    match: "/galleries",
    title: "GALLERIES",
    isActive: false,
  },
  {
    href: "/projects/current",
    match: "/projects",
    title: "OUR PROJECTS",
    isActive: false,
  },
  {
    href: "/tlc/home-of-the-month",
    match: "/tlc",
    title: "TLC MONTHLY",
    isActive: false,
  },
  { href: "/qna", match: "/qna", title: "Q & A", isActive: false },
];

const headerbg = {
  backgroundImage: `url(${IMG_menubg})`,
  backgroundRepeat: "repeat",
  // paddingTop: 0,
  // paddingBottom: 0,
  maxHeight: "60px",
  zIndex: 2,
};

const Header = () => {
  const router = useRouter();
  const path = router.pathname;

  const [state, setState] = useState({
    isOpen: false,
  });

  MAIN_PAGES.forEach((el) => {
    el.isActive = false;
    if (path.indexOf(el.match) !== -1) {
      el.isActive = true;
    }
  });

  // const handleClickOnLogo = () => {
  //   setState({ isOpen: false });
  // };
  const toggleCollapse = () => {
    setState({ isOpen: !state.isOpen });
  };

  return (
    <div className={STYLES.header}>
      <header>
        <MDBContainer className={STYLES.topHeader} fluid>
          <div className={STYLES.topHeader}>
            <a href="mailto:info@thelogconnection.com">
              <MDBIcon far icon="envelope" className="text-white mr-2" />
            </a>
            <a
              className="d-none d-sm-inline-block mr-5"
              href="mailto:info@thelogconnection.com"
            >
              info@logconnection.com
            </a>
            <a href="tel:+1-888-207-0210">
              <MDBIcon icon="phone" className="mr-2 text-white" />
            </a>
            <span className="d-none d-sm-inline-block text-white">
              Toll Free:
            </span>
            <a
              className="d-none d-sm-inline-block mr-5"
              href="tel:+1-888-207-0210"
            >
              1-888-207-0210
            </a>
          </div>
        </MDBContainer>
        <MDBNavbar
          style={headerbg}
          expand="md"
          scrolling
          className={`${STYLES.navbarCont}`}
        >
          <MDBNavbarBrand className={`${STYLES.navbarBrandSection}`}>
            <Link href="/">
              <div className="ml-md-3 ml-lg-4">
                <img
                  className={STYLES.logo}
                  src={`http://2021.thelogconnection.com/_next/static/images/logo-5b69d7503f714656be6f2e8d422a797b.png`}
                ></img>
              </div>
            </Link>
          </MDBNavbarBrand>
          <MDBHamburgerToggler
            id="hamburger1"
            onClick={toggleCollapse}
            className="d-block d-md-none"
          />
          <MDBCollapse isOpen={state.isOpen} navbar style={{ zIndex: "999" }}>
            <MDBNavbarNav right className={`${STYLES.menuButton} `}>
              {MAIN_PAGES.map((page, i) => (
                <MDBNavItem key={i}>
                  <span
                    className={
                      page.isActive ? STYLES.selected : STYLES.notSelected
                    }
                  >
                    <Link href={page.href}>{page.title}</Link>
                  </span>
                </MDBNavItem>
              ))}
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBNavbar>
      </header>
    </div>
  );
};

export default Header;
