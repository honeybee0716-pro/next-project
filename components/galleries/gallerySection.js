import React, { useState, useEffect, useCallback } from "react";
import 'react-image-lightbox/style.css';
import Lightbox from 'react-image-lightbox';
import Gallery from "react-photo-gallery";
import { getGalleryList } from '../../common/services/gallery';
import G_STYLES from '../../styles/Gallery.module.scss';
import { MDBContainer, MDBRow, MDBCol } from 'mdbreact';
import Zoom from "react-reveal/Zoom";

const processData = (data) => {
  let photoArr = []
  data.forEach((p, i) => {
    let obj = {
      src: `${p.imageUrl}`,
      width: 1,
      height: 1,
      alt: p.Caption,
      key: i.toString()
    }

    // if (p.Orientation === "landscape") {
    //   obj.width = 4;
    //   obj.height = 3;
    // } else if (p.Orientation === "portrait") {
    //   obj.width = 3;
    //   obj.height = 4;
    // }
    photoArr.push(obj);
  });
  return photoArr;
}

export const GallerySection = (props) => {

  const [photos, setPhotos] = useState([]);
  const [state, setState] = useState({
    photoIndex: 0,
    isOpen: false,
    label: '',
  });

  // const openLightbox = useCallback((event, { photo, index }) => {
  //   setState({ isOpen: true, photoIndex: index });
  // }, []);

  const openLightbox = (index) => {
    setState({ isOpen: true, photoIndex: index, label: photos[index].alt });
  }

  useEffect(() => {
    getGalleryList(props.filter).then((data) => {
      //console.log('URL_CONSTRUCTION', data);
      setPhotos(processData(data))
    }).catch((err) => {
      console.log('getData error', err);
    });
  }, []);

  return (
    <div className={G_STYLES.gallery}>
      <MDBContainer className="my-4 p-0">
        {/* <Gallery photos={photos} onClick={openLightbox} margin={15} /> */}
        <div className={G_STYLES.galleryListCont}>
          {photos.map((p, i) => (
            <Zoom key={i} >
              <div className={`${G_STYLES.cardImage} m-3`} onClick={() => openLightbox(i)} >
                <img src={p.src} />
              </div>
            </Zoom>
          ))}
        </div>
        {state.isOpen && (
          <Lightbox
            mainSrc={photos[state.photoIndex].src}
            nextSrc={photos[(state.photoIndex + 1) % photos.length].src}
            prevSrc={photos[(state.photoIndex + photos.length - 1) % photos.length].src}
            onCloseRequest={() => setState({ isOpen: false })}
            onMovePrevRequest={() =>
              setState({
                photoIndex: (state.photoIndex + photos.length - 1) % photos.length,
                isOpen: true,
                label: photos[state.photoIndex].alt
              })
            }
            onMoveNextRequest={() =>
              setState({
                photoIndex: (state.photoIndex + 1) % photos.length,
                isOpen: true,
                label: photos[state.photoIndex].alt
              })
            }
            // imageTitle={state.label}
            imageCaption={photos[state.photoIndex].alt}
          />
        )}
      </MDBContainer>
    </div>

  );
}

