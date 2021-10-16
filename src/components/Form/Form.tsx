import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { createPost, updatePost } from "../../actions/posts";
import { Input, FormGroup, ButtonPrimary, FormLabel } from '../../styles';
import { useSelector } from "react-redux";

interface Props {
  currentId: number | null,
  setCurrentId: (val: number | null) => void,
}

const Form: React.FC<Props> = ({currentId, setCurrentId}) => {

  const dispatch = useDispatch();

  interface UserData {
    name: string,
    email: string,
    phone: string,
    address: string,
    selectedFile: string,
  }

  interface IUpadatePost {
    posts?: [] | null,
  }

  const post = useSelector((state: IUpadatePost) => state.posts?.find((p : any) => p._id === currentId) || null);
  

  const [imageFile, setImageFile] = useState<string | undefined>("");

  console.log(imageFile);

  const [postData, setPostData] = useState<UserData>({
    name: '', phone: "", address: "", email: "", selectedFile: "", 
  })


  useEffect(() => {
    if (post) setPostData(post);
  }, [post])


  // Convert Image to base64 
  const convertBase64 = (file: any) => {
    return new Promise((resolve, reject) => {
      
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result);
      }

      fileReader.onerror = ((error) => {
        reject(error);
      })

    })
  }

  const clearData = () => {
    setCurrentId(null);
    setPostData({
      name: "",
      email: "",
      phone: "",
      address: "",
      selectedFile: "",
    })
  }

  // Submit Handler 
  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (currentId && postData.name !== "") {
      await dispatch(updatePost(currentId, postData))
    } else if(postData.name !== "") {
      await dispatch(createPost(postData))
    }

    clearData();
  }

  console.log("POST DATA FROM", postData);


  // Input Change handler
  const handleChange = async (e: any) => {

    if (e.target.name === "selectedFile") {
      const file = e.target.files[0];

      const base64: any = await convertBase64(file);

      setPostData({
        ...postData,
        selectedFile: `${base64}`
      })
      
      setImageFile(base64);

    }

    if (e.target.name !== "selectedFile") {
      setPostData({
        ...postData,
        [e.target.name]: `${e.target.value}`,
      })
    }
  }

	return (
		<div className="form__container">
      <form autoComplete="off" noValidate onSubmit={handleSubmit}>
        <FormGroup className="form__group">
          <FormLabel htmlFor="name">Name</FormLabel>
          <Input id="name" type="text" name="name" value={postData.name} onChange={handleChange} />
        </FormGroup>
        <FormGroup className="form__group">
          <FormLabel htmlFor="email">Email</FormLabel>
          <Input id="email" type="text" name="email" value={postData.email} onChange={handleChange} />
        </FormGroup>
        <FormGroup className="form__group">
          <FormLabel htmlFor="phone">Phone</FormLabel>
          <Input id="phone" type="text" name="phone" value={postData.phone} onChange={handleChange} />
        </FormGroup>
        <FormGroup className="form__group">
          <FormLabel htmlFor="address">Address</FormLabel>
          <Input id="address" type="text" name="address" value={postData.address} onChange={handleChange} />
        </FormGroup>
        <FormGroup className="form__group">
          <FormLabel htmlFor="image">Image</FormLabel>
          <Input id="image" multiple={false} accept=".jpg, .jpeg, .png, .svg" type="file" name="selectedFile" onChange={handleChange} />
        </FormGroup>

        <ButtonPrimary type="submit" >Submit</ButtonPrimary>

      </form>

		</div>
	);
};

export default Form;
