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
            message: "Describe the project."
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
            name: "license",
            message: "Please select the license under which your application is covered.",
            choices: ["MIT", "GNU GPL v3", "Apache 2.0", "ISC"]
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
        let licenseBadge

        switch (responses.license) {
            case "MIT":
                licenseBadge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
                break;
            case "GNU GPL v3":
                licenseBadge = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
                break;
            case "Apache 2.0":
                licenseBadge = "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
                break;
            case "ISC":
                licenseBadge = "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)";
                break;
            default:
                licenseBadge = "";
        };
        const readmeFile = generateReadme({...responses, licenseBadge: licenseBadge});
        console.log(readmeFile);

        fs.writeFile("README.md", readmeFile, (err) =>
            err ? console.err(err) : console.log("Success!")
        );
    });

const generateReadme = ({title, description, installation, usage, license, contributing, tests, github, email, licenseBadge}) =>

`# ${title}

${licenseBadge}

## Table of Contents
1. [Description](#description)
2. [Installation](#installation)
3. [Usage](#usage)
4. [License](#license)
5. [Contributing](#contributing)
6. [Tests](#tests)
7. [Questions](#questions)

## Description

${description}

## Installation

${installation}

## Usage

${usage}

## License

This application is covered under the ${license} license.

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