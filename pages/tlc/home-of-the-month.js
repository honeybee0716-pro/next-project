import React, { useState, useEffect } from "react";
import { BannerSection } from '../../components/common/banner';
import { SubNavbar } from '../../components/common/subNavbar';
import { TLC_NAVBAR } from '../../common/constants/tlc';
import STYLES from '../../styles/tlc/homeOfTheMonth.module.scss';
import { getFilteredHomePlans } from "../../common/services/home-plans";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import { readTextFile } from "../../common/webService";
import { HOME_PLAN_DETAILS_PATH } from '../../common/constants/homePlans';
import Link from "next/link";

const ASSETS_ROOT = `${process.env.IMG_BASE_URL}/common/icons/`;
const HP_ROOT = `${process.env.IMG_BASE_URL}/home-plans/`;
const IMG_BANNER_ROOT = `${process.env.IMG_BASE_URL}/tlc-monthly/banner/`;

const HomeOfTheMonthPage = () => {

  const [hotm, setHotm] = useState([]);
  const [desc, setDesc] = useState("");

  useEffect(async () => {
    let data = await getFilteredHomePlans('hotm');
    setHotm(data);

    if (data[0] && data[0].planCode) {
      const text = await readTextFile(`${HP_ROOT}${data[0].planCode}/text/HOTM_${data[0].planCode}.txt`, { encoding: 'utf8' });
      setDesc(text);
    }

  }, []);

  return (
    <>
      <BannerSection img={`${IMG_BANNER_ROOT}tlc_banner_1.jpg`} />
      <SubNavbar navBarItems={TLC_NAVBAR} header={""} />
      <section className={`${STYLES.hotm} pb-5`}>
        <MDBContainer>
          <MDBRow>
            <MDBCol md="2" lg="2" xl="2" sm="12" className={`${STYLES.left} mt-5`}>
              {hotm[0]?.quote === 'x' ?             
              (<MDBRow className="my-md-5">
                <MDBCol sm="12" md="6" lg="6" className={`${STYLES.label} pt-2`}>
                  <Link href={`${HOME_PLAN_DETAILS_PATH.PRICE_QUOTE}?plan=${hotm[0]?.planCode}`}>Price Quote </Link>
                </MDBCol>
                <MDBCol sm="12" md="6" lg="6">
                  <Link href={`${HOME_PLAN_DETAILS_PATH.PRICE_QUOTE}?plan=${hotm[0]?.planCode}`}>
                    <div className={`${STYLES.iconCont}`}>
                      <img src={`${ASSETS_ROOT}quote.jpg`}/>
                    </div>
                  </Link>
                </MDBCol>
              </MDBRow>) : <></>}
              {hotm[0]?.study === 'x' ? 
              (<MDBRow className="my-md-5">
                <MDBCol sm="12" md="6" lg="6" className={`${STYLES.label} pt-2`}>
                  <Link href={`${HOME_PLAN_DETAILS_PATH.STUDY_SET}?plan=${hotm[0]?.planCode}`}>Study Set</Link>
                </MDBCol>
                <MDBCol sm="12" md="6" lg="6">
                  <Link href={`${HOME_PLAN_DETAILS_PATH.STUDY_SET}?plan=${hotm[0]?.planCode}`}>
                    <div className={`${STYLES.iconCont}`}>
                      <img src={`${ASSETS_ROOT}study.jpg`}/>
                    </div>
                  </Link>
                </MDBCol>
              </MDBRow>) : <></>}
              {hotm[0]?.pictures === 'x' ?
              (<MDBRow className="my-md-5">
                <MDBCol sm="12" md="6" lg="6" className={`${STYLES.label} pt-2`}>
                  <Link href={`${HOME_PLAN_DETAILS_PATH.IMAGE_GALLERY}?plan=${hotm[0]?.planCode}`}>Image Gallery</Link>
                </MDBCol>
                <MDBCol sm="12" md="6" lg="6">
                  <Link href={`${HOME_PLAN_DETAILS_PATH.IMAGE_GALLERY}?plan=${hotm[0]?.planCode}`}>
                    <div className={`${STYLES.iconCont}`}>
                      <img src={`${ASSETS_ROOT}pictures.jpg`} />
                    </div>
                  </Link>
                </MDBCol>
              </MDBRow>) : <></>}
              {hotm[0]?.video === 'x' ?
              (<MDBRow className="my-md-5">
                <MDBCol sm="12" md="6" lg="6" className={`${STYLES.label}`}>
                  <Link href={`${HOME_PLAN_DETAILS_PATH.IMAGE_GALLERY}?plan=${hotm[0]?.planCode}`}>Image Gallery</Link>
                </MDBCol>
                <MDBCol sm="12" md="6" lg="6">
                  <Link href={`${HOME_PLAN_DETAILS_PATH.IMAGE_GALLERY}?plan=${hotm[0]?.planCode}`}>
                    <div className={`${STYLES.iconCont}`}>
                      <img src={`${ASSETS_ROOT}video.jpg`} />
                    </div>
                  </Link>
                </MDBCol>
              </MDBRow>) : <></>}
            </MDBCol>
            <MDBCol md="10" sm="12" lg="10" xl="10">
              <div className={`${STYLES.mainImgCont} m-5`}>
                <div className={`${STYLES.title}`}>The {hotm[0]?.name}</div>
                <div className={`${STYLES.subTitle} ml-2`}>{hotm[0]?.sf} SQ. FT.</div>
                <img src={`${HP_ROOT}${hotm[0]?.planCode}/hotm.jpg`} />
              </div>
            </MDBCol>
          </MDBRow>
          <MDBRow className="mb-5 mx-2">
            <MDBCol className={`${STYLES.desc} text-justify`}>{desc}</MDBCol>
          </MDBRow>
          <MDBRow center className={`${STYLES.fpSection} mx-2 p-2`} >
            {hotm[0]?.floorPlans.map((img, i) => (
              <MDBCol md="6" sm="12" lg="6" xl="6" key={i}>
                <div className={`${STYLES.fpImgCont} px-2`}>
                  <img src={img} />
                </div>
              </MDBCol>
            ))}
          </MDBRow>
        </MDBContainer>
      </section>
    </>
  );
}

export default HomeOfTheMonthPage;
