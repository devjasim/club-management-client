import React, { Fragment, Dispatch, SetStateAction } from "react";
import { useDispatch } from "react-redux";
import { deletePost } from "../../../actions/posts";
import { Avatar, ButtonCustom, Card, CardContent, HeadingTwo} from "../../../styles";

interface Props {
  setCurrentId: (val: number | null) => void,
  post: {
      name: string,
      email: string,
      phone: string,
      address: string,
      selectedFile: string,
      _id: number,
  }
}

const Post: React.FC<Props> = ({post, setCurrentId}) => {


  const dispatch = useDispatch();

	return (
    <Card>
      <Avatar>
        <img src={post.selectedFile} alt="" />
      </Avatar>
      
        <CardContent className="info__list">
        <HeadingTwo style={{margin: 0}}>{post.name}</HeadingTwo>
        </CardContent>
        <CardContent className="info__list">
          <strong>Email: </strong>
          <span>{post.email}</span>
        </CardContent>
        <CardContent className="info__list">
          <strong>Phone: </strong>
          <span>{post.phone}</span>
        </CardContent>
        <CardContent className="info__list">
          <strong>Address</strong>
          <span>{post.address}</span>
        </CardContent>
      
      <div style={{display: "flex", alignItems: 'center', justifyContent: "space-between", marginTop: "2rem"}} >
          <ButtonCustom onClick={() => setCurrentId(post._id)}>
            Edit
          </ButtonCustom>
          <ButtonCustom onClick={() => dispatch(deletePost(post._id))} style={{backgroundColor: '#f34646', marginLeft: '1rem'}}>
            Delete
          </ButtonCustom>
      </div>
    </Card>
	);
};

export default Post;
