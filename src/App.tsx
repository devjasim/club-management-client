import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getPosts } from "./actions/posts";
import Form from "./components/Form/Form";
import Posts from "./components/Posts/Posts";
import { PageWrapper, MyGlobalStyle, AppBar, HeadingOne, Paper, Content, HeadingTwo } from './styles';


const App: React.FC = () => {

  const [currentId, setCurrentId] = useState<number | null>(null);

  const dispatch = useDispatch();

  useEffect(() => {
    console.log("DISPATCH")
    dispatch(getPosts());
  }, [dispatch])

	return (
    <React.Fragment>
      <MyGlobalStyle/>
      <PageWrapper>
        <AppBar>
          <HeadingOne>Club Management</HeadingOne>
        </AppBar>
        <Content>
          <div style={{flex: "3", margin: "1rem"}} className="item">
            <HeadingTwo>Member Lists</HeadingTwo>
            <Posts setCurrentId={setCurrentId} />
          </div>
          <div style={{flex: 1, margin: "1rem"}} className="item">
            <HeadingTwo>
              {!currentId ? (
                "Add New Member"
              ) : "Edit Member"}
            </HeadingTwo>
            <Paper>
              <Form currentId={currentId} setCurrentId={setCurrentId} />
            </Paper>
          </div>
        </Content>
      </PageWrapper>
    </React.Fragment>
	);
};

export default App;
