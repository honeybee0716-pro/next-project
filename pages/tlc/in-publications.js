import React, { useState, useEffect, version } from "react";
import { BannerSection } from '../../components/common/banner';
import { SubNavbar } from '../../components/common/subNavbar';
import { TLC_NAVBAR } from '../../common/constants/tlc';
import TLC_STYLES from '../../styles/tlc/TLC.module.scss';
import COMMON_STYLES from '../../styles/Common.module.scss';
import { MDBContainer, MDBModal, MDBModalBody, MDBModalHeader, MDBRow, MDBCol } from "mdbreact";

const IMG_BANNER_FILE_ROOT = `${process.env.IMG_BASE_URL}/tlc-monthly/banner/`;
const IMG_TLC_MAGAZINE_FILE_ROOT = `${process.env.IMG_BASE_URL}/tlc-monthly/magazines/`;
const PDF_TLC_MAGAZINE_FILE_ROOT = `${process.env.IMG_BASE_URL}/tlc-monthly/magazines/`;
const IMG_TLC_MAGAZINE_FILE_ROOT_THUMB = `${process.env.IMG_BASE_URL}/tlc-monthly/magazines/_thumbs/`;
const IMG_TLC_MAGAZINE_FILE_ROOT_ORIGINAL = `${process.env.IMG_BASE_URL}/tlc-monthly/magazines/_images/`;

