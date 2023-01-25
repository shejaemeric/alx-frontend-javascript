function getFullResponseFromAPI(success) {
  // function to return a promise
  const promise = new Promise((resolve, reject) => {
    if (success) resolve({ status: 200, message: 'Success' });
    else reject(new Error('The fake API is not working currently'));
  });
  return promise;
}

export default getFullResponseFromAPI;
