# 0x01. ES6 Promises

## Resources
Read or watch:

- [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
- [JavaScript Promise: An introduction](https://developers.google.com/web/fundamentals/primers/promises)
- [Await](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await)
- [Async](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function)
- [Throw / Try](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch)

## Learning Objectives
By the end of this project, you should be able to explain the following concepts to anyone, without needing to search online:

- **Promises**: What are they, why are they used, and how to use them.
- Using `then`, `resolve`, and `catch` methods.
- How to use every method available on the `Promise` object.
- **Throw / Try**: How they work in JavaScript error handling.
- The `await` operator.
- How to use `async` functions effectively.

## Requirements
- All files will be executed on Ubuntu 18.04 LTS using NodeJS 12.11.x.
- Use allowed editors like `vi`, `vim`, `emacs`, or Visual Studio Code.
- All files must end with a new line.
- A `README.md` file in the project folder is mandatory.
- Your code should use the `.js` file extension.
- Your code will be tested using Jest with the command `npm run test`.
- Your code will be verified using ESLint.
- All functions must be exported.

## Setup

### Install NodeJS 12.11.x
Run the following commands in your home directory to install NodeJS:

```bash
curl -sL https://deb.nodesource.com/setup_12.x -o nodesource_setup.sh
sudo bash nodesource_setup.sh
sudo apt install nodejs -y
nodejs -v
# Expected output: v12.11.1
npm -v
# Expected output: 6.11.3
```

### Install Jest, Babel, and ESLint
In your project directory, install Jest, Babel, and ESLint by using the supplied `package.json` file:

```bash
npm install
```

## Configuration Files

### `package.json`
```json
{
  "scripts": {
    "lint": "./node_modules/.bin/eslint",
    "check-lint": "lint [0-9]*.js",
    "dev": "npx babel-node",
    "test": "jest",
    "full-test": "./node_modules/.bin/eslint [0-9]*.js && jest"
  },
  "devDependencies": {
    "@babel/core": "^7.6.0",
    "@babel/node": "^7.8.0",
    "@babel/preset-env": "^7.6.0",
    "eslint": "^6.4.0",
    "eslint-config-airbnb-base": "^14.0.0",
    "eslint-plugin-import": "^2.18.2",
    "eslint-plugin-jest": "^22.17.0",
    "jest": "^24.9.0"
  }
}
```

### `babel.config.js`
```js
module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
        },
      },
    ],
  ],
};
```

### `utils.js`
Use the following functions for tasks that require `uploadPhoto` and `createUser`.

```js
export function uploadPhoto() {
  return Promise.resolve({
    status: 200,
    body: 'photo-profile-1',
  });
}

export function createUser() {
  return Promise.resolve({
    firstName: 'Guillaume',
    lastName: 'Salva',
  });
}
```

### `.eslintrc.js`
```js
module.exports = {
  env: {
    browser: false,
    es6: true,
    jest: true,
  },
  extends: [
    'airbnb-base',
    'plugin:jest/all',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['jest'],
  rules: {
    'no-console': 'off',
    'no-shadow': 'off',
    'no-restricted-syntax': [
      'error',
      'LabeledStatement',
      'WithStatement',
    ],
  },
  overrides: [
    {
      files: ['*.js'],
      excludedFiles: 'babel.config.js',
    }
  ]
};
```

## Don’t forget to run:

```bash
npm install
```

## Response Data Format

- `uploadPhoto` returns a response in this format:

```json
{
  "status": 200,
  "body": "photo-profile-1"
}
```

- `createUser` returns a response in this format:

```json
{
  "firstName": "Guillaume",
  "lastName": "Salva"
}
```
