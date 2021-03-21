import {handleActions} from 'redux-actions';
import {
  setUserInfoAction,
  removeUserInfoAction,
  setLoginStateAction,
  setLoginUserAction,
  setSaveMusicAction,
  setSaveImgAction
} from '../action';
// import {} from '../actions';
export const initialState = {
  userInfo: [],
  loginStatus: false,
  user: [],
  isChanged: false,
  albumMusic: [],
  img: []
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
    [setSaveMusicAction.toString()]: (state = initialState, {payload}) => ({
      ...state,
      img: payload,
    }),
  },
  initialState,
);
