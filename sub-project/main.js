//const nodeFetch = require('node-fetch');

console.log('About to fetch a rainbow');

async function catchRainbow(){
  const response = await fetch('https://lh3.googleusercontent.com/proxy/yVj8JSHLCgcXW4umjfrRtYqQBdPevQ_L4Ff1rIwsrxPzm3g1BnUse6QTdWE-XN4qjszQj0NB4oVbB7dKT-gE7pmosIoN_1w');
  const blob = await response.blob();
  document.getElementById('rainbow').src = URL.createObjectURL(blob);
}
catchRainbow().then(response => {
  console.log('accomplished!!');
}).catch(err => {
  console.log('oops!!');
  console.error(err);
});

/*fetch('https://lh3.googleusercontent.com/proxy/yVj8JSHLCgcXW4umjfrRtYqQBdPevQ_L4Ff1rIwsrxPzm3g1BnUse6QTdWE-XN4qjszQj0NB4oVbB7dKT-gE7pmosIoN_1w').then(response => {
  console.log(response);
  return response.blob();
}).then(blob => {
  console.log(blob);
  document.getElementById('rainbow').src = URL.createObjectURL(blob);
});*/