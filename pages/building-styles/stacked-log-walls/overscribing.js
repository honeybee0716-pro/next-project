import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import React from "react";
import SLW_STYLES from "../../../styles/BuildingStylesSLW.module.scss";
import IMG_os_1 from "../../../assets/images/building-styles/stacked-log-walls/overscribe/overscribe.jpg";
import IMG_osAfter from "../../../assets/images/building-styles/stacked-log-walls/overscribe/overscribe-after.gif";
import IMG_osBefore from "../../../assets/images/building-styles/stacked-log-walls/overscribe/overscribe-before.gif";
import { SLW_NAV_LIST, SLW_TITLE, SLW_URL_PATH, BUILDING_STYLES_DEFAULT_PATH, BUILDING_STYLES_CONST } from '../../../common/constants/buildingStyles';
import { BannerSection } from '../../../components/common/banner';
import { SubNavbar } from '../../../components/common/subNavbar';
import { NavigatorSection } from '../../../components/common/navigator';
import { NextPageButton } from '../../../components/common/buttons';

const IMG_ROOT = `${process.env.IMG_BASE_URL}/building-styles/stacked-log/`;
const IMG_ROOT_BANNER = `${process.env.IMG_BASE_URL}/building-styles/banner/`;

const SLW_OverscribingPage = () => {

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

            <section id="main_section_overScribe" className={SLW_STYLES.overScribe}>
                <MDBContainer className={SLW_STYLES.section1}>
                    <MDBRow>
                        <MDBCol md="6">
                            <h3>The Overscribe Advantage</h3>
                            <p>Tightly fit notches are the heart of your log structure. They resist any twisting that may occur in the wall logs, maintain the structural integrity of the home and prevent air infiltration. Chinking and caulking can prevent air infiltration but are not appealing substitutes for the tight fitting notches and joinery which characterize the handcrafted log masterpiece you have chosen as your home.</p>
                            <p>What you see today may not be what you see in the future if your builder neglects to employ the complete overscribe technique. Every Log Connection home is built using the Overscribe method to ensure that your home maintains its natural beauty and handcrafted character for years to come.</p>
                        </MDBCol>
                        <MDBCol md="6" className={SLW_STYLES.right}>
                            <div className={SLW_STYLES.imgCont}>
                                <img src={IMG_os_1} />
                            </div>
                        </MDBCol>
                    </MDBRow>

                </MDBContainer>
                <MDBContainer >
                    <MDBRow center className={SLW_STYLES.section2}>
                        <MDBCol md="12">
                            <h3>How the Overscribe Works</h3>
                            <p>The location where two adjacent wall logs make contact is called the lateral groove. It provides the connection between logs and accommodates our All-Weather Barrier gasket. The careful detailing and precise crafting of this groove is essential to maintain a tight seal.</p>
                            <p>Overscribing is a technique in which a slightly larger space is initially created between the wall logs along the lateral groove than that of the corner notches. A shrinkage relief is cut into the top of each corner notch allowing it to bear 100% of the log wall weight. As the logs dry and shrink in diameter, the log above settles into the shrinkage relief, and the overscribe of the lateral groove closes, bringing all the scribed surfaces into full contact. The bearing load is now equally shared between the notch and the lateral groove. This method yields a weather tight seal that will last for generations.</p>
                        </MDBCol>
                        <MDBCol md="3" />
                        <MDBCol md="6">
                            <div className={SLW_STYLES.imgCont}>
                                <img src={IMG_osBefore} />
                                <img src={IMG_osAfter} />
                            </div>
                        </MDBCol>
                        <MDBCol md="3" />
                    </MDBRow>
                </MDBContainer>
                <NextPageButton pageUrl={SLW_URL_PATH.NAT} pageName={SLW_TITLE.NAT} />
            </section>
        </>
    )
}

export default SLW_OverscribingPage;