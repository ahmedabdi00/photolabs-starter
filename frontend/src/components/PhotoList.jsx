import React, { useState } from 'react';
import PhotoListItem from './PhotoListItem';


import "../styles/PhotoList.scss";


const PhotoList = (props) => {

  const photosInfo = props.data;

  return (
    <ul className="photo-list">
      {photosInfo.map(data => <PhotoListItem key={data.id}
        data={data}
        imgClass={props.imgClass}
        favouritePhotos={props.favouritePhotos}
        setFavouritePhotos={props.setFavouritePhotos}
        clickedPhotoData={props.clickedPhotoData}
        setClickedPhotoData={props.setClickedPhotoData}
        isModalActive={props.isModalActive}
        setIsModalActive={props.setIsModalActive}
      />)}
    </ul>
  );

};

export default PhotoList;