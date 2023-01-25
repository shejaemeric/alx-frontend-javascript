function handleResponseFromAPI(promise) {
// function to return a promise
  promise
    .then((result) => result)
    .catch(() => new Error())
    .then(() => console.log('Got a response from the API'));
}

export default handleResponseFromAPI;
