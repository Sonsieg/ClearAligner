export const REQUEST_POSTS = 'REQUEST_POSTS';
export const RECEIVE_POSTS = 'RECEIVE_POSTS';
export const SELECT_SUBREDDIT = 'SELECT_SUBREDDIT';
export const INVALIDATE_SUBREDDIT = 'INVALIDATE_SUBREDDIT';
export const FETCH_API = 'FETCH_API';
import {createActions} from 'redux-actions';

const actions = createActions({
  FETCH_ASYNC_ACTION: (body_api) => body_api,
  SET_DATA_ACTION: null,
  TEST_REDUX_ACTION: null,
  SET_SAVE_IMAGE_ACTION: null
});

export const {
  fetchAsyncAction,
  setSaveImageAction,
} = actions;