import React from 'react';
import { Jumbotron } from 'react-bootstrap';

function Error({message}) {
  return (
    <Jumbotron>
      <h1>This is an Error Message</h1>
      <p>There has been some kind of problem while trying to handle your request.</p>
      <p>Please try again later.</p>
      <p>Error: {message}</p>
    </Jumbotron>
  );
}

export default Error;
