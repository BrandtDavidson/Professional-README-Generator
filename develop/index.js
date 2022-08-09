// TODO: Include packages needed for this application
// Our dependincies can be run by entering the command % npm i 
// Our starting index file to run in node  
// We need inquirer for testing 
// requiring fs for write to file 
// importing our utilities that we can add (generateMarkdown here)
const inquirer = require("inquirer");
const fs = require('fs');
// Make sure to import the correct utlity being used 
const util = require('./utils/generateMarkdown');
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
    {
        message: 'Please enter the title for your project:',
        name: 'title'
    },
    {
        message: 'Enter a description for your project:',
        name: 'description'
    },
    {
        message: 'Enter any installation notes, or install instructions for your project:',
        name: 'installation'
    },
    {
        message: 'Enter any Usage related information for sharing your project:',
        name: 'usage',
    },
    {
        type: 'list',
        message: 'Please choose a license you would like to use with this project:',
        choices: ['MIT', 'Boost_1.0', 'Apache_2.0'],
        name: 'license'
    },
    {
        message: 'Enter the contribution guidelines for this project:',
        name: 'contributions'
    },
    {
        message: 'Enter any testing/test instructions required for this project:',
        name: 'test'
    },
    {
        message: 'Enter your Github Username',
        name: 'username'
    },
    {
        message: 'Enter an email address the public can contact you at:',
        name: 'email'
    },

];

// TODO: Create a function to write README file
// Where we need the fs import 
function writeToFile(data) {
    fs.writeFile('README.md', generateMarkdown(data),
    (err) => (err)
    ? console.log('Could not generate README.md, error occured')
    : console.log('README generated')
    )
};

// TODO: Create a function to initialize app
// Need to link inquirer here when the init() is called 
function init() {
    inquirer.prompt(questions)
    .then((data) => {
        writeToFile(data);
    })
};

// Function call to initialize app
init();
