import { combineReducers } from 'redux';

import posts from './posts'

// exporting posts so it can be used as state.posts
export default combineReducers({ posts });