import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import SLW_STYLES from "../../../styles/BuildingStylesSLW.module.scss";
import IMG_das_1 from "../../../assets/images/building-styles/stacked-log-walls/delivery-and-setup/slw_das_1.jpg";
import IMG_das_2 from "../../../assets/images/building-styles/stacked-log-walls/delivery-and-setup/slw_das_2.jpg";
import IMG_das_3 from "../../../assets/images/building-styles/stacked-log-walls/delivery-and-setup/slw_das_3.jpg";
import { SLW_NAV_LIST, SLW_TITLE, SLW_URL_PATH, BUILDING_STYLES_DEFAULT_PATH, BUILDING_STYLES_CONST } from '../../../common/constants/buildingStyles';
import { BannerSection } from '../../../components/common/banner';
import { SubNavbar } from '../../../components/common/subNavbar';
import { NavigatorSection } from '../../../components/common/navigator';
import { NextPageButton, RedirectButton } from '../../../components/common/buttons';
import { DasGallery } from '../../../components/building-styles/dasGallery';

const IMG_ROOT = `${process.env.IMG_BASE_URL}/building-styles/stacked-log/`;
const IMG_ROOT_BANNER = `${process.env.IMG_BASE_URL}/building-styles/banner/`;

const SLW_DeliveryAndSetupPage = () => {
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
           
            <section className={SLW_STYLES.deliveryAndSetup}>
                <MDBContainer >
                    <MDBRow className={SLW_STYLES.section1}>
                        <MDBCol md="6" sm="12" className={SLW_STYLES.left}>
                            <h3>DELIVERY AND ASSEMBLY OF A STACKED LOG HOME</h3>
                            <p>Before shipping to your site, the log home is completed as a free standing structure at The Log Connection build site. This process ensures each piece of your home has been properly fit and has passed our quality control examination.</p>
                            <p>Each of our handcrafted log homes is extensively checked and verified before ever being considered complete. When the final sanding and clean up of the structure is complete, each log is tagged with an identifying number. Then the log shell is dismantled and loaded onto trailers or into containers ready for transportation.</p>
                            <p>While we are conctructing you log package, your general contractor will simultaneously prepare your foundation and sub-floor at your build site. When the sub-floor is ready, the completed hand crafted log shell package can be delivered and re-assembled with the help of a crane and small crew.</p>
                            <p>Typically the log package re-assembly begin on a Monday. The delivery of the log home package is accompanied by at least one Log Connection technical advisor that will be with you for the entire stacking of the log home package and to further advise and assist your general contactor in the re-assembly.</p>
                        </MDBCol>
                        <MDBCol md="6" sm="12" className={SLW_STYLES.right}>
                            <div className={SLW_STYLES.imgCont}>
                                <img src={IMG_das_1} />
                            </div>
                            <div className={SLW_STYLES.btnCont}>
                                <RedirectButton url={SLW_URL_PATH.WI} label={SLW_TITLE.WI}/>
                            </div>
                        </MDBCol>
                    </MDBRow>
                    <MDBRow className={`${SLW_STYLES.section2} mt-5`} >
                        <MDBCol md="6" sm="12" lg="6">
                            <h4>Pre Delivery Preparation</h4>
                            <MDBRow>
                                <MDBCol md="6" lg="5" sm="12">
                                    <div className={SLW_STYLES.deliveryImgCont}>
                                        <img src={IMG_das_2} />
                                    </div>
                                </MDBCol>
                                <MDBCol md="6" lg="7" sm="12">
                                    <div className={SLW_STYLES.deliveryDetailsCont}>
                                        <h5>Before the log package is shipped:</h5>
                                        <p>
                                            – Final visual inspection of all logs during tagging and numbering. <br />
                                            – Final spot sanding and cleanup of logs before shipping. <br />
                                            – Apply non-hazardous wood treatment to prepare for staining, maintain color and deter mold. <br />
                                            – Coordinate trucking and transportation  <br />
                                            – Prepare customs and Boarder Protection Documents and provide them to the customs broker. (for pre-inspection)  <br />
                                        </p>
                                    </div>
                                </MDBCol>
                            </MDBRow>

                        </MDBCol>
                        <MDBCol md="6" sm="12" lg="6">
                            <h4>Technical Assembly Advisor</h4>
                            <MDBRow>
                                <MDBCol md="6" lg="5" sm="12">
                                    <div className={SLW_STYLES.deliveryImgCont}>
                                        <img src={IMG_das_3} />
                                    </div>
                                </MDBCol>
                                <MDBCol md="6" lg="7" sm="12">
                                    <div className={SLW_STYLES.deliveryDetailsCont}>
                                        <h5>A technical assistant is provided for the log re-assembly</h5>
                                        <p>– Pre-erection review <br />
                                            – Placement of bottom round, anchorage to foundation <br />
                                            – Stacking of log walls <br />
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
                <DasGallery filter={`SL`}/>
                <NextPageButton pageUrl={SLW_URL_PATH.WI} pageName={SLW_TITLE.WI} />
            </section>
        </>
    )
}

export default SLW_DeliveryAndSetupPage;