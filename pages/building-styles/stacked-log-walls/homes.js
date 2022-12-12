import React from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import SLW_STYLES from "../../../styles/BuildingStylesSLW.module.scss";
import { SLW_NAV_LIST, SLW_TITLE, SLW_URL_PATH, BUILDING_STYLES_DEFAULT_PATH, BUILDING_STYLES_CONST } from '../../../common/constants/buildingStyles';
import { BannerSection } from '../../../components/common/banner';
import { SubNavbar } from '../../../components/common/subNavbar';
import { NavigatorSection } from '../../../components/common/navigator';
import { NextPageButton } from '../../../components/common/buttons';
import { ProcessComponent } from '../../../components/building-styles/process';

const IMG_ROOT = `${process.env.IMG_BASE_URL}/building-styles/stacked-log/`;
const IMG_ROOT_BANNER = `${process.env.IMG_BASE_URL}/building-styles/banner/`;

const SLW_HomesPage = ()=> {
    return (
        <>
            <BannerSection img={`${IMG_ROOT_BANNER}banner.jpg`}/>
            <SubNavbar navBarItems={SLW_NAV_LIST} header={BUILDING_STYLES_CONST.SLW_HEADER_LABEL}/>
            <NavigatorSection 
                hrefPrev={BUILDING_STYLES_DEFAULT_PATH.POST_AND_BEAM_DEFAULT} 
                hrefNext={BUILDING_STYLES_DEFAULT_PATH.TIMBER_FRAME_DEFAULT} 
                prevLabel={BUILDING_STYLES_CONST.PB_HEADER_LABEL} 
                nextLabel={BUILDING_STYLES_CONST.TF_HEADER_LABEL}>
            </NavigatorSection>

            <section className={SLW_STYLES.traditional}>
                <MDBContainer>
                    <MDBRow className={SLW_STYLES.section1} center>
                        <MDBCol md="6" lg="6" xl="6" className={SLW_STYLES.mainLeft}>
                            <MDBRow>
                                <MDBCol md="12" className={SLW_STYLES.mainTitleCont}><h3>Stacked Log Homes</h3></MDBCol>
                                <MDBCol md="12" className={SLW_STYLES.mainDescription}>
                                    <p>Stacked log homes feature main floor walls which consist entirely of logs, stacked horizontally on top of each other, typically up to the beginning of the roof structure.</p>
                                    <p>The Log Connection supplies a complete stacked log shell, similar to the first illustration below (click the Log Shell link). You will require a general contractor to finish your home to a Dry-In or Complete ("turn-key") stage.</p>
                                   </MDBCol>
                            </MDBRow>
                        </MDBCol>
                        <MDBCol md="6" lg="6" xl="6" className={SLW_STYLES.mainRight}>
                            <img src={`${IMG_ROOT}slw_trad_1.jpg`} />
                        </MDBCol>
                    </MDBRow>

                    <MDBRow className={SLW_STYLES.section2}>
                        <MDBCol md="6" sm="12">
                            <ProcessComponent type={`SL`} />
                        </MDBCol>
                        <MDBCol md="6" sm="12">
                            <p>The logs serve as the structural support, the exterior and interior finish materials, and superior insulation--all in one. Due to settling considerations, upper floor gable walls and dormers consist of log posts infilled with conventionally framed walls.</p>
                            <p>The Log Connection specializes in hand crafted full sized logs (we do not machine mill "log kits" for the do-it-yourselfer.) The building methods implemented today are considerably more technical than that of the historical log cabin homes (gray weathered) seen scattered around the nation.</p>
                            <p>At The Log Connection our craftsmen apply log home building techniques of the highest standards. Each wall is entirely hand crafted with full length logs scribed and stacked to a standard height of 10'-6"+/- (3.2 m). During the stacking we employ careful details and components to ensure these log walls remain tight throughout the natural seasoning and settling process.</p>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
                <NextPageButton pageUrl={SLW_URL_PATH.DRY_AND_SET} pageName={SLW_TITLE.DRY_AND_SET} />
            </section>
        </>
    )

}

export default SLW_HomesPage;