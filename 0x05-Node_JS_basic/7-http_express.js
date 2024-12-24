const express = require('express');
const fs = require('fs');

const app = express();
const PORT = 1245;
const DB_FILE = process.argv.length > 2 ? process.argv[2] : '';

/**
 * Counts the students in a CSV data file.
 * @param {String} csvPath The path to the CSV data file.
 */
const countstds = (csvPath) => new Promise((resolve, reject) => {
  if (!csvPath) {
    return reject(new Error('Cannot load the database'));
  }

  fs.readFile(csvPath, 'utf-8', (err, data) => {
    if (err) {
      return reject(new Error('Cannot load the database'));
    }

    const reportParts = [];
    const fileLines = data.trim().split('\n');
    const stdGroups = {};
    const dbFieldNames = fileLines[0].split(',');
    const stdPropNames = dbFieldNames.slice(0, dbFieldNames.length - 1);

    fileLines.slice(1).forEach((line) => {
      const stdRecord = line.split(',');
      const stdPropValues = stdRecord.slice(0, stdRecord.length - 1);
      const field = stdRecord[stdRecord.length - 1];
      stdGroups[field] = stdGroups[field] || [];
      const stdEntries = stdPropNames.map((propName, idx) => [
        propName,
        stdPropValues[idx],
      ]);
      stdGroups[field].push(Object.fromEntries(stdEntries));
    });

    const totalstds = Object.values(stdGroups).reduce(
      (pre, cur) => pre + cur.length, 0,
    );
    reportParts.push(`Number of students: ${totalstds}`);
    Object.entries(stdGroups).forEach(([field, group]) => {
      reportParts.push(`Number of students in ${field}: ${group.length}. List: ${group.map((std) => std.firstname).join(', ')}`);
    });

    resolve(reportParts.join('\n'));
  });
});

app.get('/', (_, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', async (_, res) => {
  const responseParts = ['This is the list of our students'];

  try {
    const report = await countstds(DB_FILE);
    responseParts.push(report);
    res.status(200).send(responseParts.join('\n'));
  } catch (err) {
    responseParts.push(err.message || 'Error occurred');
    res.status(500).send(responseParts.join('\n'));
  }
});

app.listen(PORT, () => {
  console.log(`Server listening on PORT ${PORT}`);
});

module.exports = app;
