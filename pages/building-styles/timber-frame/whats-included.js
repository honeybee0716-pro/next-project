import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import React from "react";
import STYLES from "../../../styles/building-styles/WhatsIncluded.module.scss";
import IMG_banner from "../../../assets/images/building-styles/timber-frame/tf_banner_1.jpg";
import IMG_tf_1 from "../../../assets/images/building-styles/timber-frame/whats-included/tf_wi_1.jpg";
import { TF_NAV_LIST, TF_TITLE, TF_URL_PATH, BUILDING_STYLES_DEFAULT_PATH, BUILDING_STYLES_CONST } from '../../../common/constants/buildingStyles';
import { BannerSection } from '../../../components/common/banner';
import { SubNavbar } from '../../../components/common/subNavbar';
import { NavigatorSection } from '../../../components/common/navigator';
import { NextPageButton } from '../../../components/common/buttons';
import { WiComponent } from '../../../components/building-styles/whatsIncluded';

const IMG_ROOT_BANNER = `${process.env.IMG_BASE_URL}/building-styles/banner/`;

const TF_WhatsIncludedPage = () => {

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

            <section className={STYLES.whatsIncluded}>
                <MDBContainer >
                    <MDBRow className={STYLES.section1} center>
                        <MDBCol md="6" className={STYLES.mainLeft}>
                            <MDBRow>
                                <MDBCol md="12" className={STYLES.mainTitleCont}><h3>What's Included in a Timber Frame Home Package</h3></MDBCol>
                                <MDBCol md="12" className={STYLES.mainDescription}>
                                    <p>The Log Connection supplies a <strong>complete timber frame</strong> similar to the one shown at right, which includes all the timber components, features, and services listed below. You will require a general contractor to finish your home to a "lock-up" or "turn-key" stage.</p>
                                </MDBCol>
                            </MDBRow>
                        </MDBCol>
                        <MDBCol md="6" className={STYLES.mainRight}>
                            <img src={IMG_tf_1} />
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
                <WiComponent type={`TF`} />
                <NextPageButton pageUrl={TF_URL_PATH.LS} pageName={TF_TITLE.LS} />
            </section>
        </>
    )
}

export default TF_WhatsIncludedPage;