const inquirer = require('inquirer');
const questions = require('./questions');
const readMe = require('./answers');

// Running CLI to create README
inquirer
  .prompt(questions)
  .then(answers => readMe(answers))
  .catch(err => { throw err });