const express = require('express');
const cors = require('cors');

const app = express();
const port = 8080;

app.use(cors());

app.get('/', (req, res) => {
  res.json({ message: 'Hello from beanstalk!' });
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
