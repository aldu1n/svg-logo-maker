
const inquirer = require('inquirer');
const MaxLengthInputPrompt = require('inquirer-maxlength-input-prompt');
inquirer.registerPrompt('maxlength-input', MaxLengthInputPrompt);


function init() {
    
inquirer
  .prompt([
    {
      type: 'maxlength-input',
      name: 'text',
      maxLength: 3,
      message: 'Provide text for the logo (up to 3 characters)',
    },
    {
      type: 'input',
      name: 'text-color',
      message: 'Provide text color for the logo (enter color keyword or hexadecimal number)',
    },
    {
      type: 'list',
      name: 'shape',
      message: 'Choose a desired shape the logo',
      choices: [
        'Circle',
        'Triangle',
        'Square'
      ]
    },
    {
      type: 'input',
      name: 'shape-color',
      message: 'Provide shape color for the logo (enter color keyword or hexadecimal number)',
    }
  ])
  .then((answers) => {
    console.log(answers);
  })}

init();