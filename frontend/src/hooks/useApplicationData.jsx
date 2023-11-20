import { useReducer, useEffect } from "react";


const SET_FAVOURITE_PHOTOS = "SET_FAVOURITE_PHOTOS";
const SET_IS_MODAL_ACTIVE = "SET_IS_MODAL_ACTIVE";
const SET_CLICKED_PHOTO_DATA = "SET_CLICKED_PHOTO_DATA";
const SET_PHOTO_DATA = "SET_PHOTO_DATA";
const SET_TOPIC_DATA = "SET_TOPIC_DATA";
const GET_PHOTOS_BY_TOPICS = "GET_PHOTOS_BY_TOPICS";



const reducer = (state, action) => {

    switch (action.type) {
        case SET_FAVOURITE_PHOTOS: return { ...state, favouritePhotos: action.payload };
        case SET_IS_MODAL_ACTIVE: return { ...state, isModalActive: action.payload };
        case SET_CLICKED_PHOTO_DATA: return { ...state, clickedPhotoData: action.payload };
        case SET_PHOTO_DATA: return { ...state, photoData: action.payload };
        case SET_TOPIC_DATA: return { ...state, topicData: action.payload };
        case GET_PHOTOS_BY_TOPICS: return { ...state, selectedTopicId: action.payload };
        default: return state;
    }
};

const useApplicationData = () => {
    const initialState = {
        mainPagePhotos: {
            divClass: "photo-list__item",
            imgClass: "photo-list__image",
            userDivClass: "photo-list__user-details",
            profileImg: "photo-list__user-profile",
            profileInfo: "photo-list__user-info",
            profileLocation: "photo-list__user-location"
        },
        topicData: [],
        photoData: [],
        favouritePhotos: [],
        isModalActive: false,
        clickedPhotoData: {},
        selectedTopicId: null,
    };

    const handleClose = (e) => {
        e.preventDefault();
        setIsModalActive(false);
    };

    const [state, dispatch] = useReducer(reducer, initialState);

    const { selectedTopicId } = state;
    useEffect(() => {
        fetch("/api/topics")
            .then(response => response.json())
            .then(data => {
                setTopicData(data);
            })
            .catch(error => console.log(error));

        if (selectedTopicId) {
            fetch(`/api/topics/photos/${selectedTopicId}`)
                .then(response => response.json())
                .then(data => {
                    setPhotoData(data);
                })
                .catch(error => console.log(error));
        } else {
            fetch("/api/photos")
                .then(response => response.json())
                .then(data => {
                    setPhotoData(data);
                })
                .catch(error => console.log(error));
        }

    }, [selectedTopicId]);


    const handleTopicClick = (topicID) => {
        getTopicPhotoData(topicID);
    };

    const setFavouritePhotos = (favourites) => {
        dispatch({ type: SET_FAVOURITE_PHOTOS, payload: favourites });
    };
    const setIsModalActive = (isActive) => {
        dispatch({ type: SET_IS_MODAL_ACTIVE, payload: isActive });
    };
    const setClickedPhotoData = (data) => {
        dispatch({ type: SET_CLICKED_PHOTO_DATA, payload: data });
    };
    const setPhotoData = (data) => {
        dispatch({ type: SET_PHOTO_DATA, payload: data });
    };
    const getTopicPhotoData = (topicID) => {
        dispatch({ type: GET_PHOTOS_BY_TOPICS, payload: topicID });
    };
    const setTopicData = (data) => {
        dispatch({ type: SET_TOPIC_DATA, payload: data });
    };

    return {
        ...state,
        setFavouritePhotos,
        setIsModalActive,
        setClickedPhotoData,
        setPhotoData,
        setTopicData,
        handleTopicClick,
        handleClose,
    };
};

export default useApplicationData;