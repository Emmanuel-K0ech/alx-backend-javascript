# 0x05. NodeJS Basics

## Resources
- [Node JS Getting Started](https://nodejs.org/en/docs/guides/getting-started-guide/)
- [Process API Documentation](https://nodejs.org/api/process.html)
- [Child Process](https://nodejs.org/api/child_process.html)
- [Express Getting Started](https://expressjs.com/en/starter/installing.html)
- [Mocha Documentation](https://mochajs.org/)
- [Nodemon Documentation](https://nodemon.io/)

---

## Learning Objectives
By the end of this project, you should be able to:

- Run JavaScript using NodeJS.
- Use NodeJS modules.
- Use specific NodeJS modules to read files.
- Use `process` to access command-line arguments and the environment.
- Create a small HTTP server using NodeJS.
- Create a small HTTP server using ExpressJS.
- Create advanced routes with ExpressJS.
- Use ES6 with NodeJS via `babel-node`.
- Use Nodemon to develop faster.

---

## Requirements
- **Editors:** `vi`, `vim`, `emacs`, or Visual Studio Code.
- **Environment:** All files will be interpreted/compiled on Ubuntu 18.04 LTS using NodeJS version 12.x.x.
- Files must end with a new line.
- A `README.md` file is mandatory at the root of the project folder.
- Use the `.js` file extension for all code.
- Code will be tested with Jest using the command `npm run test`.
- Code will be verified against lint rules using ESLint.
- All code must pass both tests and lint validation (`npm run full-test`).
- Functions/classes must be exported using the format: `module.exports = myFunction`.

---

## Provided Files

### `database.csv`
```csv
firstname,lastname,age,field
Johann,Kerbrou,30,CS
Guillaume,Salou,30,SWE
Arielle,Salou,20,CS
Jonathan,Benou,30,CS
Emmanuel,Turlou,40,CS
Guillaume,Plessous,35,CS
Joseph,Crisou,34,SWE
Paul,Schneider,60,SWE
Tommy,Schoul,32,SWE
Katie,Shirou,21,CS
```

### `package.json`
```json
{
  "name": "node_js_basics",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "lint": "./node_modules/.bin/eslint",
    "check-lint": "lint [0-9]*.js",
    "test": "./node_modules/mocha/bin/mocha --require babel-register --exit",
    "dev": "nodemon --exec babel-node --presets babel-preset-env ./server.js ./database.csv"
  },
  "author": "",
  "license": "ISC",
  "dependencies": {
    "chai-http": "^4.3.0",
    "express": "^4.17.1"
  },
  "devDependencies": {
    "babel-cli": "^6.26.0",
    "babel-preset-env": "^1.7.0",
    "nodemon": "^2.0.2",
    "eslint": "^6.4.0",
    "eslint-config-airbnb-base": "^14.0.0",
    "eslint-plugin-import": "^2.18.2",
    "eslint-plugin-jest": "^22.17.0",
    "chai": "^4.2.0",
    "mocha": "^6.2.2",
    "request": "^2.88.0",
    "sinon": "^7.5.0"
  }
}
```

### `babel.config.js`
```javascript
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

### `.eslintrc.js`
```javascript
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
    'max-classes-per-file': 'off',
    'no-underscore-dangle': 'off',
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
    },
  ],
};
```

---

## Setup
1. Install dependencies:
   ```bash
   npm install
   ```
2. Run lint checks:
   ```bash
   npm run check-lint
   ```
3. Run tests:
   ```bash
   npm run test
   ```
4. Start the server in development mode:
   ```bash
   npm run dev
   ```