const MAGAZINE = [
  {
    coverPageImgUrl: `${IMG_TLC_MAGAZINE_FILE_ROOT}magazine-1/LHL-2011-BH-cover.jpg`,
    pdfLink: `${PDF_TLC_MAGAZINE_FILE_ROOT}magazine-1/LHL-BestHomesOf2011.pdf`,
    pagesImgUrl: [
      `${IMG_TLC_MAGAZINE_FILE_ROOT}magazine-1/LHL-2011-BH-Story-1.jpg`,
      `${IMG_TLC_MAGAZINE_FILE_ROOT}magazine-1/LHL-2011-BH-Story-2.jpg`,
      `${IMG_TLC_MAGAZINE_FILE_ROOT}magazine-1/LHL-2011-BH-Story-3.jpg`,
      `${IMG_TLC_MAGAZINE_FILE_ROOT}magazine-1/LHL-2011-BH-Story-4.jpg`,
      `${IMG_TLC_MAGAZINE_FILE_ROOT}magazine-1/LHL-2011-BH-Story-5.jpg`,
      `${IMG_TLC_MAGAZINE_FILE_ROOT}magazine-1/LHL-2011-BH-Story-6.jpg`
    ],
    blurb: (
      <div>
        Log Home Living Best Homes of the Year 2011
        <br />
        <br />
        <i>"An angled layout lets this California retreat take full advantage of its woodland surroundings ..."</i>
        <br />
        <br />
        This is a special issue of Log Home Living devoted to their choices for best homes of the year. Titled "11 Showcase Homes to Inspire Every Dream", this issue is a true collectors's item...
      </div>
    )
  },
  {
    coverPageImgUrl: `${IMG_TLC_MAGAZINE_FILE_ROOT}magazine-2/001-b.jpg`,
    pdfLink: `${PDF_TLC_MAGAZINE_FILE_ROOT}magazine-2/Basile-3.pdf`,
    pagesImgUrl: [
      `${IMG_TLC_MAGAZINE_FILE_ROOT}magazine-2/002.jpg`,
      `${IMG_TLC_MAGAZINE_FILE_ROOT}magazine-2/003.jpg`,
      `${IMG_TLC_MAGAZINE_FILE_ROOT}magazine-2/004.jpg`,
      `${IMG_TLC_MAGAZINE_FILE_ROOT}magazine-2/005.jpg`,
      `${IMG_TLC_MAGAZINE_FILE_ROOT}magazine-2/006.jpg`,
      `${IMG_TLC_MAGAZINE_FILE_ROOT}magazine-2/007.jpg`,
      `${IMG_TLC_MAGAZINE_FILE_ROOT}magazine-2/008.jpg`,
      `${IMG_TLC_MAGAZINE_FILE_ROOT}magazine-2/009.jpg`,
      `${IMG_TLC_MAGAZINE_FILE_ROOT}magazine-2/010.jpg`,
      `${IMG_TLC_MAGAZINE_FILE_ROOT}magazine-2/011.jpg`
    ],
    blurb: (
      <div>
        LOG HOME LIVING June 2010
        <br />
        <br />
        <i>"Richard and Debbie Basile say their log home is like a beacon of serenity..."</i>
        <br />
        <br />
        In a lushly photographed ten-page article, Log Home Living magazine describes how Richard, an avid fisherman, found the perfect lot on a northern California river he had known since childhood. They then worked with us to customize our Pinecrest plan to create the perfect log home getaway in the Sierra Mountains...
      </div>
    )
  },
  {
    coverPageImgUrl: `${IMG_TLC_MAGAZINE_FILE_ROOT}magazine-3/Horn-cover.jpg`,
    pdfLink: `${PDF_TLC_MAGAZINE_FILE_ROOT}magazine-3/Article-Horn-2.pdf`,
    pagesImgUrl: [
      `${IMG_TLC_MAGAZINE_FILE_ROOT}magazine-3/Horn-01.jpg`,
      `${IMG_TLC_MAGAZINE_FILE_ROOT}magazine-3/Horn-02.jpg`,
      `${IMG_TLC_MAGAZINE_FILE_ROOT}magazine-3/Horn-03.jpg`,
      `${IMG_TLC_MAGAZINE_FILE_ROOT}magazine-3/Horn-04.jpg`,
      `${IMG_TLC_MAGAZINE_FILE_ROOT}magazine-3/Horn-05.jpg`,
      `${IMG_TLC_MAGAZINE_FILE_ROOT}magazine-3/Horn-06.jpg`,
      `${IMG_TLC_MAGAZINE_FILE_ROOT}magazine-3/Horn-07.jpg`,
      `${IMG_TLC_MAGAZINE_FILE_ROOT}magazine-3/Horn-08.jpg`,
      `${IMG_TLC_MAGAZINE_FILE_ROOT}magazine-3/Horn-09.jpg`,
      `${IMG_TLC_MAGAZINE_FILE_ROOT}magazine-3/Horn-10.jpg`,

    ],
    blurb: (
      <div>
        LOG HOME LIVING Feb. 2010
        <br />
        <br />
        <i>"A California couple pitches in to build their Georgia post & beam home..."</i>
        <br />
        <br />
        Janis Horn fell for the post and beam style by visiting a log home under construction. Starting from our Westbury plan, she and her son (who would build the home) worked with our designers to create a dream retirement home for their lakeside lot in Hiawassee, Georgia...
      </div>
    )
  },
  {
    coverPageImgUrl: `${IMG_TLC_MAGAZINE_FILE_ROOT}magazine-4/LHL-Miller-cover.jpg`,
    pdfLink: `${PDF_TLC_MAGAZINE_FILE_ROOT}magazine-4/LHL-Article-Miller.pdf`,
    pagesImgUrl: [
      `${IMG_TLC_MAGAZINE_FILE_ROOT}magazine-4/LHL-Miller-1.jpg`,
      `${IMG_TLC_MAGAZINE_FILE_ROOT}magazine-4/LHL-Miller-2.jpg`,
      `${IMG_TLC_MAGAZINE_FILE_ROOT}magazine-4/LHL-Miller-3.jpg`,
      `${IMG_TLC_MAGAZINE_FILE_ROOT}magazine-4/LHL-Miller-4.jpg`,
      `${IMG_TLC_MAGAZINE_FILE_ROOT}magazine-4/LHL-Miller-5.jpg`,
      `${IMG_TLC_MAGAZINE_FILE_ROOT}magazine-4/LHL-Miller-6.jpg`,
      `${IMG_TLC_MAGAZINE_FILE_ROOT}magazine-4/LHL-Miller-7.jpg`,
      `${IMG_TLC_MAGAZINE_FILE_ROOT}magazine-4/LHL-Miller-8.jpg`

    ],
    blurb: (
      <div>
        LOG HOME LIVING Feb. 2004
        <br />
        <br />
        <i>"A New Jersey couple creates an old-fashioned looking log home that fits seamlessly into the surrounding historic community..."</i>
        <br />
        <br />
        This home, based on our Adirondac design, was built in Cooperstown, New York. The story describes how the owners initally bought a house built from a machine-milled log package, only to realize what they really wanted was a hand crafted home. So they contracted us to design their dream getaway.
      </div>
    )
  }
]

