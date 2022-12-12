import {
    MDBContainer,
    MDBRow,
    MDBCol
} from "mdbreact";
import React, { useState } from "react";
import Link from "next/link";
import PB_STYLES from "../../../styles/BuildingStylesPB.module.scss";
import IMG_trad_1 from "../../../assets/images/building-styles/post-and-beam/traditional/pb_traditional_1.jpg";
import IMG_trad_2 from "../../../assets/images/building-styles/post-and-beam/traditional/pb_traditional_2.jpg";
import IMG_trad_3 from "../../../assets/images/building-styles/post-and-beam/traditional/pb_traditional_3.jpg";

import { PB_NAV_LIST, PB_TITLE, BUILDING_STYLES_DEFAULT_PATH, BUILDING_STYLES_CONST, PB_URL_PATH } from '../../../common/constants/buildingStyles';
import { BannerSection } from '../../../components/common/banner';
import { SubNavbar } from '../../../components/common/subNavbar';
import { NavigatorSection } from '../../../components/common/navigator';
import { NextPageButton } from '../../../components/common/buttons';
import { ProcessComponent } from '../../../components/building-styles/process';


const IMG_ROOT_BANNER = `${process.env.IMG_BASE_URL}/building-styles/banner/`;

const PB_HomesPage = () => {

    return (
        <>
            <BannerSection img={`${IMG_ROOT_BANNER}banner.jpg`}/>
            <SubNavbar navBarItems={PB_NAV_LIST} header={BUILDING_STYLES_CONST.PB_HEADER_LABEL}/>
            <NavigatorSection
                hrefPrev={BUILDING_STYLES_DEFAULT_PATH.TIMBER_FRAME_DEFAULT}
                hrefNext={BUILDING_STYLES_DEFAULT_PATH.STACKED_LOG_WALLS_DEFAULT}
                prevLabel={BUILDING_STYLES_CONST.TF_HEADER_LABEL}
                nextLabel={BUILDING_STYLES_CONST.SLW_HEADER_LABEL}>
            </NavigatorSection>

            <section className={PB_STYLES.traditional} >
                <MDBContainer >
                    <MDBRow className={PB_STYLES.section1} center>
                        <MDBCol md="6" sm="12" xs="12" className={PB_STYLES.mainLeft}>
                            <MDBRow>
                                <MDBCol sm="12" xs="12" className={PB_STYLES.mainTitleCont}><h3 >ROUND LOG POST AND BEAM HOMES</h3></MDBCol>
                                <MDBCol sm="12" xs="12" className={PB_STYLES.mainDescription}>
                                    <p>Right from the first glance you can see that a hand crafted post and beam log home from The Log Connection has been carefully prepared by master craftsmen that focus on the finer details and finishing cuts to provide a distinctive log home package you will see, smell and touch for generations. </p>
                                    <p>One of many advantages is that a post and beam home does not have the design limitations found with a stacked log package due to settling. Without those rigid design guidelines, the options are nearly endless for architectural expression and award winning design creativity.</p>
                                    <p>You are invited to work with our in-house design team to create a unique custom log home plan or modify any of our <Link href="/home-plans">existing floor plans</Link> and adapt them to suit your requirements. Please keep in mind that any of our stacked log plans can easily be adapted to a post and beam style.</p></MDBCol>
                            </MDBRow>
                        </MDBCol>
                        <MDBCol md="6" sm="12" xs="12" className={PB_STYLES.mainRight}>
                            <img src={IMG_trad_1} />
                        </MDBCol>
                    </MDBRow>

                    <MDBRow className={PB_STYLES.section2}>
                        <MDBCol md="6" sm="12">
                            <div className={PB_STYLES.card}>
                                <div className={PB_STYLES.imgCont}><img src={IMG_trad_2} /></div>
                                <p>The Log Connection has over <Link href="">30 consecutive years experience</Link> designing and building hand crafted post and beam log homes. The traditional round log post and beam style (as shown on this page) and our newer more modern <Link href="/building-styles/post-and-beam/four-square/">4Square&#8482; system</Link>  has become very popular in recent years.</p>
                            </div>
                        </MDBCol>
                        <MDBCol md="6" sm="12">
                            <div className={PB_STYLES.card}>
                                <div className={PB_STYLES.imgCont}><img src={IMG_trad_3} /></div>
                                <p>Our log packages are not a do-it-yourself style “log kit.” This means that our pre-built package arrives at your site ready to assemble, not built on delivery. The Log Connection craftsmen pre-cut and fit the log package before delivery to ensure accuracy and the most efficient use of man power and crane time during delivery setup.</p></div>
                        </MDBCol>
                    </MDBRow>

                    <MDBRow className={PB_STYLES.section3}>
                        <MDBCol md="6" sm="12">
                            <ProcessComponent type={`PB`} />
                        </MDBCol>
                        <MDBCol md="6" sm="12">
                            <p>Log post sizing will vary from design to design but we traditionally use 15″ and larger posts hand crafted from large Douglas Fir and Western Red Cedar. Each post receives precise shaping and detailing to produce a clean consistent joint where it will make contact with a horizontal log member. To ensure the greatest possible strength and demand the most accurate tolerances we connect them together with a continuous 4″x4″x3″ structural tenon. (Not a drilled or pegged post)</p>
                            <p>The sizing of our horizontal log floor and roof beams are designed to carry and transfer the structural loads down the supporting log posts to the foundation. Building aesthetics often exceeds the engineering requirements and we select larger diameter logs then necessary to achieve a massive looking structural log roof system.</p>
                            <p>The Log Connection supplies the complete post and beam frame, similar to the first illustration to the left (click the Log Shell link). Once the structural post and beam frame is delivered and erected at your site the general contractor will finish your home to a Dry-In or Complete (“turn-key”) stage.</p>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
                <NextPageButton pageUrl={PB_URL_PATH.FS} pageName={PB_TITLE.FS}/>
            </section>
        </>
    )

}

export default PB_HomesPage;