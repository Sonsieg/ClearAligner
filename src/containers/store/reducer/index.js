import {handleActions} from 'redux-actions';
import { testReduxAction, setSaveImageAction1, setSaveImageAction2, setSaveImageAction3, setSaveImageAction4, setSaveImageAction5, setSaveImageAction6, setSaveImageAction7, setSaveImageAction8 } from '../action';
const initialState = {
  testData: 0,
  list: [],
};
export default handleActions(
  {
    [testReduxAction.toString()]:(state) => ({...state, testData: state.testData + 1}),
    [setSaveImageAction.toString()]: (state = initialState, {payload}) => ({
      ...state,
      list:payload,
    })
  },
  initialState,
);