const MAGAZINE_LHL = [
  {
    label: `Log Home Living, July 2011`,
    thumbUrl: `${IMG_TLC_MAGAZINE_FILE_ROOT_THUMB}LHL-2011-07-cover.jpg`,
    pages: [
      `${IMG_TLC_MAGAZINE_FILE_ROOT_ORIGINAL}LHL-2011-07-ad.jpg`,
    ]
  },
  {
    label: `Log Home Living, July 2011`,
    thumbUrl: `${IMG_TLC_MAGAZINE_FILE_ROOT_THUMB}LHL-2011-06-cover.jpg`,
    pages: [
      `${IMG_TLC_MAGAZINE_FILE_ROOT_ORIGINAL}LHL-2011-06-ad.jpg`,
      `${IMG_TLC_MAGAZINE_FILE_ROOT_ORIGINAL}LHL-2011-06-ad2.jpg`
    ]
  },
  {
    label: `Log Home Living Homes of the Year`,
    thumbUrl: `${IMG_TLC_MAGAZINE_FILE_ROOT_THUMB}LHL-2011-BH-cover.jpg`,
    pages: [
      `${IMG_TLC_MAGAZINE_FILE_ROOT_ORIGINAL}LHL-2011-BH-ad.jpg`
    ]
  },
  {
    label: `Log Home Living, May 2011`,
    thumbUrl: `${IMG_TLC_MAGAZINE_FILE_ROOT_THUMB}LHL-2011-04-cover.jpg`,
    pages: [
      `${IMG_TLC_MAGAZINE_FILE_ROOT_ORIGINAL}LHL-2011-04-ad.jpg`
    ]
  },
  {
    label: `Log Home Living, March 2011`,
    thumbUrl: `${IMG_TLC_MAGAZINE_FILE_ROOT_THUMB}LHL-2011-03-cover.jpg`,
    pages: [
      `${IMG_TLC_MAGAZINE_FILE_ROOT_ORIGINAL}LHL-2011-03-ad.jpg`
    ]
  }

]

const MAGAZINE_SP = [
  {
    label: `DREAM HOME SHOWCASE, SUMMER 2011`,
    thumbUrl: `${IMG_TLC_MAGAZINE_FILE_ROOT_THUMB}DHS-2011-06-cover.jpg`,
    pages: [
      `${IMG_TLC_MAGAZINE_FILE_ROOT_ORIGINAL}DHS-2011-06-ad.jpg`
    ]
  },
  {
    label: `New Publication: LOG CABIN HOMES, JULY 2010`,
    thumbUrl: `${IMG_TLC_MAGAZINE_FILE_ROOT_THUMB}LCH-2010-07-cover.jpg`,
    pages: [
      `${IMG_TLC_MAGAZINE_FILE_ROOT_ORIGINAL}LCH-2010-07-ad.jpg`,
    ]
  },
  {
    label: `DREAM HOME SHOWCASE, SUMMER 2010`,
    thumbUrl: `${IMG_TLC_MAGAZINE_FILE_ROOT_THUMB}DHS-2010-10-cover.jpg`,
    pages: [
      `${IMG_TLC_MAGAZINE_FILE_ROOT_ORIGINAL}DHS-2010-10-ad.jpg`,
      `${IMG_TLC_MAGAZINE_FILE_ROOT_ORIGINAL}DHS-2010-10-ad2.jpg`
    ]
  },
  {
    label: `DREAM CABIN SHOWCASE, SPRING 2010`,
    thumbUrl: `${IMG_TLC_MAGAZINE_FILE_ROOT_THUMB}DHS-2010-05-cover.jpg`,
    pages: [
      `${IMG_TLC_MAGAZINE_FILE_ROOT_ORIGINAL}DHS-2010-05-ad.jpg`,
      `${IMG_TLC_MAGAZINE_FILE_ROOT_ORIGINAL}DHS-2010-05-ad2.jpg`
    ]
  }
]

