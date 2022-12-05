// Import the dependencies required for the application
// Inquirer will allow the application to prompt the user for information
// File System allows the application to create the new markdown file
// generateMarkdown is the file that holds the template for the markdown and the logic to add the user's responses
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// This is the array of questions that the user will be asked.
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
    // This prompt will ask the user to choose from a list instead of typing a response
    {
        type: 'list',
        message: 'Which GitHub license does the project have?',
        name: 'license',
        choices: ['MIT License', 'Apache 2.0', 'ISC License', 'BSD 3-Clause', 'BSD 2-Clause', 'Creative Commons Zero', 'GNU GPL v3', 'None']
    },
    {
        type: 'text',
        message: 'What is your GitHub username?',
        name: 'github'
    }
];

// This function takes the content from the user responses and creates the file with an approprite filename
function writeToFile(fileName, data) {

    fs.writeFile(`./public/${fileName}.md`, data, (err) =>
    err ? console.log(err) : console.log(`Successfully created ${fileName}!`)
  );
}

// This function tells the application to promt the user for responses then generate the markdown file.
function init() {
    inquirer
        .prompt(questions)
        .then((res) => writeToFile(res.title, generateMarkdown(res)))
};

// This is the code that calls the application to run when the user initializes it
init();
