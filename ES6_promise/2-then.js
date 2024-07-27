/* global console */

export default function handleResponse(promise) {
    promise.then(() => {
      console.log('Got a response from the API'); // Fixed
    });
  }
  