import {createActions} from 'redux-actions';

const actions = createActions({
  FETCH_ASYNC_ACTION: (body_api) => body_api,
  LOGIN_ACTION: (body_api) => body_api,
  CHANGE_PASS_ACTION: (body_api) => body_api,
  REGISTRATION_ACTION: (body_api) => body_api,
  FORGET_PASS_ACTION: (body_api) => body_api,
  SET_USER_INFO_ACTION: null,
  REMOVE_USER_INFO_ACTION: null,
  SET_LOGIN_STATE_ACTION: null,
  SET_LOGIN_USER_ACTION: null,
  SET_SAVE_MUSIC_ACTION: null,
  SET_SAVE_IMG_ACTION: null,
  SET_SAVE_IMG_ONE_ACTION: null,
  SET_SAVE_IMG_TWO_ACTION: null,
  SET_SAVE_IMG_THREE_ACTION: null,
  SET_SAVE_IMG_FOUR_ACTION: null,
  SET_SAVE_IMG_FIVE_ACTION: null,
  SET_SAVE_IMG_SIX_ACTION: null,
  SET_SAVE_IMG_SEVEN_ACTION: null,
  SET_SAVE_IMG_EIGHT_ACTION: null,
  SET_SAVE_INFO_ONE_ACTION: null,
  SET_SAVE_INFO_TWO_ACTION: null,
  SET_SAVE_INFO_ALL_ACTION: null,
  SAVE_IMG_DATA_ACTION: null,
});

export const {
  fetchAsyncAction,
  loginAction,
  changePassAction,
  registrationAction,
  setUserInfoAction,
  removeUserInfoAction,
  forgetPassAction,
  setLoginStateAction,
  setLoginUserAction,
  setSaveMusicAction,
  setSaveImgAction,
  setSaveImgOneAction,
  setSaveImgTwoAction,
  setSaveImgThreeAction,
  setSaveImgFourAction,
  setSaveImgFiveAction,
  setSaveImgSixAction,
  setSaveImgSevenAction,
  setSaveImgEightAction,
  setSaveInfoOneAction,
  setSaveInfoTwoAction,
  setSaveInfoAllAction,
  saveImgDataAction,
} = actions;
