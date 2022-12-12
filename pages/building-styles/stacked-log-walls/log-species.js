import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import React from "react";
import SLW_STYLES from "../../../styles/BuildingStylesSLW.module.scss";
import { SLW_NAV_LIST, SLW_TITLE, SLW_URL_PATH, BUILDING_STYLES_DEFAULT_PATH, BUILDING_STYLES_CONST } from '../../../common/constants/buildingStyles';
import { BannerSection } from '../../../components/common/banner';
import { SubNavbar } from '../../../components/common/subNavbar';
import { NavigatorSection } from '../../../components/common/navigator';
import IMG_logspecies_1 from "../../../assets/images/building-styles/stacked-log-walls/log-species/slw_ls_1.jpg";
import IMG_card_1 from "../../../assets/images/building-styles/stacked-log-walls/log-species/slw_ls_card_douglasFir.jpg";
import IMG_card_2 from "../../../assets/images/building-styles/stacked-log-walls/log-species/slw_ls_card_engelmannSpruce.jpg";
import IMG_card_3 from "../../../assets/images/building-styles/stacked-log-walls/log-species/slw_ls_card_westernRedCedar.jpg";
import { NextPageButton } from '../../../components/common/buttons';
import { LogSpeciesModal } from '../../../components/building-styles/logSpecies';

const IMG_ROOT = `${process.env.IMG_BASE_URL}/building-styles/stacked-log/`;
const IMG_ROOT_BANNER = `${process.env.IMG_BASE_URL}/building-styles/banner/`;

const SLW_LogSpeciesPage = () => {

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

            <section id="main_section_logSpecies" className={SLW_STYLES.logSpecies}>
                <MDBContainer className={SLW_STYLES.section1} >
                    <MDBRow>
                        <MDBCol md="6" className={SLW_STYLES.leftCont}>
                            <div className={SLW_STYLES.mainImgCont}><img src={IMG_logspecies_1} /></div>
                        </MDBCol>
                        <MDBCol md="6" className={SLW_STYLES.rightCont}>
                            <h3>Log Species for Stacked Log Homes</h3>
                            <p>Our location in the interior of British Columbia, Canada provides a selection of home building logs unsurpassed worldwide. Only premium quality logs are hand selected from trees growing at high elevations. These trees experience slower growth rates, resulting in a higher structural value due to tighter annual growth rings. In addition to strength, each log is hand selected based on straightness of grain and consistency of size.</p>
                            <p>Our most requested species for log walls is Engelmann Spruce due to its bright color, large diameter, and minimal taper. With an exterior sealant, all log species will provide exceptional long term durability for generations to enjoy.</p>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
                <MDBContainer >
                    <MDBRow className={SLW_STYLES.section2} >
                        <MDBCol md="4" sm="12">
                            <div className={SLW_STYLES.card}>
                                <img src={IMG_card_1} />
                                <h4>Douglas Fir</h4>
                                <p>Douglas Fir is a very strong wood with a rich reddish heartwood. Generally tight growth rings, straight grain, medium heavy with good resistance to mildew and fungus.</p>
                                <p>Due to its high strength, Fir is a perfect choice for both wall logs and beams and joists. Its weight may make transportation costs slightly higher.</p>
                                <LogSpeciesModal logSpecie={'DF'} />
                            </div>
                        </MDBCol>
                        <MDBCol md="4" sm="12">
                            <div className={SLW_STYLES.card}>
                                <img src={IMG_card_2} />
                                <h4>Engelmann Spruce</h4>
                                <p>Spruce displays a nearly white heartwood with a slight tinge of red. It has generally straight grain and has moderately small shrinkage. Spruce logs have a high thermal value and low maintenance requirements; plus they are light in weight which keeps transportation costs lower.</p>
                                <p>Generally, we only recommend spruce for wall logs, and we recommend Douglas Fir for roof and upper floor beams due to its superior structural strength. These two species complement each other in appearance when used in this combination.</p>
                                <LogSpeciesModal logSpecie={'ES'} />
                            </div>
                        </MDBCol>
                        <MDBCol md="4" sm="12">
                            <div className={SLW_STYLES.card}>
                                <img src={IMG_card_3} />
                                <h4>Western Red Cedar</h4>
                                <p>Western Red Cedar has a reddish to dull brown heartwood. It is very resistant to decay, and features generally straight grains with uniform texture. Other advantages are low shrinkage and light weight. Cedar is moderately soft, and provides low strength when used as beams</p>
                                <p>Generally, we recommend Douglas Fir for roof and upper floor beams due to its superior structural strength. In practice, the two species complement each other especially when finished similarly.</p>
                                <LogSpeciesModal logSpecie={'WRC'} />
                            </div>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
                <NextPageButton pageUrl={SLW_URL_PATH.DAS} pageName={SLW_TITLE.DAS} />
            </section>
        </>
    )
}

export default SLW_LogSpeciesPage;