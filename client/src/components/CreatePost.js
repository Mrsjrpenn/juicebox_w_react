import React from "react";
import { useState } from "react";
const Create = ({ posts, setPosts }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const addPost = async (event) => {
    event.preventDefault();
    const response = await fetch;

    const data = await response.json();
    console.log(data);
    setTitle("");
    setDescription("");
  };
  return (
    <>
      <h1>Create A New Post:</h1>
      <div id="create-post">
        <form id="add-post-form" onSubmit={addPost}>
          <textarea
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            placeholder="title"
            required
          ></textarea>
          <br />
          <textarea
            id="description"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
            placeholder="description"
            required
          ></textarea>
          <br />
          <button id="create-post-button" type="submit">
            Create Post
          </button>
        </form>
      </div>
    </>
  );
};
export default Create;
