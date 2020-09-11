// Example POST method implementation:
function postSignup(url, data) {
  // POST request using fetch with error handling
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  };
  return fetch(url, requestOptions)
    .then(async (response) => {
      return await response.json();
      // if (response.status === 500) {
      //   // console.log('data from back-end response.status', response.status);
      //   // console.log('data from back-end data.error', data.error);
      //   // console.log('data from back-end data', data);
      //   return data.error;
      //   // get error message from body or default to response status
      //   // const error = (data && data.message) || response.status;
      //   // return Promise.reject(error);
      // }

      // console.log('data from back-end response.status', response.status);
      // console.log('data from back-end data.message', data.message);
      // console.log('data from back-end data', data);
      // return data.message;

      // check for error response

      // this.setState({ postId: data.id });
    })
    .catch((error) => {
      // this.setState({ errorMessage: error.toString() });
      console.error('There was an error!', error);
    });
}

// postSignup('https://example.com/answer', { answer: 42 }).then((data) => {
//   console.log(data); // JSON data parsed by `data.json()` call
// });

export { postSignup };
