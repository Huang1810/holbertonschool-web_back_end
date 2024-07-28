import handleResponseFromAPI from './path/to/your/module.js';

const somePromise = new Promise((resolve, reject) => {
  // Simulate a successful API call
  setTimeout(resolve, 1000);
});

handleResponseFromAPI(somePromise)
  .then((response) => {
    console.log(response.message); // Logs: Got a response from the API
    // Handle the rest of the response
  })
  .catch((error) => {
    console.log(error.message); // Logs: Got a response from the API
    // Handle the error
  });
