// TODO: Include packages needed for this application
const fs = require("fs");
// const inquirer = require("inquirer");
const { prompt } = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const util = require('util');




// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of Project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please describe your project:',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please enter instructions for installing the repository:',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please enter instructions for how to use the repository:',
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Please enter guidelines for developers how to contribute to the repository:',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Please write test for your application and provide examples on how to run them:',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose type of the license:',
        choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None'],
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please enter email  for contact:',
        
    },
    {
        type: 'input',
        name: 'github',
        message: 'Please enter github username for contact:',
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFile(fileName,data, (err) => {
        err ? console.log(err) : console.log("great");
    });
    //fs.writeFileSync(filename,data);
}

const writeFileAsync = util.promisify(writeToFile);

// TODO: Create a function to initialize app
async function init() {
  try {
    
    const response = await prompt(questions);

    const data = await writeFileAsync("README.md", generateMarkdown(response));
    console.log(data);
    console.log("README created successfully");
  } catch (error) {
    console.log(error);
    console.log("Uh Oh");
  }
}

// function init() {
//  inquirer.prompt(questions)
//  .then ((response) => {
//     writeToFile("README.md", generateMarkdown(response));
//  })
//  .catch((error) => {
//     error ? console.log(error): console.log("Yay!!")
//  })
// }

// Function call to initialize app
init();
