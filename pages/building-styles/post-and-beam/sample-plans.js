import React from "react";
import STYLES from "../../../styles/BuildingStyles.module.scss";
import IMG_banner from "../../../assets/images/building-styles/post-and-beam/pb_banner_1.jpg";
import { PB_NAV_LIST, PB_TITLE, PB_URL_PATH, BUILDING_STYLES_DEFAULT_PATH, BUILDING_STYLES_CONST } from '../../../common/constants/buildingStyles';
import { BannerSection } from '../../../components/common/banner';
import { SubNavbar } from '../../../components/common/subNavbar';
import { NavigatorSection } from '../../../components/common/navigator';
import { SamplePlanComponent } from '../../../components/building-styles/samplePlan';
import { NextPageButton } from '../../../components/common/buttons';

const IMG_ROOT_BANNER = `${process.env.IMG_BASE_URL}/building-styles/banner/`;

const PB_SamplePlanPage = () => { 

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
            <section className={STYLES.defaultBg}>
                <SamplePlanComponent styleCode="PB"/>
                <NextPageButton pageUrl={`/home-plans`} pageName={`Go to Home Plans`} />
            </section>   
        </>
    )
}

export default PB_SamplePlanPage;