function handleResponseFromAPI(promise) {
// function to return a promise
  promise
    .then(() => ({
      status: 200,
      body: 'success',
    }))
    .catch(() => new Error())
    .then(() => console.log('Got a response from the API'));
}

export default handleResponseFromAPI;
