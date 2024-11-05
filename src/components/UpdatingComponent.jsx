import React, { useState } from 'react';
import axios from 'axios';
import InputGroupText from 'react-bootstrap/esm/InputGroupText';
import { Container } from 'react-bootstrap';

const UpdatingComponent = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [post, setPost] = useState(null);

  const updatePost = async () => {
    try {
      const response = await axios.put(
        "https://jsonplaceholder.typicode.com/posts/1",
        {
          title,
          body,
          userId: 1,
        },
        {
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          }
        }
      );
      setPost(response.data);
    } catch (error) {
      console.error("There was an error updating the post!", error);
    }
  };

  return (
    <Container className='mb-3'>
      <h1>Update Post</h1>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        placeholder="Body"
        value={body}
        onChange={(e) => setBody(e.target.value)}
      ></input>
      <button onClick={updatePost}>Update Post</button>
      
      {post && (
        <div>
          <h2>Updated Post</h2>
          <p>Title: {post.title}</p>
          <p>Body: {post.body}</p>
        </div>
      )}
    </Container>
  );
};

export default UpdatingComponent;
