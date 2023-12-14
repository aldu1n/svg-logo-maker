// Imported inquirer and additional prompt option that allows to set limit for max length. 
const inquirer = require('inquirer');
const MaxLengthInputPrompt = require('inquirer-maxlength-input-prompt');
inquirer.registerPrompt('maxlength-input', MaxLengthInputPrompt);

// Imported fs to be able to write and read files.
const fs = require('fs');

// Imported object constructors from shapes.js file.
const { Circle, Triangle, Square } = require('./lib/shapes.js');


function init() {

// Inquirer prompt with the questions for logo.svg options.
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
      name: 'textcolor',
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
      name: 'shapecolor',
      message: 'Provide shape color for the logo (enter color keyword or hexadecimal number)',
    }
  ])
  // Based on shape selection, new object of selected shape will be created and written to the file.
  .then((answers) => {
    if (answers.shape === 'Circle') {
        const newCircle = new Circle(answers.text, answers.textcolor, answers.shapecolor);
        fs.writeFile('./examples/logo.svg', newCircle.generateSVG(), (err) =>
        err ? console.error(err) : console.log('Generated logo.svg')
        );
    }

    else if (answers.shape === 'Triangle') {
        const newTriangle = new Triangle(answers.text, answers.textcolor, answers.shapecolor);
        fs.writeFile('./examples/logo.svg', newTriangle.generateSVG(), (err) =>
        err ? console.error(err) : console.log('Generated logo.svg')
        );
    }

    else if (answers.shape === 'Square') {
        const newSquare = new Square(answers.text, answers.textcolor, answers.shapecolor);
        fs.writeFile('./examples/logo.svg', newSquare.generateSVG(), (err) =>
        err ? console.error(err) : console.log('Generated logo.svg')
        );
    }
  })
}

init();