const MAGAZINE_CB = [
  {
    label: `Country's Best Log Homes, July 2010`,
    thumbUrl: `${IMG_TLC_MAGAZINE_FILE_ROOT_THUMB}CBL-2010-07-cover.jpg`,
    pages: [
      `${IMG_TLC_MAGAZINE_FILE_ROOT_ORIGINAL}CBL-2010-07-ad.jpg`
    ]
  },
  {
    label: `2010 Cozy Cabins`,
    thumbUrl: `${IMG_TLC_MAGAZINE_FILE_ROOT_THUMB}LCH-2010-07-cover.jpg`,
    pages: [
      `${IMG_TLC_MAGAZINE_FILE_ROOT_ORIGINAL}CBL-2010-06-ad.jpg`
    ]
  },
  {
    label: `Country's Best Log Homes, May 2010`,
    thumbUrl: `${IMG_TLC_MAGAZINE_FILE_ROOT_THUMB}CBL-2010-05-cover.jpg`,
    pages: [
      `${IMG_TLC_MAGAZINE_FILE_ROOT_ORIGINAL}CBL-2010-05-ad.jpg`
    ]
  },
  {
    label: `Country's Best Log Homes, March 2010`,
    thumbUrl: `${IMG_TLC_MAGAZINE_FILE_ROOT_THUMB}CBL-2010-03-cover.jpg`,
    pages: [
      `${IMG_TLC_MAGAZINE_FILE_ROOT_ORIGINAL}CBL-2010-03-ad.jpg`
    ]
  },
  {
    label: `Country's Best Log Homes, 2010 Buyer's Guide`,
    thumbUrl: `${IMG_TLC_MAGAZINE_FILE_ROOT_THUMB}CBL-2010-Annual-cover.jpg`,
    pages: [
      `${IMG_TLC_MAGAZINE_FILE_ROOT_ORIGINAL}CBL-2010-Annual-ad.jpg`
    ]
  }
]


