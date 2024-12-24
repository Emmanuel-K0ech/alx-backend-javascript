const http = require('http');

const PORT = process.env.PORT || 1245;
const HOST = process.env.HOST || 'localhost';

const app = http.createServer((_, res) => {
  const responseText = 'Hello Holberton School!';

  res.writeHead(200, {
    'Content-Type': 'text/plain',
    'Content-Length': Buffer.byteLength(responseText),
  });
  res.end(responseText);
});

app.listen(PORT, HOST, () => {
  console.log(`Server listening at -> http://${HOST}:${PORT}`);
});

module.exports = app;
