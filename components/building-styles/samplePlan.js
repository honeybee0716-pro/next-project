import React, { useEffect, useState } from "react";
import STYLES from '../../styles/building-styles/SamplePlan.module.scss';
import COMMON_STYLES from '../../styles/Common.module.scss';
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import Zoom from "react-reveal/Zoom";

const IMG_THUMB_FILE_ROOT = `${process.env.IMG_BASE_URL}/building-styles/plans-showcase/thumbs/`;
const PDF_FILE_ROOT = `${process.env.IMG_BASE_URL}/building-styles/plans-showcase/`;


const PB_TITLE_DESC = [
    {
        title: `Sample Plan Set: Post and Beam Log Home`,
        desc: (<div>This set of plans is for a custom post and beam log home in Florida.</div>)
    }
]

const STACKED_TITLE_DESC = [
    {
        title: `Sample Plan Set: Stacked Log Home`,
        desc: (<div>The home design shown below was originally prepared for a building site in Northern California with a 220 lbs. snow load and "Zone 4" seismic requirements. The following files include the detailed drawings required to comply with the engineering requirements of that site.</div>)
    }
]

const PB_SAMPLE_PLANS = [
    {
        label: 'Exterior Elevations',
        thumbUrl: `${IMG_THUMB_FILE_ROOT}pb-1.gif`,
        pdfUrl: `${PDF_FILE_ROOT}pb-1.pdf`
    },
    {
        label: 'Exterior Elevations',
        thumbUrl: `${IMG_THUMB_FILE_ROOT}pb-2.gif`,
        pdfUrl: `${PDF_FILE_ROOT}pb-2.pdf`
    },
    {
        label: 'Foundation Plan',
        thumbUrl: `${IMG_THUMB_FILE_ROOT}pb-3.gif`,
        pdfUrl: `${PDF_FILE_ROOT}pb-3.pdf`
    },
    {
        label: 'Main Floor Plan',
        thumbUrl: `${IMG_THUMB_FILE_ROOT}pb-4.gif`,
        pdfUrl: `${PDF_FILE_ROOT}pb-4.pdf`
    },
    {
        label: 'Upper Floor Plan',
        thumbUrl: `${IMG_THUMB_FILE_ROOT}pb-5.gif`,
        pdfUrl: `${PDF_FILE_ROOT}pb-5.pdf`
    },
    {
        label: 'Sections and Details',
        thumbUrl: `${IMG_THUMB_FILE_ROOT}pb-6.gif`,
        pdfUrl: `${PDF_FILE_ROOT}pb-6.pdf`
    },
    {
        label: 'Details',
        thumbUrl: `${IMG_THUMB_FILE_ROOT}pb-7.gif`,
        pdfUrl: `${PDF_FILE_ROOT}pb-7.pdf`
    },
    {
        label: 'Electrical Layout Plans',
        thumbUrl: `${IMG_THUMB_FILE_ROOT}pb-8.gif`,
        pdfUrl: `${PDF_FILE_ROOT}pb-8.pdf`
    },
    {
        label: 'Main Post and Upper Joist Plan',
        thumbUrl: `${IMG_THUMB_FILE_ROOT}pb-9.gif`,
        pdfUrl: `${PDF_FILE_ROOT}pb-9.pdf`
    },
    {
        label: 'Roof Plan and Cross Sections',
        thumbUrl: `${IMG_THUMB_FILE_ROOT}pb-10.gif`,
        pdfUrl: `${PDF_FILE_ROOT}pb-10.pdf`
    },
    {
        label: 'Cross Sections',
        thumbUrl: `${IMG_THUMB_FILE_ROOT}pb-11.gif`,
        pdfUrl: `${PDF_FILE_ROOT}pb-11.pdf`
    },
    {
        label: 'Cross Sections',
        thumbUrl: `${IMG_THUMB_FILE_ROOT}pb-12.gif`,
        pdfUrl: `${PDF_FILE_ROOT}pb-12.pdf`
    },
]

const STACKED_SAMPLE_PLANS = [
    {
        label: 'Exterior Elevations',
        thumbUrl: `${IMG_THUMB_FILE_ROOT}a1.gif`,
        pdfUrl: `${PDF_FILE_ROOT}a1.pdf`
    },
    {
        label: 'Exterior Elevations',
        thumbUrl: `${IMG_THUMB_FILE_ROOT}a2.gif`,
        pdfUrl: `${PDF_FILE_ROOT}a2.pdf`
    },
    {
        label: 'Foundation Plan',
        thumbUrl: `${IMG_THUMB_FILE_ROOT}a3.gif`,
        pdfUrl: `${PDF_FILE_ROOT}a3.pdf`
    },
    {
        label: 'Main Floor Joist Plan',
        thumbUrl: `${IMG_THUMB_FILE_ROOT}a4.gif`,
        pdfUrl: `${PDF_FILE_ROOT}a4.pdf`
    },
    {
        label: 'Main Floor Plan',
        thumbUrl: `${IMG_THUMB_FILE_ROOT}a5.gif`,
        pdfUrl: `${PDF_FILE_ROOT}a5.pdf`
    },
    {
        label: 'Upper Floor Joist Plan',
        thumbUrl: `${IMG_THUMB_FILE_ROOT}a6.gif`,
        pdfUrl: `${PDF_FILE_ROOT}a6.pdf`
    },
    {
        label: 'Upper Floor Plan',
        thumbUrl: `${IMG_THUMB_FILE_ROOT}a7.gif`,
        pdfUrl: `${PDF_FILE_ROOT}a7.pdf`
    },
    {
        label: 'Roof Framing Plan',
        thumbUrl: `${IMG_THUMB_FILE_ROOT}a8.gif`,
        pdfUrl: `${PDF_FILE_ROOT}a8.pdf`
    },
    {
        label: 'Cross Sections',
        thumbUrl: `${IMG_THUMB_FILE_ROOT}a9.gif`,
        pdfUrl: `${PDF_FILE_ROOT}a9.pdf`
    },
    {
        label: 'Cross Sections',
        thumbUrl: `${IMG_THUMB_FILE_ROOT}a10.gif`,
        pdfUrl: `${PDF_FILE_ROOT}a10.pdf`
    },
    {
        label: 'Cross Sections',
        thumbUrl: `${IMG_THUMB_FILE_ROOT}a11.gif`,
        pdfUrl: `${PDF_FILE_ROOT}a11.pdf`
    },
    {
        label: 'Electrical Layout Plans',
        thumbUrl: `${IMG_THUMB_FILE_ROOT}a12.gif`,
        pdfUrl: `${PDF_FILE_ROOT}a12.pdf`
    },
    {
        label: 'Additional Details',
        thumbUrl: `${IMG_THUMB_FILE_ROOT}a13.gif`,
        pdfUrl: `${PDF_FILE_ROOT}a13.pdf`
    }
]

