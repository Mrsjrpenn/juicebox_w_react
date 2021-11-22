import React, { useState, useEffect } from "react";
import{Link} from "react-router-dom";
import {getPosts} from "../api/posts"


function Posts(props) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function getPosts() {
      const response = await fetch()
      );

      const responseObj = await response.json();

      setPosts(responseObj.data.posts);
    }
    console.log(posts);
    getPosts();
  }, [posts]);

  const postsToRender = posts.map((post) => {
    return <SinglePost post={post} />;
  });

  return (
    <div>
      <h1>Posts:</h1>
      {postsToRender}
    </div>
  );
}

export default Posts;
