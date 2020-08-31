const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');

// const questions = []

inquirer
  .prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is your project title?'
    }
  ])
  .then(answers => console.log(answers))
  .catch(err => { throw err });