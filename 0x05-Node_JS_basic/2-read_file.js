const fs = require('fs');

/**
 * Counts the students in a CSV data file.
 * @param {String} csvPath The path to the CSV data file.
 */
const countstds = (csvPath) => {
  if (!fs.existsSync(csvPath)) {
    throw new Error(`Cannot load the database: File "${csvPath}" does not exist.`);
  }
  if (!fs.statSync(csvPath).isFile()) {
    throw new Error(`Cannot load the database: Path "${csvPath}" is not a file.`);
  }

  const fileLines = fs.readFileSync(csvPath, 'utf-8').trim().split('\n');
  const headers = fileLines[0].split(',');
  const stdPropNames = headers.slice(0, -1);

  const stdGroups = fileLines.slice(1).reduce((acc, line) => {
    const values = line.split(',');
    const stdData = Object.fromEntries(
      stdPropNames.map((name, idx) => [name, values[idx]]),
    );
    const field = values[values.length - 1];

    return {
      ...acc,
      [field]: [...(acc[field] || []), stdData],
    };
  }, {});

  const totalstds = Object.values(stdGroups).reduce((sum, group) => sum + group.length, 0);
  console.log(`Number of students: ${totalstds}`);

  for (const [field, group] of Object.entries(stdGroups)) {
    const stdNames = group.map((std) => std.firstname).join(', ');
    console.log(`Number of students in ${field}: ${group.length}. List: ${stdNames}`);
  }
};

module.exports = countstds;
