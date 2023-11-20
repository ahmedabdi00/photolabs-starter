import React, { useEffect } from 'react';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import useApplicationData from "hooks/useApplicationData";
import axios from 'axios';

import './App.scss';

const App = () => {
  // useEffect(() => {
  //   axios.get(`/api/topics`).then(res => {
  //     console.log(123);
  //     console.log('res value is', res);

  //   }).catch(err => console.log('Unexpected error code', err))
  // }, [])

  // useEffect(() => {
  //   const topicsApi = `/api/topics`;
  //   const photosApi = `/api/photos`;

  //   Promise.all([axios.get(topicsApi), axios.get(photosApi)]).then((all) => {
  //     const [topics, photos] = all;
  //     console.log(all);
  //     // setAppData(topics.data, photos.data);
  //   }).catch(err => console.log("An unexpected error occured", err))
  // }, []);



  const {
    mainPagePhotos,
    topicData,
    photoData,
    favouritePhotos,
    setFavouritePhotos,
    isModalActive,
    setIsModalActive,
    clickedPhotoData,
    setClickedPhotoData,
    setPhotoData,
    setTopicData,
    handleTopicClick,
    handleClose
  } = useApplicationData();


  return (
    <div className="App">

      <HomeRoute
        mainPagePhotos={mainPagePhotos}
        data={photoData}
        topics={topicData}
        favouritePhotos={favouritePhotos}
        setFavouritePhotos={setFavouritePhotos}
        isModalActive={isModalActive}
        setIsModalActive={setIsModalActive}
        clickedPhotoData={clickedPhotoData}
        setClickedPhotoData={setClickedPhotoData}
        setPhotoData={setPhotoData}
        setTopicData={setTopicData}
        handleTopicClick={handleTopicClick}
      />

      {isModalActive && <PhotoDetailsModal
        isModalActive={isModalActive}
        setIsModalActive={setIsModalActive}
        favouritePhotos={favouritePhotos}
        setFavouritePhotos={setFavouritePhotos}
        clickedPhotoData={clickedPhotoData}
        setClickedPhotoData={setClickedPhotoData}
        setPhotoData={setPhotoData}
        imgClass={mainPagePhotos}
        handleClose={handleClose}
      />}

    </div>
  );

};

export default App;