const STACKED_SHOP_DRAWINGS = [
    {
        label: 'Key Plan & Log Wall Elevations',
        thumbUrl: `${IMG_THUMB_FILE_ROOT}w1.gif`,
        pdfUrl: `${PDF_FILE_ROOT}w1.pdf`
    },
    {
        label: 'Log Wall Elevations',
        thumbUrl: `${IMG_THUMB_FILE_ROOT}w2.gif`,
        pdfUrl: `${PDF_FILE_ROOT}w2.pdf`
    },
    {
        label: 'Log Wall Elevations',
        thumbUrl: `${IMG_THUMB_FILE_ROOT}w3.gif`,
        pdfUrl: `${PDF_FILE_ROOT}w3.pdf`
    },
    {
        label: 'Log Wall Elevations',
        thumbUrl: `${IMG_THUMB_FILE_ROOT}w4.gif`,
        pdfUrl: `${PDF_FILE_ROOT}w4.pdf`
    },
    {
        label: 'Log Wall Elevations',
        thumbUrl: `${IMG_THUMB_FILE_ROOT}w5.gif`,
        pdfUrl: `${PDF_FILE_ROOT}w5.pdf`
    }
]


export const SamplePlanComponent = (props) => {

    const [detailsArr, setDetailsArr] = useState([]);
    const [shopDrawingsArr, setShopDrawings] = useState([]);
    const [content, setContent] = useState([]);

    useEffect(() => {
        switch (props?.styleCode) {
            case 'PB':
                setDetailsArr(PB_SAMPLE_PLANS);
                break;
            case 'Stacked':
                setDetailsArr(STACKED_SAMPLE_PLANS);
                setShopDrawings(STACKED_SHOP_DRAWINGS);
                break;
        }
    }, []);

    useEffect(() => {
        switch (props?.styleCode) {
            case 'PB':
                setContent(PB_TITLE_DESC);
                break;
            case 'Stacked':
                setContent(STACKED_TITLE_DESC);
                break;
        }
    }, []);

    return (
        <section className={STYLES.samplePlans}>
            <MDBContainer>
                <MDBRow className={`${STYLES.blurb} px-5`}>
                    <MDBCol>
                        <div className={`${STYLES.title} text-justify`}>{content[0]?.title}</div>
                        <div className={`${STYLES.desc} text-justify`}>{content[0]?.desc}</div>
                        <div className={`${STYLES.adobe} my-3`}>Click on an image to see the drawing in a separate window. These drawings are in Adobe Acrobat format and require the Adobe Reader plug-in to view; click <a href="https://www.adobe.com/" target="_blank">here</a> to download (it's free). </div>
                    </MDBCol>
                </MDBRow>

                <MDBRow className={`${STYLES.planCont} pt-3 pb-5`}>
                    {detailsArr.map((d, i) => (

                        <MDBCol key={i} md="3" sm="12">
                            <Zoom>
                                <div className={`${STYLES.card} m-3 mt-4`}>
                                    <a href={d.pdfUrl} target="_blank">
                                        <img src={d.thumbUrl} />
                                    </a>
                                    <div className={`${STYLES.label} text-center p-1`}>{d.label}</div>
                                </div>
                            </Zoom>
                        </MDBCol>

                    ))}
                </MDBRow>

                {shopDrawingsArr && shopDrawingsArr.length > 0 ?
                    <MDBRow center className={`${STYLES.blurb} m-3`}>
                        <MDBCol md="12" sm="12"><div className={COMMON_STYLES.divider} /></MDBCol>
                        <MDBCol md="12" sm="12">
                            <div className={`${STYLES.desc} text-center mx-5`}>The following are examples of shop drawings, prepared for internal use by Log Connection craftsmen, and are not provided to the client or their contractor.
                            </div>
                        </MDBCol>
                    </MDBRow> :
                    (<></>)}

                <MDBRow className={`${STYLES.planCont} pt-3 pb-5`}>
                    {shopDrawingsArr.map((d, i) => (
                        <MDBCol key={i} md="3" sm="12">
                            <div className={`${STYLES.card} m-3 mt-4`}>
                                <a href={d.pdfUrl} target="_blank">
                                    <img src={d.thumbUrl} />
                                </a>
                                <div className={`${STYLES.label} text-center p-1`}>{d.label}</div>
                            </div>
                        </MDBCol>
                    ))}
                </MDBRow>

            </MDBContainer>
        </section>
    )
}
