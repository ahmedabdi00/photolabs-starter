import React from "react";
import PhotoFavButton from "./PhotoFavButton";

import "../styles/PhotoListItem.scss";

const PhotoListItem = (props) => {

  const handleClick = () => {
    props.setClickedPhotoData(props.data);
    props.setIsModalActive(true);
  };

  return (
    <div className={props.imgClass.divClass}
      key={props.data.id}>
      <PhotoFavButton
        favPhoto={props.favouritePhotos}
        setFav={props.setFavouritePhotos}
        photoData={props.data}
      />

      <img
        className={props.imgClass.imgClass}
        src={props.data.urls.full}
        alt={props.data.id}
        onClick={handleClick} />

      <div className={props.imgClass.userDivClass}>
        <img className={props.imgClass.profileImg}
          src={props.data.user.profile}
          alt={props.data.user.username} />

        <span className={props.imgClass.profileInfo}>
          {props.data.user.name}
          <p className={props.imgClass.profileLocation}>{props.data.location.city}, {props.data.location.country}</p>
        </span>
      </div>

    </div>
  );

};

export default PhotoListItem;