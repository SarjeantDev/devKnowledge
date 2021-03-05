import * as api from '../api';
import { FETCH_ALL, CREATE, UPDATE, DELETE } from '../constants/actionTypes'

// action creators - functions that return actions
// redux thunk - weird syntax with double arrow functions
export const getPosts = () => async (dispatch) => {
    try {
        //  data represents the post
        const { data } = await api.fetchPosts();
        
        // sending the data though the payload dispatcher
        dispatch({ type: FETCH_ALL, payload: data });
    } catch (error) {
        console.log(error.message);
    }
}

export const createPost = (post) => async (dispatch) => {
    try {
        const { data } = await api.createPost(post);

        dispatch({ type: CREATE, payload: data });
        
    } catch (error) {
        console.log(error.message);
    }
}

export const updatePost = (id, post) => async (dispatch) => {
    try {
        // returning the data from updated post response
        const { data } = await api.updatePost(id, post);
        
        dispatch({ type: UPDATE, payload: data });
    } catch (error) {
        console.log(error.message);
    }
}

export const deletePost = (id) => async (dispatch) => {
    try {
        await api.deletePost(id);

        dispatch({ type: DELETE, payload: id})
    } catch (error) {
        console.log(error)
        
    }
}

export const likePost = (id) => async (dispatch) => {
    try {
        const { data } = await api.likePost(id);
        dispatch({ type: UPDATE, payload: data });
    } catch (error) {
       console.log(error); 
    }
}

export const dislikePost = (id) => async (dispatch) => {
    try {
        const { data } = await api.dislikePost(id);
        dispatch({ type: UPDATE, payload: data });
    } catch (error) {
        console.log(error); 
    }
}