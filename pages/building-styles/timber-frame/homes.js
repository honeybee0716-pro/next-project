import React from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import TF_STYLES from "../../../styles/BuildingStylesTF.module.scss";
import IMG_banner from "../../../assets/images/building-styles/timber-frame/tf_banner_1.jpg";
import IMG_home_1 from "../../../assets/images/building-styles/timber-frame/homes/tf_home_1.jpg";
import { TF_NAV_LIST, TF_TITLE, TF_URL_PATH, BUILDING_STYLES_DEFAULT_PATH, BUILDING_STYLES_CONST } from '../../../common/constants/buildingStyles';
import { BannerSection } from '../../../components/common/banner';
import { SubNavbar } from '../../../components/common/subNavbar';
import { NavigatorSection } from '../../../components/common/navigator';
import { NextPageButton } from '../../../components/common/buttons';
import { ProcessComponent } from '../../../components/building-styles/process';

const IMG_ROOT_BANNER = `${process.env.IMG_BASE_URL}/building-styles/banner/`;

const TF_HomesPage = () => {
    return (
        <>
            <BannerSection img={`${IMG_ROOT_BANNER}banner.jpg`}/>
            <SubNavbar navBarItems={TF_NAV_LIST} header={BUILDING_STYLES_CONST.TF_HEADER_LABEL} />
            <NavigatorSection
                hrefPrev={BUILDING_STYLES_DEFAULT_PATH.STACKED_LOG_WALLS_DEFAULT}
                hrefNext={BUILDING_STYLES_DEFAULT_PATH.POST_AND_BEAM_DEFAULT}
                prevLabel={BUILDING_STYLES_CONST.SLW_HEADER_LABEL}
                nextLabel={BUILDING_STYLES_CONST.PB_HEADER_LABEL}>
            </NavigatorSection>

            <section id="main_section_homes" className={TF_STYLES.homes} >
                <MDBContainer >
                    <MDBRow className={TF_STYLES.section1} center>
                        <MDBCol md="6" className={TF_STYLES.mainLeft}>
                            <MDBRow>
                                <MDBCol md="12" className={TF_STYLES.mainTitleCont}><h3 >TIMBER FRAME HOMES</h3></MDBCol>
                                <MDBCol md="12" className={TF_STYLES.mainDescription}>
                                    <p>A squared timber frame features square cut timber posts and beams, typically featuring detailed knee braces and traditional joinery.</p>
                                    <p>The Log Connection supplies a complete timber frame shell, similar to the first illustration below (click the Timber Shell link). You will require a general contractor to finish your home to a Dry-In or Complete ("turn-key") stage.</p>
                                </MDBCol>
                            </MDBRow>
                        </MDBCol>
                        <MDBCol md="6" className={TF_STYLES.mainRight}>
                            <img src={IMG_home_1} />
                        </MDBCol>
                    </MDBRow>

                    <MDBRow className={TF_STYLES.section3}>
                        <MDBCol md="6" sm="12">
                            <ProcessComponent type={`TF`} />
                        </MDBCol>
                        <MDBCol md="6" sm="12">
                            <p>Structurally timber frame is similar to the round log post and beam style, where the entire structure consists of posts and beams, and the weather envelope is completed by framed walls. However visually it is quite different, as the natural irregularities of the log are removed when it is cut to a square shape.</p>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
                <NextPageButton pageUrl={TF_URL_PATH.TRAD} pageName={TF_TITLE.TRAD} />
            </section>
        </>
    )


}

export default TF_HomesPage;