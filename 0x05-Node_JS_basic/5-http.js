const http = require('http');
const fs = require('fs');

const PORT = process.env.PORT || 1245;
const HOST = process.env.HOST || 'localhost';
const DB_FILE = process.argv[2] || '';

/**
 * Counts the students in a CSV data file.
 * @param {String} csvPath The path to the CSV data file.
 *
 */
const countstds = (csvPath) => new Promise((resolve, reject) => {
  if (!csvPath) {
    return reject(new Error('Cannot load the database'));
  }

  fs.readFile(csvPath, 'utf-8', (err, data) => {
    if (err) {
      return reject(new Error('Cannot load the database'));
    }

    const lines = data.trim().split('\n');
    const headers = lines[0].split(',');
    const groups = {};
    const stdFields = headers.slice(0, -1);

    lines.slice(1).forEach((line) => {
      const values = line.split(',');
      const field = values.at(-1);
      const stdData = Object.fromEntries(stdFields.map((key, i) => [key, values[i]]));
      groups[field] = groups[field] || [];
      groups[field].push(stdData);
    });

    const totalstds = Object.values(groups).reduce((sum, group) => sum + group.length, 0);
    const report = [`Number of students: ${totalstds}`];

    for (const [field, stds] of Object.entries(groups)) {
      const names = stds.map((std) => std.firstname).join(', ');
      report.push(`Number of students in ${field}: ${stds.length}. List: ${names}`);
    }

    resolve(report.join('\n')); // Ensure a return value here
    // Optional, explicitly return undefined to avoid ESLint warning
  });
});

/**
 * Helper function to send HTTP responses.
 * @param {Object} res The HTTP response object.
 * @param {Number} statusCode The HTTP status code.
 * @param {String} message The response content.
 */
const sendResponse = (res, statusCode, message) => {
  const contentLength = Buffer.byteLength(message);
  res.writeHead(statusCode, {
    'Content-Type': 'text/plain',
    'Content-Length': contentLength,
  });
  res.end(message);
  // Optional, explicitly return undefined to avoid ESLint warning
};

const routes = {
  '/': (_, res) => {
    sendResponse(res, 200, 'Hello Holberton School!');
    // Added explicit return to avoid ESLint warning
  },
  '/students': (_, res) => {
    countstds(DB_FILE)
      .then((report) => {
        sendResponse(res, 200, `This is the list of our students\n${report}`);
        // Added explicit return to avoid ESLint warning
      })
      .catch((error) => {
        sendResponse(res, 500, `This is the list of our students\n${error.message}`);
        // Added explicit return to avoid ESLint warning
      });
    // Optional, explicit return for consistency
  },
};

const app = http.createServer((req, res) => {
  const routeHandler = routes[req.url];
  if (routeHandler) {
    routeHandler(req, res);
  } else {
    sendResponse(res, 404, 'Not Found');
  }
});

app.listen(PORT, HOST, () => {
  console.log(`Server listening at -> http://${HOST}:${PORT}`);
});

module.exports = app;
