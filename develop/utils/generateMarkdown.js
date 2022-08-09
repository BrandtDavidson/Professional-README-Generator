// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

// Need to return just the image of the license badge using template literals for the license argument being passed
function renderLicenseBadge(data) {
  if (data.license) {
    // Template literal for referencing the passed through data
    return `![${data.license}](https://img.shields.io/badge/License-${data.license}-blue.svg)`;
  } else {
    return '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// This function is already returning empty if no license
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
// Making the template for user input
function generateMarkdown(data) {
  //usabe in this scope for generating the markdown template

  // We need to generate Title, Description, ToI, Installating, Usage, License, Contributing, Tests, and Questions - (with user input from the node package)
  let license = renderLicenseBadge(data);
  return `
  

  # ${data.title}


  ## Description 
  ${data.description}

  
  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [Test](#test)
  - [Questions](#questions)
  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## License
  ${license}

  ## Contributing (Guidelines)
  ${data.contributions}

  ## Tests (Instructions)
  ${data.test}

  ## Questions
  ${data.username}

  Reach out to me on Github!: [GitHub](https://github.com/${data.username})
  How to reach me for additional questions: ${data.email}

`;
}

// Here is the export to import in another file (index.js)
module.exports = generateMarkdown;
