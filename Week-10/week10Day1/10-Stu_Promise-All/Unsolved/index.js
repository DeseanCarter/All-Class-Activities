const apiCallDurations = [3000, 4000, 5000, 6000];
const maxDuration = 9999;

const callAPI = (duration) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (duration >= maxDuration) {
        reject(new Error(`This request timed out!`));
      } else {
      resolve(`Response received: ${duration}ms`);
      }
    }, duration);
  });

const promises = [];

apiCallDurations.map((duration) => promises.push(callAPI(duration)));

console.log(`Promises array before the timeouts have finished: `, promises);

// TODO: Use Promise.all() to capture when the array of promises has been resolved or if any of them were rejected
Promise.all(promises)
.then((response) => console.log('Response from Promise.all():', response))
.catch((err) => console.error(err))