// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let license = data.license === 'MIT' ? "[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)]" : data.license === 'GNU' ? 
"[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]" : "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)]"

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # Project Title : ${data.title}
  ## Project Description: ${data.desc}
  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributing](#contributing)
  * [Test](#test)
  * [Questions](#questions)
  * [License](#license)
  * [Author] (#Author)
  * [Badges](#badges)
  ## Installation
  ${data.install}
  ## Usage
  ${data.usage}
  ## Contributors
  ${data.contributors}
  ## Test
  ${data.test}
  ## Questions
  If you have any questions, contact ${data.username} on GitHub.

  ## Author 
  ![GitHub profile pic](${data.image})
  ## Badges
  ![badmath](https://img.shields.io/github/repo-size/${data.username}/${data.repo})
  `;
  }
  
  module.exports = generateMarkdown;

