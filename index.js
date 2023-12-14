// Imported inquirer and additional prompt option that allows to set limit for max length. 
const inquirer = require('inquirer');
const MaxLengthInputPrompt = require('inquirer-maxlength-input-prompt');
inquirer.registerPrompt('maxlength-input', MaxLengthInputPrompt);

//Imported fs to be able to write and read files.
const fs = require('fs');


const { Circle, Triangle, Square } = require('./shapes/shapes.js');


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
  .then((answers) => {
    console.log(answers);
    if (answers.shape === 'Circle') {
        const newCircle = new Circle(answers.text, answers.textcolor, answers.shapecolor);
        fs.writeFile('./examples/logo.svg', newCircle.generateSVG(), (err) =>
        err ? console.error(err) : console.log('Success!')
        );
        console.log(newCircle.generateSVG());
    }
    else if (answers.shape === 'Triangle') {
        const newTriangle = new Triangle(answers.text, answers.textcolor, answers.shapecolor);
        fs.writeFile('./examples/logo.svg', newTriangle.generateSVG(), (err) =>
        err ? console.error(err) : console.log('Success!')
        );
        console.log(newTriangle.generateSVG());
    }
    else if (answers.shape === 'Square') {
        const newSquare = new Square(answers.text, answers.textcolor, answers.shapecolor);
        fs.writeFile('./examples/logo.svg', newSquare.generateSVG(), (err) =>
        err ? console.error(err) : console.log('Success!')
        );
        console.log(newSquare.generateSVG());
    }
  })
}

init();




// WRITE TO FILE FUNCTION

// fs.writeFile('./examples/logo.svg', markdownFunctions.generateMarkdown(answers, badge, link), (err) =>
// err ? console.error(err) : console.log('Success!')
// );