// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'text',
        message: 'What is the title of the project?',
        name: 'title'
    },
    {
        type: 'text',
        message: 'Write a description of the project',
        name: 'description'
    },
    {
        type: 'text',
        message: 'Describe how to install the project',
        name: 'installation'
    },
    {
        type: 'text',
        message: 'Describe how to use the project',
        name: 'usage'
    },
    {
        type: 'text',
        message: 'Outline the contribution guidelines of the project',
        name: 'contributing'
    },
    {
        type: 'text',
        message: 'Describe the tests for the project',
        name: 'tests'
    },
    {
        type: 'list',
        message: 'Which GitHub license does the project have?',
        name: 'license',
        choices: ['MIT License', 'Apache 2.0', 'ISC License', 'BSD 3-Clause', 'BSD 2-Clause', 'Creative Commons Zero', 'GNU GPL v3', 'None']
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

    fs.writeFile(`./public/${fileName}.md`, data, (err) =>
    err ? console.log(err) : console.log(`Successfully created ${fileName}!`)
  );
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((res) => writeToFile(res.title, generateMarkdown(res)))
};

// Function call to initialize app
init();
