import React from 'react';
import TopicList from './TopicList';
import FavBadge from './FavBadge';

import '../styles/TopNavigationBar.scss';

const TopNavigation = (props) => {

  const isFavPhotoExist = props.favouritePhotos.length > 0;

  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo" onClick={() => props.handleTopicClick(null)}>PhotoLabs</span>
      <TopicList
        topics={props.topics}
        handleTopicClick={props.handleTopicClick} />
      <FavBadge isFavPhotoExist={isFavPhotoExist} />
    </div>
  );

};

export default TopNavigation;