import React, { Children, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../../actions/posts";
import { GridItem } from "../../styles";
import Post from "./Post/Post";

interface RootState {
  posts: []
}

interface IPost {
  name: string,
  email: string,
  phone: string,
  mobile: string,
  address: string,
  selectedFile: string,
  _id: number,
}

interface Props {
  setCurrentId : (val: number | null) => void,
}

const Posts: React.FC<Props> = ({ setCurrentId }) => {
  
  const dispatch = useDispatch();

  const posts = useSelector((state: RootState) => state.posts);

  useEffect(() => {
    dispatch(getPosts());
  }, [])
  
  console.log(posts);

	return (
		<GridItem>
      {!posts.length ? "loading" : (
        <React.Fragment>
          {posts.map((post: IPost) => {
            return (
              <Post key={post._id} setCurrentId={setCurrentId} post={post} />
            )
          })}
        </React.Fragment>
      )}
		</GridItem>
	);
};

export default Posts;
