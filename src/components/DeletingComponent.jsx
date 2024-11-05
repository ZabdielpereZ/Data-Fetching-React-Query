import React, { useState } from 'react';
import { Container } from 'react-bootstrap';

const DeletingComponent = () => {
  const [message, setMessage] = useState("");

  const deletePost = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts/1', {
        method: 'DELETE',
      });
      if (response.status === 200) {
        setMessage("Post deleted successfully!");
      } else {
        setMessage("Failed to delete the post.");
      }
    } catch (error) {
      console.error("There was an error deleting the post!", error);
      setMessage("There was an error deleting the post!");
    }
  };

  return (
    <Container className='mb-3'>
      <h1>Delete Post</h1>
      <button onClick={deletePost}>Delete Post</button>
      {message && <p>{message}</p>}
    </Container>
  );
};

export default DeletingComponent;

