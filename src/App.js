import React from "react";
import PostForm from "./components/PostForm";
import FetchedPosts from "./components/FetchedPosts";
import Posts from "./components/Posts";

function App() {
  return (
    <div className="container pt-3">
      <h1>React-Redux-Saga App</h1>
      <div className="row">
        <div className="col">
          <PostForm />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <h2>Created Posts</h2>
          <Posts />
        </div>
        <div className="col">
          <h2>Saved Posts</h2>
          <FetchedPosts />
        </div>
      </div>
    </div>
  );
}

export default App;
