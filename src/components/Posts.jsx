import React from "react";
import { connect } from "react-redux";
import Post from "./Post";

const Posts = ({ syncPosts }) => {
  if (!syncPosts.length) {
    return <p className="text-center">There are no created posts yet</p>;
  }
  return syncPosts.map((post) => <Post post={post} key={post.id} />);
};

const MSTP = state => {
  return {
    syncPosts: state.posts.posts
  }
}

export default connect(MSTP)(Posts);
