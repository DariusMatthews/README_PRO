const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const questions = require('./questions');


inquirer
  .prompt(questions)
  .then(answers => console.log(answers))
  .catch(err => { throw err });