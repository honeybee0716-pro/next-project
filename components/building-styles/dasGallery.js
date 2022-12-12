import React, { useState, useEffect } from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import Carousel from "react-grid-carousel";
import ReactPlayer from "react-player";
import STYLES from "../../styles/building-styles/Das.module.scss";
import PREV_BTN from "../../assets/images/common/media-left-arrow.png";
import NEXT_BTN from "../../assets/images/common/media-right-arrow.png";
import ANIMATION from "../../styles/Animation.module.scss";
import {
  getStillImages,
  getTechVids,
  getTimelapseVids,
} from "../../common/services/building-styles";
import { ScrollIntoView } from "../../components/common/scrollIntoView";
import { Waypoint } from "react-waypoint";
const IMG_ROOT_SL = `${process.env.IMG_BASE_URL}/building-styles/delivery-and-setup/stacked-log/`;

const CarouselPrevBtn = () => {
  return (
    <div className={STYLES.carouseLeftBtn}>
      <img src={PREV_BTN} />
    </div>
  );
};

const CarouselNextBtn = () => {
  return (
    <div className={STYLES.carouselRightBtn}>
      <img src={NEXT_BTN} />
    </div>
  );
};

export const DasGallery = (props) => {
  let filter = props.filter;

  const [stillImages, setStillImages] = useState();
  const [timelapseVids, setTimelapseVideos] = useState([]);
  const [techVids, setTechVids] = useState([]);
  const [videoThumb, setvideoThumb] = useState({
    imageUrl: "",
    videoUrl: "",
    isPlaying: true,
  });
  const [activeItem, setActiveItem] = useState([]);

  const onClickItem = (item) => {
    setActiveItem(item);
  };

  const onClickPlayBtn = (item, isPlaying) => {
    if (item && item.videoUrl != videoThumb.videoUrl) {
      setvideoThumb({
        imageUrl: item.thumbUrl,
        videoUrl: item.videoUrl,
        isPlaying: true,
      });
    } else {
      setvideoThumb({
        imageUrl: item.thumbUrl,
        videoUrl: item.videoUrl,
        isPlaying: !isPlaying,
      });
    }

    console.log(videoThumb);
    setActiveItem({
      url: item.videoUrl,
      type: "video",
    });
  };

  useEffect(() => {
    getTimelapseVids(filter).then((data) => {
      setTimelapseVideos(data);
      setvideoThumb({
        imageUrl: data[0].thumbUrl,
        videoUrl: data[0].videoUrl,
        isPlaying: true,
      });
      setActiveItem({
        url: data[0].videoUrl,
        type: "video",
      });
    });
  }, [filter]);

  useEffect(() => {
    getTechVids(filter).then((data) => {
      setTechVids(data);
    });
  }, [filter]);

  useEffect(() => {
    getStillImages(filter).then((data) => {
      setStillImages(data);
    });
  }, [filter]);

  const handleEnterViewport = function () {
    if (activeItem && activeItem.type === "video") {
      setvideoThumb({ ...videoThumb, isPlaying: true });
      console.log("enterViewPort", videoThumb);
    }
  };
  const handleExitViewport = function () {
    console.log("exitviewport");
    if (activeItem && activeItem.type === "video") {
      setvideoThumb({ ...videoThumb, isPlaying: false });
      console.log("enterViewPort", videoThumb);
    }
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
    <div>
      <ScrollIntoView mode="hash" />
      <MDBContainer className={`${STYLES.dasGallery} mt-5 py-5 px-2`}>
        <MDBRow>
          <MDBCol className={STYLES.displayCont} md="8">
            {activeItem.type === "video" ? (
              <div className={`${STYLES.vidCont} ${ANIMATION.fadeIn}`}>
                <Waypoint
                  onEnter={handleEnterViewport}
                  onLeave={handleExitViewport}
                >
                  <span>
                    <ReactPlayer
                      controls={true}
                      url={activeItem.url}
                      className="react-player"
                      playing={videoThumb.isPlaying}
                      width="100%"
                      height="100%"
                    />
                  </span>
                </Waypoint>
              </div>
            ) : (
              <div
                className={`${STYLES.imgCont} ${ANIMATION.fadeIn}`}
                key={new Date()}
              >
                <img src={`${IMG_ROOT_SL}${activeItem.imgName}`} />
              </div>
            )}
            <div className={`${STYLES.caption} text-center`}>
              {activeItem?.caption}
            </div>
          </MDBCol>
          <MDBCol className={`${STYLES.listCont} pb-3`} md="4">
            {timelapseVids && timelapseVids.length > 0 ? (
              <div>
                <div className={`${STYLES.sectionLabel}`}>Timelapse Video</div>
                <div className={`${STYLES.timeLapse}`}>
                  {timelapseVids.map((tv, i) => (
                    <div className={`${STYLES.videoThumbCont} p-2`} key={i}>
                      <img src={tv.thumbUrl} />
                      <div
                        className={STYLES.playButton}
                        onClick={() => onClickPlayBtn(tv, videoThumb.isPlaying)}
                      />
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <></>
            )}
            {techVids && techVids.length > 0 ? (
              <div>
                <div className={`${STYLES.sectionLabel}`}>Technical Video</div>
                <div className={`${STYLES.technical}`}>
                  {techVids.map((tv, i) => (
                    <div
                      className={`${STYLES.videoThumbCont} ${STYLES.technical} p-2`}
                      key={i}
                    >
                      <img src={tv.thumbUrl} />
                      <div
                        className={STYLES.playButton}
                        onClick={() => onClickPlayBtn(tv, videoThumb.isPlaying)}
                      />
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <></>
            )}
            {stillImages && stillImages.length > 0 ? (
              <div>
                <div className={`${STYLES.sectionLabel} pb-2`}>
                  Still Images
                </div>
                <Carousel
                  arrowLeft={
                    stillImages.length && stillImages.length > 12 ? (
                      <CarouselPrevBtn />
                    ) : (
                      <></>
                    )
                  }
                  arrowRight={
                    stillImages.length && stillImages.length > 12 ? (
                      <CarouselNextBtn />
                    ) : (
                      <></>
                    )
                  }
                  cols={3}
                  rows={2}
                  gap={15}
                  loop
                  autoplay={10000}
                  dot={customDot}
                  emulateTouch={true}
                  autoPlay={true}
                  showDots={
                    stillImages.length && stillImages.length > 12 ? true : false
                  }
                  responsiveLayout={[
                    {
                      breakpoint: 767.98,
                      cols: 6,
                      rows: 2,
                      gap: 15,
                    },
                    {
                      breakpoint: 575.98,
                      cols: 3,
                      rows: 2,
                      gap: 10,
                    },
                  ]}
                  mobileBreakpoint={320}
                >
                  {stillImages.map((g, i) => (
                    <Carousel.Item key={i}>
                      <div className={STYLES.thumb}>
                        <img
                          src={`${IMG_ROOT_SL}${g.imgName}`}
                          onClick={() => onClickItem(g)}
                          alt={g.caption}
                        />
                      </div>
                    </Carousel.Item>
                  ))}
                </Carousel>
                {stillImages.length && stillImages.length > 12 ? (
                  <div className={`${STYLES.viewMore} pb-3 pb-md-0`}>
                    View More67
                  </div>
                ) : (
                  <></>
                )}
              </div>
            ) : (
              <></>
            )}
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
};