const InPublicationsPage = () => {

  const [state, setState] = useState({ modal: false });

  const toggle = (d) => {
    setState({
      modal: !state.modal,
      item: d
    });
  }

  return (
    <>
      <BannerSection img={`${IMG_BANNER_FILE_ROOT}tlc_banner_1.jpg`} />
      {/* <SubNavbar navBarItems={TLC_NAVBAR} header={"Our Projects Featured in Publications"} /> */}
      <SubNavbar navBarItems={TLC_NAVBAR} header={""} />
      <section className={TLC_STYLES.inPublications}>
        <MDBContainer className="px-5">
          <MDBRow center>
            <MDBCol md="12">
              <div className="pt-5">
                <p className={`${TLC_STYLES.header} ${TLC_STYLES.borderBtm}`}>CLICK COVER IMAGE TO VIEW FULL FEATURE</p>
              </div>
            </MDBCol>
            <MDBCol md="12">
              {MAGAZINE.map((mag, i) => (
                <div className={`${TLC_STYLES.magazineCont}`} key={i} >
                  <div className={`${TLC_STYLES.blurbCont} mt-3`}>
                    <div className={`${TLC_STYLES.blurb}`}>{mag.blurb}</div>
                  </div>

                  <div className={`${TLC_STYLES.pagesCont} mb-5`}>
                    <div className={`${TLC_STYLES.coverPage} mr-3`}>
                      <a href={mag.pdfLink}>
                        <img src={mag.coverPageImgUrl} />
                      </a>
                    </div>

                    {mag.pagesImgUrl.map((m, i) => (
                      <div key={i} className={`${TLC_STYLES.pages} m-2`}>
                        <img src={m} />
                      </div>
                    ))}

                  </div>
                </div>
              ))}
            </MDBCol>
          </MDBRow>

        </MDBContainer>

        <section className={TLC_STYLES.published}>
          <MDBContainer className="py-5 px-2">
            <MDBRow>
              <MDBCol md="12">
                <div className={`${TLC_STYLES.magHeader} text-left`}>The Log Connection in Publications</div>
              </MDBCol>
            </MDBRow>
            <MDBRow center>
              <MDBCol md="12">
                <div className="mt-2">
                  <div className={`${TLC_STYLES.magSubHeader} text-center`}>LOG HOME LIVING GALLERY OF HOMES</div>
                  <div className={COMMON_STYLES.divider} />
                </div>
              </MDBCol>
            </MDBRow>
            <MDBRow center>
              {MAGAZINE_LHL.map((m, i) => (
                <MDBCol key={i} onClick={() => toggle(m)}>
                  <div className={`${TLC_STYLES.magCont} my-0 text-center`}>
                    <div className={`${TLC_STYLES.label} text-center`}>{m.label}</div>
                    <div className={`${TLC_STYLES.imgCont}`}>
                      <img src={m.thumbUrl} />
                    </div>
                  </div>
                </MDBCol>
              ))}
            </MDBRow>
            <MDBRow center>
              <MDBCol md="12">
                <div className="pt-5">
                  <div className={`${TLC_STYLES.magSubHeader} text-center`}>LOG HOME LIVING GALLERY OF HOMES</div>
                  <div className={COMMON_STYLES.divider} />
                </div>
              </MDBCol>
            </MDBRow>
            <MDBRow center>
              {MAGAZINE_SP.map((m, i) => (
                <MDBCol key={i} onClick={() => toggle(m)}>
                  <div className={`${TLC_STYLES.magCont} my-0 text-center`}>
                    <div className={`${TLC_STYLES.label} text-center`}>{m.label}</div>
                    <div className={`${TLC_STYLES.imgCont}`}>
                      <img src={m.thumbUrl} />
                    </div>
                  </div>
                </MDBCol>
              ))}
            </MDBRow>
            <MDBRow center>
              <MDBCol md="12">
                <div className="pt-5">
                  <div className={`${TLC_STYLES.magSubHeader} text-center`}>LOG HOME LIVING GALLERY OF HOMES</div>
                  <div className={COMMON_STYLES.divider} />
                </div>
              </MDBCol>
            </MDBRow>
            <MDBRow center>
              {MAGAZINE_CB.map((m, i) => (
                <MDBCol key={i} onClick={() => toggle(m)}>
                  <div className={`${TLC_STYLES.magCont} my-0 text-center`}>
                    <div className={`${TLC_STYLES.label} text-center`}>{m.label}</div>
                    <div className={`${TLC_STYLES.imgCont}`}>
                      <img src={m.thumbUrl} />
                    </div>
                  </div>
                </MDBCol>
              ))}
            </MDBRow>
          </MDBContainer>
          <MDBModal isOpen={state.modal} toggle={toggle} className={TLC_STYLES.modal}>
            <MDBModalHeader toggle={toggle}><strong>{state?.item?.label}</strong></MDBModalHeader>
            <MDBModalBody>
              {state?.item?.pages?.map((p, i) => (<img src={p} />))}
            </MDBModalBody>
          </MDBModal>
        </section>
      </section>

    </>
  );
}

export default InPublicationsPage;

