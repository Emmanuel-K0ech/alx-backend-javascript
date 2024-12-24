const express = require('express');

const app = express();
const PORT = process.env.PORT || 1245;

app.get('/', (_, res) => {
  res.send('Hello Holberton School!');
});

app.use((req, res) => {
  res.status(404).send('Page not found!');
});

app.use((err, req, res) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

app.listen(PORT, () => {
  console.log(`Server listening on PORT ${PORT}`);
});

module.exports = app;
