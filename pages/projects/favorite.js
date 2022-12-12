
import React from "react";
import { BannerSection } from '../../components/common/banner';
import { SubNavbar } from '../../components/common/subNavbar';
import { PROJECTS_NAVBAR } from '../../common/constants/projects';
import { ProjectListSection } from '../../components/projects/projectList';

const IMG_BANNER_FILE_ROOT = `${process.env.IMG_BASE_URL}/projects/_banner/`;

const FavoriteProjectPage = () => {

  return (
    <>
      <BannerSection img={`${IMG_BANNER_FILE_ROOT}project_banner_1.jpg`}/>
      <SubNavbar navBarItems={PROJECTS_NAVBAR} header={'Our Projects'} />
      <ProjectListSection filter="favorite"/>
    </>
  );

}

export default FavoriteProjectPage;
