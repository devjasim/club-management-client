import * as api from "../api";
import { CREATE, DELETE, UPDATE, FETCH_ALL } from '../constants/actionTypes';

import { ThunkAction, ThunkDispatch } from "redux-thunk";

// Action Creator
export const getPosts = () => async (dispatch: ThunkDispatch<{}, {}, any>) => {
			try {
				const { data } = await api.fetchPosts();
				console.log("DATA", data);

				dispatch({ type: FETCH_ALL, payload: data });
			} catch (error: any) {
				console.log(error.message);
			}
};
	

export const createPost = (post: any) => async (dispatch: ThunkDispatch<{}, {}, any>) => {
	try {
		const { data } = await api.createPosts(post);

		dispatch({ type: CREATE, payload: data });
		
	} catch (error) {
		console.log(error);
	}
}

export const updatePost = (id: number, post: any) => async (dispatch: ThunkDispatch<{}, {}, any>) => {
	try {
		const { data } = await api.updatePost(id, post);

		dispatch({ type: UPDATE, payload: data });
	} catch (error) {
		console.log(error)
	}
}

export const deletePost = (id: number) => async (dispatch: ThunkDispatch<{}, {}, any>) => {
	try {
		await api.deletePost(id);

		dispatch({ type: DELETE, payload: id });
	} catch (error) {
		console.log(error)
	}
}

