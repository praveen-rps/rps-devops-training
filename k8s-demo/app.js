const express = require('express');
const app = express();
const PORT = 8080;

app.get('/', (req, res) => {
  res.send('Hello Kubernetes from Docker Desktop!');
});

app.get('/post', (req, res) => {
  res.send('Hello Kubernetes post request is called..!');
});

app.get('/get', (req, res) => {
  res.send('Hello Kubernetes get request is called..!');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
