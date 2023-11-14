import React from 'react';
import TopNavigation from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';

import '../styles/HomeRoute.scss';

const HomeRoute = (props) => {

  return (
    <div className="home-route">
      <TopNavigation
        favouritePhotos={props.favouritePhotos}
        topics={props.topics}
        handleTopicClick={props.handleTopicClick}
      />
      <PhotoList
        imgClass={props.mainPagePhotos}
        setFavouritePhotos={props.setFavouritePhotos}
        favouritePhotos={props.favouritePhotos}
        isModalActive={props.isModalActive}
        setIsModalActive={props.setIsModalActive}
        clickedPhotoData={props.clickedPhotoData}
        setClickedPhotoData={props.setClickedPhotoData}
        data={props.data}
      />
    </div>
  );

};

export default HomeRoute;