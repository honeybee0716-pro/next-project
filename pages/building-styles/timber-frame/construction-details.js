import React from "react";
import TF_STYLES from "../../../styles/BuildingStylesTF.module.scss";
import IMG_banner from "../../../assets/images/building-styles/timber-frame/tf_banner_1.jpg";
import { TF_NAV_LIST, TF_TITLE, TF_URL_PATH, BUILDING_STYLES_DEFAULT_PATH, BUILDING_STYLES_CONST } from '../../../common/constants/buildingStyles';
import { BannerSection } from '../../../components/common/banner';
import { SubNavbar } from '../../../components/common/subNavbar';
import { NavigatorSection } from '../../../components/common/navigator';
import { ConstructionDetailsComponent } from '../../../components/building-styles/constructionDetails';
import { NextPageButton } from '../../../components/common/buttons';

const IMG_ROOT_BANNER = `${process.env.IMG_BASE_URL}/building-styles/banner/`;

const TF_ConstructionDetailsPage = () => {

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
            <section className={TF_STYLES.constructionDetails}>
                <ConstructionDetailsComponent styleCode="Timber" title="Timber Frame Homes Detail Drawings" />
                <NextPageButton pageUrl={TF_URL_PATH.HOMES} pageName={TF_TITLE.HOMES} />
            </section>

        </>
    )
}

export default TF_ConstructionDetailsPage;