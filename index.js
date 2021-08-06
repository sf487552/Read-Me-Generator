// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const axios = require("axios");


// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "What is your github username?",
        name: "username"
    },
    {
        type: "input",
        name: "email",
        message: "Please enter your email: "
    },
    {
        type: "input",
        message: "What is the title of your project?",
        name: "title"
    },
    {
        type: "input",
        message: "Please provide a breif Description of your project:",
        name: "description"
    },
    {
        type: "input",
        message: "What are the contents?",
        name: "table",
    },
    {
        type: "list",
        name: "license",
        message: "Chose the appropriate license for your project: ",
        choices: [
            "Apache",
            "Academic",
            "GNU",
            "ISC",
            "MIT",
            "Mozilla",
            "Open"
        ]
    },
    {
        type: "input",
        name: "tests",
        message: "Is there a test included?"
    },
    {
        type: "input",
        message: "Who is contributing? (please list contributors' github usernames separated by commas)",
        name: "contributing"
    },
    {
        type: "input",
        message: "Please write details of the testing procedures",
        name: "tests"
    }
];

// TODO: Create a function to write README file
function writeToFile(data) {
    console.log(data)
    
    let githubCont = data.contributing.split(',')
    let githubUser = [];
    githubCont.map(user=> githubUser.push(user.trim()))
    let githubUserStr = '';
    githubUser.map(user=>{
        githubUserStr+= `[${user}]('https://github.com/${user}') \n`
    })
    console.log(githubCont)
    
    let content = '';
    
    // data.fileTxt.map(stuff=>{
    //     content += `* [${stuff}](#${stuff.toLowerCase()}) \n \n`
    // })
    
    
    let license = data.license === 'MIT' ? "[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)]" : data.license === 'GNU' ? 
    "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]" : "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)]"
    
    let fileTxt = `
    # ${data.title}
    ${license}(${data.html_url})
    ## Description
    ​
    ${data.description}
    ​
    ## Table of Contents
    ${content}
    
    ## Installation
    ${data.installation}
    ​
    ## Usage
    ${data.usage}
    ​
    ## License
    This project is licensed under the ${data.license} license.
      
    ## Contributing
    ${githubUserStr}
    
    ## Tests
    npm test
   
    ## Questions

    <img src="${data.avatar_url}" alt="avatar" style="border-radius: 16px" width="30" />
    
    If you have any questions about the repo, open an issue or contact [${data.login}](${data.html_url}) directly at ${data.blog}.
    
    ## Author 
    <img alt="GitHub Profile Pic" src="${data.profilePic}">
   
    ## Badges
    
    ![](https://img.shields.io/github/repo-size/${data.username}/${data.repo})
    `

    
    fs.writeFile(`${data.title}.md`, fileTxt , function(err){
        if(err){
            console.log(err);
            throw err;
        }else{
            console.log('Success!')
        }
    })
    };

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then(response => {
            console.log(response)
            axios.get(`https://api.github.com/users/${response.username}`).then(data=>{
                writeToFile({...response, ...data.data})
            }).catch(err=>console.log(err))
        })
        .catch(err => console.log(err))
}

// Function call to initialize app
init();
