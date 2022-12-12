import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import React from "react";
import SLW_STYLES from "../../../styles/BuildingStylesSLW.module.scss";
import IMG_stairCase from "../../../assets/images/building-styles/stacked-log-walls/drying-and-settling/stair-landing-space.jpg";
import IMG_wallFrame from "../../../assets/images/building-styles/stacked-log-walls/drying-and-settling/wall-frame-lagbolted.jpg";
import IMG_screwJack from "../../../assets/images/building-styles/stacked-log-walls/drying-and-settling/screwjack-atwindow.jpg";
import IMG_window1 from "../../../assets/images/building-styles/stacked-log-walls/drying-and-settling/trims-windows-finished.jpg";
import IMG_window2 from "../../../assets/images/building-styles/stacked-log-walls/drying-and-settling/window-bucks.jpg";
import IMG_window3 from "../../../assets/images/building-styles/stacked-log-walls/drying-and-settling/window-spline.jpg";
import { SLW_NAV_LIST, SLW_TITLE, SLW_URL_PATH, BUILDING_STYLES_DEFAULT_PATH, BUILDING_STYLES_CONST } from '../../../common/constants/buildingStyles';
import { BannerSection } from '../../../components/common/banner';
import { SubNavbar } from '../../../components/common/subNavbar';
import { NavigatorSection } from '../../../components/common/navigator';
import { NextPageButton } from '../../../components/common/buttons';

const IMG_ROOT = `${process.env.IMG_BASE_URL}/building-styles/stacked-log/`;
const IMG_ROOT_BANNER = `${process.env.IMG_BASE_URL}/building-styles/banner/`;

const SLW_DryingAndSettlingPage = () => {
 
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
            <section className={SLW_STYLES.dryAndSet}>
                <MDBContainer className={SLW_STYLES.section1} >
                    <MDBRow>
                        <MDBCol md="12" sm="12" className={SLW_STYLES.descCont}>
                            <h3>Drying and Settling of Stacked Log Walls</h3>
                            <p>First off: all log homes shrink (yes, even the ones that are kiln dried).</p>
                            <p>It is important to note that this shrinkage is only measurable across the wood grain and not along its length. Wood is a beautiful and versatile natural material with many advantages: it is renewable, it has great strength, it is easily shaped, and it has good thermal insulating properties. A living tree has a high moisture content, and after being felled it immediately starts releasing it into the dryer ambient air, causing shrinkage.</p>
                            <p>For framing lumber, "kiln drying" is a common method of "speeding up this process" so the wood can be used sooner after being harvested. Kiln drying can also be used for full logs, although it adds a large expense and it is debatable whether the finished product is as good or stable as an air dried log. Note that even kiln dried wood exposed to the outside air will continue to expand and contract somewhat with seasonal changes in humidity.</p>
                            <p>The Log Connection takes all of the guess work out of shrinkage. The stacked log walls are typically load bearing walls supporting the upper floor and roof system. As the log walls shrinks, the upper floor and roof will settle downwards naturally by themselves. We provide the blueprints and technical details to accommodate each unique settling situation of the structure.</p>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
                <MDBContainer className={SLW_STYLES.section2} >
                    <MDBRow className={SLW_STYLES.subSection}>
                        <MDBCol md="7" className={SLW_STYLES.detailsCont}>
                            <h3>Staircases</h3>
                            <p>As the upper floor settles, any flight of stairs attached to it will tend to move laterally against the floor or structure below.</p>
                            <p>In our homes, we account for this by building the upper flight of the staircase as a single unit, and letting it sit un-attached on the stair landing (or on the main floor if there is no landing). We also allow a few inches of room at the bottom for the log stringer to move.</p>
                        </MDBCol>
                        <MDBCol md="5" >
                            <div className={SLW_STYLES.imgCont}><img src={IMG_stairCase} /></div>                   
                            <p className={SLW_STYLES.caption}>Upper stair sits on landing with room to move</p>
                        </MDBCol>
                    </MDBRow>
                    <MDBRow className={SLW_STYLES.subSection}>
                        <MDBCol md="7" className={SLW_STYLES.detailsCont}>
                            <h3>Frame Walls</h3>
                            <p>Framed walls do not shrink appreciably even if they are constructed of wood, because the length of the studs and plates is along (parallel to) the wood grain rather than across it (perpendicular). Therefore some settling space must be allowed above the frame wall.</p>
                            <p>The tops of the walls must then be secured by a connection that is free to move vertically; typically by the use of lag bolts driven through holes drilled in the top plates. Finally the settling space is concealed by a slip trim attached to the underside of the upper floor.</p>
                        </MDBCol>
                        <MDBCol md="5">
                            <div className={SLW_STYLES.imgCont}><img src={IMG_wallFrame} /></div>  
                            <p className={SLW_STYLES.caption}>Frame wall lag bolted to floor joists above</p>
                        </MDBCol>
                    </MDBRow>
                    <MDBRow className={SLW_STYLES.subSection}>
                        <MDBCol md="7" className={SLW_STYLES.detailsCont}>
                            <h3>Supporting Posts & Screw Jacks</h3>
                            <p>Wherever posts--whether log, or timber, or manufactured--support the upper floor structure, they also must be attached using a system that can accommodate settling. Typically this is done using screw jacks, which must be adjusted periodically--usually every few months during the first year, and once a year for the next couple of years.</p>
                            <p>Whether the screw jack is located above or below the post, allowance must also be made for access to make the adjustment.</p>
                        </MDBCol>
                        <MDBCol md="5">
                            <div className={SLW_STYLES.imgCont}><img src={IMG_screwJack} /></div>  
                            <p className={SLW_STYLES.caption}>Screw jack over log post</p>
                        </MDBCol>
                    </MDBRow>
                    <MDBRow className={SLW_STYLES.subSection}>
                        <MDBCol md="7" className={SLW_STYLES.detailsCont}>
                            <h3>Windows</h3>
                            <p>Similarly, windows require special treatment. Our technique is to build a frame consisting of 2x8 pieces, or "bucks", into which the window will be installed in a similar manner to a common stick-framed house.</p>
                            <p>The bottom buck is fastened to the wall sill log, but the side bucks are not attached to the logs. Instead a steel angle spline is attached to the side buck, and the angle fits snugly into a vertical slot cut into the ends of the wall logs. The wall logs can then move vertically without affecting the window buck. Also a settling space is allowed above the top buck, and both this space and the steel angle are concealed by slip trims, which are attached to the bucks and can slide against the wall logs.</p>
                        </MDBCol>
                        <MDBCol md="5">
                            <div className={SLW_STYLES.imgCont}><img src={IMG_window1} /></div>  
                            <p className={SLW_STYLES.caption}>Finished slip trims neatly conceal settling space</p>
                        </MDBCol>
                    </MDBRow>
                    <MDBRow className={SLW_STYLES.subSection}>
                        <MDBCol md="6">
                            <div className={SLW_STYLES.imgCont}><img src={IMG_window2} /></div>  
                            <p className={SLW_STYLES.caption}>Steel angle installed</p>
                        </MDBCol>
                        <MDBCol md="6">
                            <div className={SLW_STYLES.imgCont}><img src={IMG_window3} /></div>  
                            <p className={SLW_STYLES.caption}>Windows in 2x8 frames before slip trim installation</p>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
                <NextPageButton pageUrl={SLW_URL_PATH.OS} pageName={SLW_TITLE.OS} />
            </section>
        </>
    )
}

export default SLW_DryingAndSettlingPage;