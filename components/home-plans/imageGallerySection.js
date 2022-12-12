import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import P_STYLES from "../../styles/home-plans/ImageGallery.module.scss";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import {
  getHomePlan,
  getHomePlanImages,
} from "../../common/services/home-plans";
import Carousel from "react-grid-carousel";
import ReactPlayer from "react-player";
import PREV_BTN from "../../assets/images/common/media-left-arrow.png";
import NEXT_BTN from "../../assets/images/common/media-right-arrow.png";
import ANIMATION from "../../styles/Animation.module.scss";

const CarouselPrevBtn = () => {
  return (
    <div className={P_STYLES.carouseLeftBtn}>
      <img src={PREV_BTN} />
    </div>
  );
};

const CarouselNextBtn = () => {
  return (
    <div className={P_STYLES.carouselRightBtn}>
      <img src={NEXT_BTN} />
    </div>
  );
};

export const ImageGallerySection = () => {
  const router = useRouter();
  let planCode = router.query.plan;

  const [galleryData, setGalleryData] = useState([]);
  const [videoThumbnail, setVideoThumbnail] = useState({
    imageUrl: "",
    videoUrl: "",
    isPlaying: false,
  });
  const [activeItem, setActiveItem] = useState([]);

  useEffect(() => {
    getHomePlan(planCode)
      .then((data) => {
        if (data && data[0]) {
          console.log(data);
          getHomePlanImages(planCode)
            .then((images) => {
              setGalleryData(images);
              if (
                data[0].videoURL ||
                data[0].name == "Ambrosio" ||
                data[0].name == "Aspen Woods" ||
                data[0].name == "Bonavista" ||
                data[0].name == "Coldstream" ||
                data[0].name == "Powderhorn" ||
                data[0].name == "Woodridge"
              ) {
                setActiveItem({
                  url: data[0].videoURL,
                  type: "video",
                });
                // console.log("activeItem?.url", activeItem?.url);
                if (
                  (activeItem?.url == "" ||
                    activeItem?.url == undefined ||
                    activeItem?.url) &&
                  data[0].name == "Ambrosio"
                ) {
                  setActiveItem({
                    url: "https://www.youtube.com/watch?app=desktop&v=3DgPPhLirmE",
                    type: "video",
                  });
                }
                if (
                  (activeItem?.url == "" ||
                    activeItem?.url == undefined ||
                    activeItem?.url) &&
                  data[0].name == "Aspen Woods"
                ) {
                  setActiveItem({
                    url: "https://www.youtube.com/watch?app=desktop&v=jJehyYzemG4",
                    type: "video",
                  });
                }
                if (
                  (activeItem?.url == "" ||
                    activeItem?.url == undefined ||
                    activeItem?.url) &&
                  data[0].name == "Bonavista"
                ) {
                  setActiveItem({
                    url: "https://www.youtube.com/watch?app=desktop&v=GpKIE7GcbLQ%27-",
                    type: "video",
                  });
                }
                if (
                  (activeItem?.url == "" ||
                    activeItem?.url == undefined ||
                    activeItem?.url) &&
                  data[0].name == "Coldstream"
                ) {
                  setActiveItem({
                    url: "https://www.youtube.com/watch?app=desktop&v=z5TATAzPQGE",
                    type: "video",
                  });
                }
                if (
                  (activeItem?.url == "" ||
                    activeItem?.url == undefined ||
                    activeItem?.url) &&
                  data[0].name == "Powderhorn"
                ) {
                  setActiveItem({
                    url: "https://www.youtube.com/watch?app=desktop&v=T1Jo1PnCpfc",
                    type: "video",
                  });
                }
                if (
                  (activeItem?.url == "" ||
                    activeItem?.url == undefined ||
                    activeItem?.url) &&
                  data[0].name == "Woodridge"
                ) {
                  setActiveItem({
                    url: "youtube.com/watch?app=desktop&v=fQ8lCIWnKNI",
                    type: "video",
                  });
                }
                setVideoThumbnail({
                  imageUrl: data[0].imageUrl,
                  videoUrl: data[0].videoURL,
                  isPlaying: true,
                });
                if (data[0].name == "Ambrosio") {
                  setVideoThumbnail({
                    imageUrl: data[0].imageUrl,
                    videoUrl:
                      "https://www.youtube.com/watch?app=desktop&v=3DgPPhLirmE",
                    isPlaying: true,
                  });
                }
                if (data[0].name == "Aspen Woods") {
                  setVideoThumbnail({
                    imageUrl: data[0].imageUrl,
                    videoUrl:
                      "https://www.youtube.com/watch?app=desktop&v=jJehyYzemG4",
                    isPlaying: true,
                  });
                }
                if (data[0].name == "Bonavista") {
                  setVideoThumbnail({
                    imageUrl: data[0].imageUrl,
                    videoUrl:
                      "https://www.youtube.com/watch?app=desktop&v=GpKIE7GcbLQ%27-",
                    isPlaying: true,
                  });
                }
                if (data[0].name == "Coldstream") {
                  setVideoThumbnail({
                    imageUrl: data[0].imageUrl,
                    videoUrl:
                      "https://www.youtube.com/watch?app=desktop&v=z5TATAzPQGE",
                    isPlaying: true,
                  });
                }
                if (data[0].name == "Powderhorn") {
                  setVideoThumbnail({
                    imageUrl: data[0].imageUrl,
                    videoUrl:
                      "https://www.youtube.com/watch?app=desktop&v=T1Jo1PnCpfc",
                    isPlaying: true,
                  });
                }
                if (data[0].name == "Woodridge") {
                  setVideoThumbnail({
                    imageUrl: data[0].imageUrl,
                    videoUrl: "youtube.com/watch?app=desktop&v=fQ8lCIWnKNI",
                    isPlaying: true,
                  });
                }
                console.log("setVideoThumbnail", videoThumbnail);
              } else {
                setActiveItem({
                  imageUrl: images[0].imageUrl,
                  type: "image",
                  caption: images[0].caption,
                });
                setVideoThumbnail({
                  imageUrl: "",
                  videoUrl: "",
                  isPlaying: false,
                });
              }
            })
            .catch((err) => {
              return <h2>ERROR...</h2>;
            });
        }
      })
      .catch((err) => {
        return <h2>ERROR...</h2>;
      });
  }, [planCode]);
  // console.log("activeItem", activeItem);

  const onClickItem = (item) => {
    setActiveItem(item);
  };

  const onClickPlayBtn = (item) => {
    setVideoThumbnail({
      imageUrl: item.imageUrl,
      videoUrl: item.videoUrl,
      isPlaying: !item.isPlaying,
    });
    setActiveItem({
      url: item.videoUrl,
      type: "video",
      caption: item.caption,
    });
  };

  const customDot = ({ isActive }) => (
    <span
      style={{
        marginTop: "150px",
        display: "inline-block",
        height: isActive ? "10px" : "7px",
        width: isActive ? "10px" : "7px",
        background: isActive ? "yellow" : "white",
        borderRadius: "50%",
      }}
    ></span>
  );

  return (
    <section className={P_STYLES.galleryCont}>
      <MDBContainer className="mt-1">
        <div className={P_STYLES.gallery}>
          <MDBRow center>
            <MDBCol md="9" sm="12" lg="9" xl="9">
              <div className={P_STYLES.displayCont}>
                {activeItem.type === "video" ? (
                  <div className={P_STYLES.videoCont}>
                    <ReactPlayer
                      controls={true}
                      url={activeItem.url}
                      className="react-player"
                      playing={videoThumbnail.isPlaying}
                      width="100%"
                      height="100%"
                    />
                  </div>
                ) : (
                  <div
                    className={`${P_STYLES.imgDispCont} ${ANIMATION.fadeIn} m-3`}
                    key={new Date()}
                  >
                    <div className={P_STYLES.sectionLabel}>
                      {activeItem?.caption}
                    </div>
                    <div className={P_STYLES.imgCont}>
                      <img src={activeItem.imageUrl} />
                    </div>
                  </div>
                )}
              </div>
            </MDBCol>

            <MDBCol md="3" sm="12" lg="3" xl="3" className="p-0">
              {videoThumbnail && videoThumbnail.videoUrl ? (
                <div>
                  <div className={P_STYLES.sectionLabel}>Video</div>
                  <div className={P_STYLES.videoThumbnailCont}>
                    <img src={videoThumbnail?.imageUrl} />
                    <div
                      className={P_STYLES.playButton}
                      onClick={() => onClickPlayBtn(videoThumbnail)}
                    />
                  </div>
                </div>
              ) : (
                <p style={{ color: "white" }}>Videos will be uploaded soon</p>
              )}
              {galleryData && galleryData.length > 0 ? (
                <div>
                  <div className={P_STYLES.carouselCont}>
                    <div className={P_STYLES.sectionLabel}>Still Images</div>
                    <Carousel
                      arrowLeft={
                        galleryData.length && galleryData.length > 12 ? (
                          <CarouselPrevBtn />
                        ) : (
                          <></>
                        )
                      }
                      arrowRight={
                        galleryData.length && galleryData.length > 12 ? (
                          <CarouselNextBtn />
                        ) : (
                          <></>
                        )
                      }
                      cols={3}
                      rows={4}
                      gap={10}
                      loop
                      autoplay={10000}
                      dot={customDot}
                      showDots={
                        galleryData.length && galleryData.length > 12
                          ? true
                          : false
                      }
                      responsiveLayout={[
                        {
                          breakpoint: 767,
                          cols: 3,
                          rows: 1,
                          gap: 20,
                        },
                      ]}
                      mobileBreakpoint={320}
                    >
                      {galleryData.map((g, i) => (
                        <Carousel.Item key={i}>
                          <div className={P_STYLES.thumbnailCont}>
                            <img
                              src={g.imageUrl}
                              onClick={() => onClickItem(g)}
                            />
                          </div>
                        </Carousel.Item>
                      ))}
                    </Carousel>
                  </div>
                  <div className={P_STYLES.viewMoreCont}>
                    {galleryData.length && galleryData.length > 12 ? (
                      <div className={P_STYLES.viewMore}>View More</div>
                    ) : (
                      <></>
                    )}
                  </div>
                </div>
              ) : (
                <p style={{ color: "white" }}>Images will be uploaded soon</p>
              )}
            </MDBCol>
          </MDBRow>
        </div>
      </MDBContainer>
    </section>
  );
};

export default ImageGallerySection;
