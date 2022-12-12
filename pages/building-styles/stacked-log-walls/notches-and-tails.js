import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import React from "react";
import SLW_STYLES from "../../../styles/BuildingStylesSLW.module.scss";
import IMG_nat_1 from "../../../assets/images/building-styles/stacked-log-walls/notches-and-tails/slw_nat_1.jpg";
import IMG_card_1 from "../../../assets/images/building-styles/stacked-log-walls/notches-and-tails/slw_nat_card_scandinavian.jpg";
import IMG_card_2 from "../../../assets/images/building-styles/stacked-log-walls/notches-and-tails/slw_nat_card_dovetail.jpg";
import IMG_card_3 from "../../../assets/images/building-styles/stacked-log-walls/notches-and-tails/slw_nat_card_chinked.jpg";

import IMG_logTail_1 from "../../../assets/images/building-styles/stacked-log-walls/notches-and-tails/slw_nat_logtails_curvedTop.jpg";
import IMG_logTail_2 from "../../../assets/images/building-styles/stacked-log-walls/notches-and-tails/slw_nat_logtails_curved.jpg";
import IMG_logTail_3 from "../../../assets/images/building-styles/stacked-log-walls/notches-and-tails/slw_nat_logtails_french.jpg";
import IMG_logTail_4 from "../../../assets/images/building-styles/stacked-log-walls/notches-and-tails/slw_nat_logtails_staggered.jpg";
import IMG_logTail_5 from "../../../assets/images/building-styles/stacked-log-walls/notches-and-tails/slw_nat_logtails_straight.jpg";

import { SLW_NAV_LIST, SLW_TITLE, SLW_URL_PATH, BUILDING_STYLES_DEFAULT_PATH, BUILDING_STYLES_CONST } from '../../../common/constants/buildingStyles';
import { BannerSection } from '../../../components/common/banner';
import { SubNavbar } from '../../../components/common/subNavbar';
import { NavigatorSection } from '../../../components/common/navigator';
import { NextPageButton } from '../../../components/common/buttons';

const IMG_ROOT = `${process.env.IMG_BASE_URL}/building-styles/stacked-log/`;
const IMG_ROOT_BANNER = `${process.env.IMG_BASE_URL}/building-styles/banner/`;

const SLW_NotchesAndTailsPage = () => {

    return (
        <>
            <BannerSection img={`${IMG_ROOT_BANNER}banner.jpg`}/>
            <SubNavbar navBarItems={SLW_NAV_LIST} header={BUILDING_STYLES_CONST.SLW_HEADER_LABEL} />
            <NavigatorSection
                hrefPrev={BUILDING_STYLES_DEFAULT_PATH.POST_AND_BEAM_DEFAULT}
                hrefNext={BUILDING_STYLES_DEFAULT_PATH.TIMBER_FRAME_DEFAULT}
                prevLabel={BUILDING_STYLES_CONST.PB_HEADER_LABEL}
                nextLabel={BUILDING_STYLES_CONST.TF_HEADER_LABEL}>
            </NavigatorSection>

            <section className={SLW_STYLES.notchesAndTail}>
                <MDBContainer >
                    <MDBRow className={SLW_STYLES.section1} center>
                        <MDBCol md="6" sm="12" className={SLW_STYLES.mainLeft}>
                            <MDBRow>
                                <MDBCol md="12" className={SLW_STYLES.mainTitleCont}>
                                    <h3>Stacked Log Construction: Corner Notches</h3>
                                </MDBCol>
                                <MDBCol md="12" className={SLW_STYLES.mainDescription}>
                                    <p>Where the log walls intersect, a notch must be cut to lock the two walls together. The technique of hand crafting and cutting the interlocking corner notches is crucial to how the finished log home will look and perform. The precise crafting of this notch is essential to maintaining a tight seal and preventing gaps from occurring. At The Log Connection, our craftsmen have years of experience crafting multiple styles of corner notches. The most common is the Scandinavian Saddle Notch.</p>
                                </MDBCol>
                            </MDBRow>
                        </MDBCol>
                        <MDBCol md="6" sm="12" className={SLW_STYLES.mainRight}>
                            <img src={IMG_nat_1} />
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
                <MDBContainer className="px-0">
                    <MDBRow className={`${SLW_STYLES.section2}`}>
                        <MDBCol md="4" sm="12">
                            <div className={SLW_STYLES.card}>
                                <img src={IMG_card_1} />
                                <h4>Scandinavian</h4>
                                <p>The Scandinavian Saddle Notch is our most popular style of log home corner notch, typically combined with the over-scribe technique and large diameter round logs. This corner notch system features precisely angled surfaces which achieve an excellent long term tolerance and create an extremely effective water and air infiltration barrier.</p>
                            </div>
                        </MDBCol>
                        <MDBCol md="4" sm="12">
                            <div className={SLW_STYLES.card}>
                                <img src={IMG_card_2} />
                                <h4>Dovetail</h4>
                                <p>We offer many variations of the Dovetail corner notch, which is most suited to traditional slab side log or timber style homes, and is available in a smooth finish or textured with a traditional adzed look. Our craftsman enjoy the challenge and precision workmanship required for dovetail log homes. A full scribe, non chinked dovetail log home is extremely rare but available when requested.</p>
                            </div>
                        </MDBCol>
                        <MDBCol md="4" sm="12">
                            <div className={SLW_STYLES.card}>
                                <img src={IMG_card_3} />
                                <h4>Chinked</h4>
                                <p>Historic log home construction commonly incorporated a caulking material between the logs; this style is referred to as a chinked log home. Using today's technology, our notch style is specialized to achieve phenomenal sealing properties while maintaining the characteristics and appeal of a traditional chinked style log home.</p>
                            </div>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>

                <MDBContainer className={`${SLW_STYLES.section3} px-0`} >
                    <div className={`${SLW_STYLES.title} ml-5`}>Log Tail Options</div>
                    <MDBRow center>
                        {/* <MDBCol md="1"></MDBCol> */}
                        <MDBCol md="2" sm="12">
                            <div className={SLW_STYLES.card}>
                                <img src={IMG_logTail_1} />
                                <h4>Curved Top</h4>
                                <p>Straight cut with a curved flair out at the top</p>
                            </div>
                        </MDBCol>
                        <MDBCol md="2" sm="12">
                            <div className={SLW_STYLES.card}>
                                <img src={IMG_logTail_2} />
                                <h4>Curved</h4>
                                <p>Short straight cut with a gentle curve</p>
                            </div>
                        </MDBCol>
                        <MDBCol md="2" sm="12">
                            <div className={SLW_STYLES.card}>
                                <img src={IMG_logTail_3} />
                                <h4>French</h4>
                                <p>Short curved bottom then a large counter curve</p>
                            </div>
                        </MDBCol>
                        <MDBCol md="2" sm="12">
                            <div className={SLW_STYLES.card}>
                                <img src={IMG_logTail_4} />
                                <h4>Staggered</h4>
                                <p>Straight ends with alternating lengths</p>
                            </div>
                        </MDBCol>
                        <MDBCol md="2" sm="12">
                            <div className={SLW_STYLES.card}>
                                <img src={IMG_logTail_5} />
                                <h4>Straight</h4>
                                <p>Straight cut ends</p>
                            </div>
                        </MDBCol>
                    </MDBRow>
                    <NextPageButton pageUrl={SLW_URL_PATH.LS} pageName={SLW_TITLE.LS} />
                </MDBContainer>
            </section>
        </>
    )
}

export default SLW_NotchesAndTailsPage;