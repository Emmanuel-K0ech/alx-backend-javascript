const welcome = 'Welcome to Holberton School, what is your name?';
const namePrompt = 'Your name is:';
const closePrompt = 'This important software is now closing';
process.stdout.write(`${welcome}\n`);
process.stdin.setEncoding('utf8');
process.stdin.on('readable', () => {
  const input = process.stdin.read();
  if (input !== null) {
    process.stdout.write(`${namePrompt} ${input}`);
  }
});
process.stdin.on('end', () => {
  process.stdout.write(`${closePrompt}\n`);
});
