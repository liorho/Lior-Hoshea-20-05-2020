import React from 'react';

function Error(props) {
  const { message, api } = props;
  return <p>Error: {message}. Please try again later.</p>;
}

export default Error;
