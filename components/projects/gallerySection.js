import { MDBContainer, MDBRow, MDBCol } from 'mdbreact';
import React, { useState, useEffect } from 'react';
import Carousel from 'react-grid-carousel';
import ReactPlayer from 'react-player';
import STYLES from "../../styles/projects/ProjectsDetails.module.scss";
import { getProjectDetails } from "../../common/services/projects";
import { useRouter } from "next/router";
import { CarouselPrevBtn, CarouselNextBtn} from "../../components/common/buttons";
import ANIMATION from "../../styles/Animation.module.scss";

export const ProjectGallerySection = () => {
  
  const router = useRouter();
  let projectCode = router.query.project;

  const [activeItem, setActiveItem] = useState({
    type: "images",
    url: "",
  });
  const [galleryData, setGalleryData] = useState([]);

  const onClickItem = (item) => {
    let x = {
      type: item.type,
      url: item.imageUrl,
      caption: item.label
    }
    setActiveItem(x);
  }


  useEffect(() => {
    getProjectDetails(projectCode).then((data) => {
      if (data && data.photos) {
        let x = {
          type: data.photos[0].sectionItems[0].subSectionItems[0].type,
          url: data.photos[0].sectionItems[0].subSectionItems[0].imageUrl,
          caption: data.photos[0].sectionItems[0].subSectionItems[0].label
        } 
        setActiveItem(x);
        setGalleryData(data.photos);
      } else {
        return (
          <h2>ERROR...</h2>
        )
      }
    }).catch((err) => {
      return (
        <h2>ERROR...</h2>
      )
    });
  }, [projectCode]);

  return (
    <section className={STYLES.gallerySection}>
      <MDBContainer>
        <div className={STYLES.gallery}>
          <MDBRow center>
            <MDBCol md="7" sm="12" lg="7" xl="7">
              <div className={STYLES.displayCont}>
                {activeItem.type === 'video' ?
                  <ReactPlayer url={activeItem.url} className="react-player" playing={true} width="100%" height="100%" />
                  :
                  <div className={`${STYLES.imageCont} ${ANIMATION.fadeIn}`} key={new Date()}>
                    <div className={STYLES.sectionLabel}>{activeItem?.caption}</div>
                    <img src={activeItem.url} />
                  </div>}
              </div>
            </MDBCol>

            <MDBCol md="5" sm="12" lg="5" xl="5" style={{ padding: 0 }}>
              <div className={STYLES.carouselCont}>
                {galleryData.map((d, i) => (
                  <div key={i}>
                    <div className={STYLES.sectionLabel}>{d.sectionName}</div>
                    {d.sectionItems.map((a, b) => (    
                      <div key={b}>
                       <div className={STYLES.subSectionLabel}>{a.subSectionName}</div>               
                      <Carousel
                        arrowLeft={<CarouselPrevBtn />}
                        arrowRight={<CarouselNextBtn />}
                        cols={3}
                        rows={a.subSectionItems.length > 3 ? 2 : 1}
                        gap={20}
                        responsiveLayout={[
                          {
                            breakpoint: 767,
                            cols: 4,
                            rows: 1,
                            gap: 20
                          }
                        ]}
                        mobileBreakpoint={320}>   
                       
                        {a.subSectionItems.map((c, d) => (
                          <Carousel.Item key={d}>
                            <div className={STYLES.thumbnailCont}>
                              <img src={c.thumbnailUrl} alt={c.label} onClick={() => onClickItem(c)} />
                            </div>
                           
                          </Carousel.Item>
                        ))}
                      </Carousel>
                      </div>
                    ))}

                  </div>

                ))}
              </div>
            </MDBCol>

          </MDBRow>
        </div>
      </MDBContainer>
      </section>
  )

}