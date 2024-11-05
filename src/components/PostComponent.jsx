import { useMutation } from "@tanstack/react-query";
import React, { useState } from "react";
import { Container, Form } from "react-bootstrap";
import axios from "axios";

const PostComponent = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [post, setPost] = useState(null);

  const createPost = async () => {
    const responsePost = await axios.post(
      "https://jsonplaceholder.typicode.com/posts",
      {
        body: JSON.stringify({
          title,
          body,
          userId: 1,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }
    );

    // JSON.parse - converts our strings into objects
    return JSON.parse(responsePost.data.body);
  };

  // mutate - function we need to manually call to make our API call
  const { mutate } = useMutation({
    mutationFn: createPost, // Function that makes API call

    // onSuccess gets access to the data returned from our mutationFn (CreatePost)
    //Then we utilize it in a function that we want to run when we successfully make that API call
    onSuccess: (data) => {
      console.log("Post created successfully:", data);
      setPost(data); // update our state with the newly created post
    },
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    mutate();
  };

  return (
    <Container className="mb-3">
        <h1>Create Post</h1>
      <Form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="title"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <input
          type="text"
          placeholder="body"
          value={body}
          onChange={(event) => setBody(event.target.value)}
        />
        <button type="submit">Submit</button>
      </Form>
      {/* display our post */}
      {post && (
        <div>
          <h1>{post.title}</h1>
          <p>{post.body}</p>
        </div>
      )}
    </Container>
  );
};

export default PostComponent;
