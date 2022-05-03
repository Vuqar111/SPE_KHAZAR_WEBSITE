import Axios from 'axios';
import {
  RECORD_CREATE_FAIL,
  RECORD_CREATE_REQUEST,
  RECORD_CREATE_SUCCESS,
  RECORD_DETAILS_FAIL,
  RECORD_DETAILS_REQUEST,
  RECORD_DETAILS_SUCCESS,
  RECORD_LIST_FAIL,
  RECORD_LIST_REQUEST,
  RECORD_LIST_SUCCESS,
  RECORD_UPDATE_REQUEST,
  RECORD_UPDATE_SUCCESS,
  RECORD_UPDATE_FAIL,
  RECORD_DELETE_REQUEST,
  RECORD_DELETE_FAIL,
  RECORD_DELETE_SUCCESS,
} from '../constants/recordConstants';

export const listRecords = () => async (
  dispatch
) => {
  dispatch({
    type: RECORD_LIST_REQUEST,
  });
  try {
    const { data } = await Axios.get(
      `https://mernspeapplicaton.herokuapp.com/api/records`
    );
    dispatch({ type: RECORD_LIST_SUCCESS, payload: data.records });
  } catch (error) {
    dispatch({ type: RECORD_LIST_FAIL, payload: error.message });
  }
};





export const detailsRecord = (recordId) => async (dispatch) => {
  dispatch({ type: RECORD_DETAILS_REQUEST, payload: recordId });
  try {
    const { data } = await Axios.get(`https://mernspeapplicaton.herokuapp.com/api/records/${recordId}`);
    dispatch({ type: RECORD_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: RECORD_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
export const createRecord = () => async (dispatch, getState) => {
  dispatch({ type: RECORD_CREATE_REQUEST });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = await Axios.post(
      'https://mernspeapplicaton.herokuapp.com/api/records',
      {},
      {
        headers: { Authorization: `Bearer ${userInfo.token}` },
      }
    );
    dispatch({
      type: RECORD_CREATE_SUCCESS,
      payload: data.record,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: RECORD_CREATE_FAIL, payload: message });
  }
};
export const updateRecord = (record) => async (dispatch, getState) => {
  dispatch({ type: RECORD_UPDATE_REQUEST, payload: record });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = await Axios.put(`https://mernspeapplicaton.herokuapp.com/api/records/${record._id}`, record, {
      headers: { Authorization: `Bearer ${userInfo.token}` },
    });
    dispatch({ type: RECORD_UPDATE_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: RECORD_UPDATE_FAIL, error: message });
  }
};
export const deleteRecord = (recordId) => async (dispatch, getState) => {
  dispatch({ type: RECORD_DELETE_REQUEST, payload: recordId });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = Axios.delete(`https://mernspeapplicaton.herokuapp.com/api/records/${recordId}`, {
      headers: { Authorization: `Bearer ${userInfo.token}` },
    });
    dispatch({ type: RECORD_DELETE_SUCCESS });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: RECORD_DELETE_FAIL, payload: message });
  }
};

