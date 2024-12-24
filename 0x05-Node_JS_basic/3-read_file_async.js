const fs = require('fs');
const { promisify } = require('util');

const readFileAsync = promisify(fs.readFile);

/**
 * Counts the students in a CSV data file.
 * @param {String} csvPath The path to the CSV data file.
 * @returns {Promise<void>} Resolves when counting is complete, or rejects with an error.
 */
const countstds = async (csvPath) => {
  try {
    const data = await readFileAsync(csvPath, 'utf-8');
    const fileLines = data.trim().split('\n');
    const stdGroups = {};
    const dbFieldNames = fileLines[0].split(',');
    const stdPropNames = dbFieldNames.slice(0, dbFieldNames.length - 1);

    for (const line of fileLines.slice(1)) {
      const stdRecord = line.split(',');
      const stdPropValues = stdRecord.slice(0, stdRecord.length - 1);
      const field = stdRecord[stdRecord.length - 1];

      if (!stdGroups[field]) {
        stdGroups[field] = [];
      }

      const stdEntries = stdPropNames.map((propName, idx) => [
        propName,
        stdPropValues[idx],
      ]);
      stdGroups[field].push(Object.fromEntries(stdEntries));
    }

    const totalstds = Object.values(stdGroups).reduce((sum, group) => sum + group.length, 0);
    console.log(`Number of students: ${totalstds}`);
    for (const [field, group] of Object.entries(stdGroups)) {
      const stdNames = group.map((std) => std.firstname).join(', ');
      console.log(`Number of students in ${field}: ${group.length}. List: ${stdNames}`);
    }
  } catch (err) {
    throw new Error('Cannot load the database');
  }
};

module.exports = countstds;
