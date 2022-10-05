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
        .then((res) => generateMarkdown(res))
        .then((res) => writeToFile(res.title, res))
};

// Function call to initialize app
init();
