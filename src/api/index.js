import responseData from './mockData';


export function callApi(endpoint) {
  const response = responseData[endpoint];
  const responseDelay = Math.floor(Math.random() * 1000);

  return new Promise((resolve, reject) => {
    setTimeout(() => response ? resolve(response) : reject(Error('Failed to load')), responseDelay);
  });
}
