import Axios from "axios";
import {
  GALLERY_CREATE_FAIL,
  GALLERY_CREATE_REQUEST,
  GALLERY_CREATE_SUCCESS,
  GALLERY_DETAILS_FAIL,
  GALLERY_DETAILS_REQUEST,
  GALLERY_DETAILS_SUCCESS,
  GALLERY_LIST_FAIL,
  GALLERY_LIST_REQUEST,
  GALLERY_LIST_SUCCESS,
  GALLERY_UPDATE_REQUEST,
  GALLERY_UPDATE_SUCCESS,
  GALLERY_UPDATE_FAIL,
  GALLERY_DELETE_REQUEST,
  GALLERY_DELETE_FAIL,
  GALLERY_DELETE_SUCCESS,
} from "../constants/galleryConstants";

export const listGalleries = () => async (dispatch) => {
  dispatch({
    type: GALLERY_LIST_REQUEST,
  });
  try {
    const { data } = await Axios.get(`https://mernspeapplicaton.herokuapp.com/api/galleries`);
    dispatch({ type: GALLERY_LIST_SUCCESS, payload: data.galleries });
    console.log(data.galleries)
  } catch (error) {
    dispatch({ type: GALLERY_LIST_FAIL, payload: error.message });
  }
};

export const detailsGallery = (galleryId) => async (dispatch) => {
  dispatch({ type: GALLERY_DETAILS_REQUEST, payload: galleryId });
  try {
    const { data } = await Axios.get(`https://mernspeapplicaton.herokuapp.com/api/galleries/${galleryId}`);
    dispatch({ type: GALLERY_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: GALLERY_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
export const createGallery = () => async (dispatch, getState) => {
  dispatch({ type: GALLERY_CREATE_REQUEST });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = await Axios.post(
      "https://mernspeapplicaton.herokuapp.com/api/galleries",
      {},
      {
        headers: { Authorization: `Bearer ${userInfo.token}` },
      }
    );
    dispatch({
      type: GALLERY_CREATE_SUCCESS,
      payload: data.gallery,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: GALLERY_CREATE_FAIL, payload: message });
  }
};
export const updateGallery = (gallery) => async (dispatch, getState) => {
  dispatch({ type: GALLERY_UPDATE_REQUEST, payload: gallery });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = await Axios.put(`https://mernspeapplicaton.herokuapp.com/api/galleries/${gallery._id}`, gallery, {
      headers: { Authorization: `Bearer ${userInfo.token}` },
    });
    dispatch({ type: GALLERY_UPDATE_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: GALLERY_UPDATE_FAIL, error: message });
  }
};
export const deleteGallery = (galleryId) => async (dispatch, getState) => {
  dispatch({ type: GALLERY_DELETE_REQUEST, payload: galleryId });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = Axios.delete(`https://mernspeapplicaton.herokuapp.com/api/galleries/${galleryId}`, {
      headers: { Authorization: `Bearer ${userInfo.token}` },
    });
    dispatch({ type: GALLERY_DELETE_SUCCESS });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: GALLERY_DELETE_FAIL, payload: message });
  }
};
