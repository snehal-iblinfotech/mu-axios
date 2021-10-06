/** @format */

import { GET_ALL_POSTS, CREATE_POST, DELETE_POST, EDIT_POST } from "./types";
import * as api from "../API";
export const getAllPosts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPosts();

    dispatch({
      type: GET_ALL_POSTS,
      payload: data
    });
  } catch (error) {
    console.error(error);
  }
};

export const createPost = (post) => async (dispatch) => {
  const { data } = await api.createPost(post);

  try {
    dispatch({
      type: CREATE_POST,
      payload: data
    });
  } catch (error) {
    console.error(error);
  }
};

export const deletePost = (id) => async (dispatch) => {
  await api.deletePost(id);
  try {
    dispatch({
      type: DELETE_POST,
      payload: id
    });
  } catch (error) {
    console.error(error);
  }
};
export const editPost = (id, post) => async (dispatch) => {
  try {
    const { data } = await api.editPost(id, post);
    console.log(data);
    dispatch({
      type: EDIT_POST,
      payload: data
    });
  } catch (error) {
    console.log(error.message);
  }
};
