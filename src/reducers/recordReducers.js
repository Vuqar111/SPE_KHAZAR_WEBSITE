const {
    RECORD_CREATE_FAIL,
    RECORD_CREATE_REQUEST,
    RECORD_CREATE_SUCCESS,
    RECORD_CREATE_RESET,
    RECORD_DETAILS_FAIL,
    RECORD_DETAILS_REQUEST,
    RECORD_DETAILS_SUCCESS,
    RECORD_LIST_FAIL,
    RECORD_LIST_REQUEST,
    RECORD_LIST_SUCCESS,
    RECORD_UPDATE_REQUEST,
    RECORD_UPDATE_SUCCESS,
    RECORD_UPDATE_FAIL,
    RECORD_UPDATE_RESET,
    RECORD_DELETE_REQUEST,
    RECORD_DELETE_FAIL,
    RECORD_DELETE_SUCCESS,
    RECORD_DELETE_RESET,
  } = require("../constants/recordConstants");
  
  export const recordListReducer = (
    state = { loading: true, records: [] },
    action
  ) => {
    switch (action.type) {
      case RECORD_LIST_REQUEST:
        return { loading: true };
      case RECORD_LIST_SUCCESS:
        return { loading: false, records: action.payload };
      case RECORD_LIST_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };
  
  export const recordDetailsReducer = (state = { loading: true }, action) => {
    switch (action.type) {
      case RECORD_DETAILS_REQUEST:
        return { loading: true };
      case RECORD_DETAILS_SUCCESS:
        return { loading: false, record: action.payload };
      case RECORD_DETAILS_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };
  export const recordCreateReducer = (state = {}, action) => {
    switch (action.type) {
      case RECORD_CREATE_REQUEST:
        return { loading: true };
      case RECORD_CREATE_SUCCESS:
        return { loading: false, success: true, record: action.payload };
      case RECORD_CREATE_FAIL:
        return { loading: false, error: action.payload };
      case RECORD_CREATE_RESET:
        return {};
      default:
        return state;
    }
  };
  export const recordUpdateReducer = (state = {}, action) => {
    switch (action.type) {
      case RECORD_UPDATE_REQUEST:
        return { loading: true };
      case RECORD_UPDATE_SUCCESS:
        return { loading: false, success: true };
      case RECORD_UPDATE_FAIL:
        return { loading: false, error: action.payload };
      case RECORD_UPDATE_RESET:
        return {};
      default:
        return state;
    }
  };
  export const recordDeleteReducer = (state = {}, action) => {
    switch (action.type) {
      case RECORD_DELETE_REQUEST:
        return { loading: true };
      case RECORD_DELETE_SUCCESS:
        return { loading: false, success: true };
      case RECORD_DELETE_FAIL:
        return { loading: false, error: action.payload };
      case RECORD_DELETE_RESET:
        return {};
      default:
        return state;
    }
  };
  