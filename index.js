const fs = require('fs');
const inquirer = require('inquirer');

inquirer
    .prompt([
        {
            type: "input",
            name: "title",
            message: "What is the project's title?"
        },
      
        {
            type: "input",
            name: "description",
            message: "Describe the project in 3-5 sentences."
        },
  
        {
            type: "input",
            name: "installation",
            message: "How does the user install the application?"
        },

        {
            type: "input",
            name: "usage",
            message: "Succinctly describe how to use the application."
        },

        {
            type: "list",
            name: "liscense",
            message: "Please select the liscense under which your application is covered.",
            choices: ["liscence1", "liscence2", "liscence3", "liscence4"]
        },

        {
            type: "input",
            name: "contributing",
            message: "How does a developer go about contributiing to this project?"
        },

        {
            type: "input",
            name: "tests",
            message: "Describe how to test the application."
        },
        
        {
            type: "input",
            name: "github",
            message: "What is your GitHub username?"
        },

        {
            type: "input",
            name: "email",
            message: "What is your email address?"
        },
    ])
    .then((responses) => {
        const readmeFile = generateReadme(responses);
        console.log(readmeFile);

        fs.writeFile("README.md", readmeFile, (err) =>
            err ? console.err(err) : console.log("Success!")
        );
    });

const generateReadme = ({title, description, installation, usage, liscense, contributing, tests, github, email}) =>

`# ${title}

## Table of Contents
1. [Description](#description)
2. [Installation](#installation)
3. [Usage](#usage)
4. [Liscense](#liscense)
5. [Contributing](#contributing)
6. [Tests](#tests)
7. [Questions](#questions)

## Description

${description}

## Installation

${installation}

## Usage

${usage}

## Liscense

This application is covered under the ___ liscence.

## Contributing

${contributing}

## Tests

${tests}

## Questions

For any questions or comments, here is my contact information.
<br>
GitHub: https://github.com/${github}
<br>
Email address: ${email}`