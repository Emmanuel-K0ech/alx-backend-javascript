export default function getFullResponseFromAPI(success) {
  return new Promise((resolve, reject) => {
    const returnObject = {
      status: 200,
      body: 'Success',
    };

    if (success === true) {
      resolve(returnObject);
    } else {
      reject(new Error('The fake API is not working currently'));
    }
  });
}
