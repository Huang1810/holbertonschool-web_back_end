export default function getResponseFromAPI() {
    return new Promise((resolve) => {
      // Simulating an asynchronous operation
      setTimeout(() => {
        resolve('Success');
      }, 1000);
    });
  }
  