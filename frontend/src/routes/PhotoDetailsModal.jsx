import React from 'react';
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoList from 'components/PhotoList';
import PhotoListItem from 'components/PhotoListItem';

import '../styles/PhotoDetailsModal.scss';

const PhotoDetailsModal = (props) => {
  const modalPagePhotos = {
    divClass: "photo-list__item",
    imgClass: "photo-details-modal__image",
    userDivClass: "photo-details-modal__photographer-details",
    profileImg: "photo-details-modal__photographer-profile",
    profileInfo: "photo-details-modal__photographer-info",
    profileLocation: "photo-details-modal__photographer-location",
    listClass: "photo-details-modal__top-bar"
  };

  const handleClose = (e) => {
    e.preventDefault();
    props.setIsModalActive(false);
  };

  return (
    <div className="photo-details-modal"
      style={{ display: props.isModalActive ? 'inherit' : 'none' }}>

      <button className="photo-details-modal__close-button" onClick={props.handleClose}>
        <img src={closeSymbol} alt="close symbol" />
      </button>

      {props.isModalActive && <>
        <PhotoListItem
          data={props.clickedPhotoData}
          setClickedPhotoData={props.setClickedPhotoData}
          imgClass={modalPagePhotos}
          setIsModalActive={props.setIsModalActive}
          favouritePhotos={props.favouritePhotos}
          setFavouritePhotos={props.setFavouritePhotos} />

        <h5 className="photo-details-modal__header">Similar Photos</h5>

        <ul className={modalPagePhotos.listClass}>
          <PhotoList
            data={Object.values(props.clickedPhotoData.similar_photos)}
            imgClass={props.imgClass}
            favouritePhotos={props.favouritePhotos}
            setFavouritePhotos={props.setFavouritePhotos}
          />
        </ul>
      </>}
    </div>
  );
};

export default PhotoDetailsModal;
