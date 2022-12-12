import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import React from "react";
import STYLES from "../../../styles/building-styles/WhatsIncluded.module.scss";
import IMG_wi_1 from "../../../assets/images/building-styles/stacked-log-walls/whats-included/slw_wi_1.jpg";
import { SLW_NAV_LIST, SLW_TITLE, SLW_URL_PATH, BUILDING_STYLES_DEFAULT_PATH, BUILDING_STYLES_CONST } from '../../../common/constants/buildingStyles';
import { BannerSection } from '../../../components/common/banner';
import { SubNavbar } from '../../../components/common/subNavbar';
import { NavigatorSection } from '../../../components/common/navigator';
import { NextPageButton } from '../../../components/common/buttons';
import { WiComponent } from '../../../components/building-styles/whatsIncluded';

const IMG_ROOT = `${process.env.IMG_BASE_URL}/building-styles/stacked-log/`;
const IMG_ROOT_BANNER = `${process.env.IMG_BASE_URL}/building-styles/banner/`;

const SLW_WhatsIncludedPage = () => {

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

            <section className={STYLES.whatsIncluded}>
                <MDBContainer >
                    <MDBRow className={STYLES.section1} center>
                        <MDBCol md="6" className={STYLES.mainLeft}>
                            <MDBRow>
                                <MDBCol md="12" className={STYLES.mainTitleCont}><h3>What's Included in a Stacked Log Shell Package</h3></MDBCol>
                                <MDBCol md="12" className={STYLES.mainDescription}>
                                    {/* <p>The Log Connection supplies a <strong>complete stacked log shell</strong> as shown at right, which includes all the log components and features listed below. You will require a general contractor to finish your home to a "lock-up" or "turn-key" stage.</p> */}
                                    <p>The Log Connection supplies a complete stacked log shell, similar to the first illustration below (click the Log Shell link). You will require a general contractor to finish your home to a <strong>Dry-In</strong> or <strong>Complete</strong> ("turn-key") stage</p>

                                </MDBCol>
                            </MDBRow>
                        </MDBCol>
                        <MDBCol md="6" className={STYLES.mainRight}>
                            <img src={IMG_wi_1} />
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>

                <WiComponent type={`SL`} />
                <NextPageButton pageUrl={SLW_URL_PATH.HOMES} pageName={SLW_TITLE.SP} />
            </section>
        </>
    )
}

export default SLW_WhatsIncludedPage;