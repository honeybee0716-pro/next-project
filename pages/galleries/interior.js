import React from "react";
import { BannerSection } from '../../components/common/banner';
import { SubNavbar } from '../../components/common/subNavbar';
import { GallerySection } from '../../components/galleries/gallerySection';
import { GALLERY_NAVBAR } from '../../common/constants/gallery';

const IMG_BANNER_FILE_ROOT = `${process.env.IMG_BASE_URL}/gallery/_banner/`;

export const InteriorPage = () => {

  return (
    <>
      <BannerSection img={`${IMG_BANNER_FILE_ROOT}gallery_banner_1.jpg`} />
      <SubNavbar navBarItems={GALLERY_NAVBAR} header={'Photo Galleries'} />
      <GallerySection filter='interior' />
    </>
  );
}

export default InteriorPage;
