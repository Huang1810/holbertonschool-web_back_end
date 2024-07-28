export default function handleResponseFromAPI(promise) {
    return promise
      .then(() => {
        return { status: 200, body: 'success', message: 'Got a response from the API' };
      })
      .catch(() => {
        return { status: 'error', message: 'Got a response from the API' };
      });
  }
  