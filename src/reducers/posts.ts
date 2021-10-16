import { PayloadAction } from "@reduxjs/toolkit";
import { CREATE, DELETE, UPDATE, FETCH_ALL } from '../constants/actionTypes';

interface Post {
	_id: number,
}

interface IPayload {
	_id: number
}

export default (posts = [], action: PayloadAction<IPayload>) => {
	switch (action.type) {
		case FETCH_ALL:
			return action.payload;

		case CREATE:
			return [...posts, action.payload];
		
		case UPDATE:
			return posts.map((post: Post) => post._id === action.payload._id ? action.payload: post);

		case DELETE:
			return posts.filter((post: any) => post._id !== action.payload);

		default:
			return posts;
	}
};
