const express = require('express');
const app = express();
app.get('/', (req, res) => {
  setTimeout(() => {
    res.send('Hello World!');
  }, 5000); // Simulate a 5-second delay
});
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
//The bug is that if you make multiple requests to the server before the first one is completed, only the last one will receive the response due to the fact that it will override the previous ones