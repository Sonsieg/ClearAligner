import {handleActions} from 'redux-actions';
import {
  setUserInfoAction,
  removeUserInfoAction,
  setLoginStateAction,
  setLoginUserAction,
  setSaveMusicAction,
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
  setSaveInfoAllAction
} from '../action';
// import {} from '../actions';
export const initialState = {
  userInfo: [],
  loginStatus: false,
  user: [],
  isChanged: false,
  albumMusic: [],
  imgOne: '',
  imgTwo: '',
  imgThree: '',
  imgFour: '',
  imgFive: '',
  imgSix: '',
  imgSeven: '',
  imgEight: '',
  dataOne: [],
  dataTwo: [],
  dataAll: []
};

export default handleActions(
  {
    [setUserInfoAction.toString()]: (state = initialState, {payload}) => ({
      ...state,
      userInfo: payload,
    }),
    [removeUserInfoAction.toString()]: (state = initialState, {}) => ({
      ...state,
      ...initialState,
    }),
    [setLoginStateAction.toString()]: (state = initialState, {payload}) => ({
      ...state,
      loginStatus: payload,
    }),
    [setLoginUserAction.toString()]: (state = initialState, {payload}) => ({
      ...state,
      user: payload.user,
    }),
    [setSaveMusicAction.toString()]: (state = initialState, {payload}) => ({
      ...state,
      albumMusic: payload,
    }),
    [setSaveImgOneAction.toString()]: (state = initialState, {payload}) => ({
      ...state,
      imgOne: payload,
    }),
    [setSaveImgTwoAction.toString()]: (state = initialState, {payload}) => ({
      ...state,
      imgTwo: payload,
    }),
    [setSaveImgThreeAction.toString()]: (state = initialState, {payload}) => ({
      ...state,
      imgThree: payload,
    }),
    [setSaveImgFourAction.toString()]: (state = initialState, {payload}) => ({
      ...state,
      imgFour: payload,
    }),
    [setSaveImgFiveAction.toString()]: (state = initialState, {payload}) => ({
      ...state,
      imgFive: payload,
    }),
    [setSaveImgSixAction.toString()]: (state = initialState, {payload}) => ({
      ...state,
      imgSix: payload,
    }),
    [setSaveImgSevenAction.toString()]: (state = initialState, {payload}) => ({
      ...state,
      imgSeven: payload,
    }),
    [setSaveImgEightAction.toString()]: (state = initialState, {payload}) => ({
      ...state,
      imgEight: payload,
    }),
    [setSaveInfoOneAction.toString()]: (state = initialState, {payload}) => ({
      ...state,
      dataOne: payload,
    }),
    [setSaveInfoTwoAction.toString()]: (state = initialState, {payload}) => ({
      ...state,
      dataTwo: payload,
    }),
    [setSaveInfoAllAction.toString()]: (state = initialState, {payload}) => ({
      ...state,
      dataAll: payload,
    }),
  },
  initialState,
);
