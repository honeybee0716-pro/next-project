import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import React from "react";
import PB_STYLES from "../../../styles/BuildingStylesPB.module.scss";
import IMG_banner from "../../../assets/images/building-styles/post-and-beam/pb_banner_1.jpg";
import IMG_das_1 from "../../../assets/images/building-styles/post-and-beam/delivery-and-setup/pb_das_1.jpg";
import IMG_das_2 from "../../../assets/images/building-styles/post-and-beam/delivery-and-setup/pb_das_2.jpg";
import IMG_das_3 from "../../../assets/images/building-styles/post-and-beam/delivery-and-setup/pb_das_3.jpg";
import { PB_NAV_LIST, PB_TITLE, BUILDING_STYLES_DEFAULT_PATH, BUILDING_STYLES_CONST, PB_URL_PATH } from '../../../common/constants/buildingStyles';
import { BannerSection } from '../../../components/common/banner';
import { SubNavbar } from '../../../components/common/subNavbar';
import { NavigatorSection } from '../../../components/common/navigator';
import { NextPageButton, RedirectButton } from '../../../components/common/buttons';
import { DasGallery } from '../../../components/building-styles/dasGallery';

const IMG_ROOT_BANNER = `${process.env.IMG_BASE_URL}/building-styles/banner/`;
const PB_DeliveryAndSetupPage = () => {
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

            <section className={PB_STYLES.deliveryAndSetup}>
                <MDBContainer>
                    <MDBRow className={PB_STYLES.section1}>
                        <MDBCol md="6" sm="12" className={PB_STYLES.left}>
                            <h3>Post & Beam Delivery and Assembly</h3>
                            <p>Before shipping to your site, the log home is completed as a free standing structure at The Log Connection build site. This process ensures each piece of your home has been properly fit and has passed our quality control examination.</p>
                            <p>Each of our handcrafted log homes is extensively checked and rechecked before ever being considered complete. When the final sanding and clean up of the structure is complete, each log is tagged with an identifying number. Then the log shell is dismantled and loaded onto trailers or into containers ready for transportation.</p>
                            <p>During this initial log home build, your general contractor will simultaneously prepare your foundation and sub-floor at your build site. When the sub-floor is ready, the completed hand crafted log shell package can be delivered.</p>
                            <p>Typically the log package re-assembly begin on a Monday. The delivery of the log home package is accompanied by at least one Log Connection technical advisor that will be with you for the entire stacking of the log home package and to further advise and assist your general contactor in the re-assembly.</p>
                        </MDBCol>
                        <MDBCol md="6" sm="12" className={PB_STYLES.right}>
                            <div className={PB_STYLES.imgCont}>
                                <img src={IMG_das_1} />
                            </div>
                            <div className={PB_STYLES.btnCont}>
                                <RedirectButton url={PB_URL_PATH.WI} label={PB_TITLE.WI} />
                            </div>
                        </MDBCol>
                    </MDBRow>
                    <MDBRow className={PB_STYLES.section2}>
                        <MDBCol md="6" sm="12" lg="6">
                            <h4>Pre Delivery Preparation</h4>
                            <MDBRow>
                                <MDBCol md="6" lg="5" sm="12">
                                    <div className={PB_STYLES.deliveryImgCont}>
                                        <img src={IMG_das_2} />
                                    </div>
                                </MDBCol>
                                <MDBCol md="6" lg="7" sm="12">
                                    <div className={PB_STYLES.deliveryDetailsCont}>
                                        <h5>Pre Delivery Services:</h5>
                                        <p>
                                            – Full visual inspection of all logs during tagging and numbering. <br />
                                            – Final spot sanding and cleanup of logs before shipping.<br />
                                            – Apply non-hazardous wood treatment to prepare for staining, maintain color and deter mold and fungus growth. <br />
                                        </p>
                                    </div>
                                </MDBCol>
                            </MDBRow>
                        </MDBCol>
                        <MDBCol md="6" sm="12" lg="6">
                            <h4>Delivery Advisor</h4>
                            <MDBRow>
                                <MDBCol md="6" lg="5" sm="12">
                                    <div className={PB_STYLES.deliveryImgCont}>
                                        <img src={IMG_das_3} />
                                    </div>
                                </MDBCol>
                                <MDBCol md="6" lg="7" sm="12">
                                    <div className={PB_STYLES.deliveryDetailsCont}>
                                        <h5>Every Log Connection home includes on site technical assistance for the re-assembly of the log package. Advisor will assist with:</h5>
                                        <p>
                                            – Pre-erection review <br />
                                            – Installation of log roof members. <br />
                                            – Finishing on site detail work <br />
                                            – After re-assembly of the shell, consult with your general contractor to ensure a full understanding of the framing and finishing details required for a log home. <br />
                                        </p>
                                    </div>
                                </MDBCol>
                            </MDBRow>
                        </MDBCol>
                    </MDBRow>      
                </MDBContainer>
                {/* <DasGallery/> */}
                <NextPageButton pageUrl={PB_URL_PATH.WI} pageName={PB_TITLE.WI}/>
            </section>
        </>
    )

} 

export default PB_DeliveryAndSetupPage;