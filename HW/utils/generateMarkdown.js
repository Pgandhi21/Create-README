// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    switch (license) {
        case "MIT":
            return `![MIT Badge](https://img.shields.io/badge/License-MIT-yellow.svg "MIT Badge")`;
        case "APACHE 2.0":
            return `![APACHE 2.0 Badge](https://img.shields.io/badge/License-Apache%202.0-blue.svg "APACHE 2.0 Badge")`;
        case "GPL 3.0":
            return `![GPL 3.0 Badge](https://img.shields.io/badge/License-GPLv3-blue.svg "GPL 3.0 Badge")`;
        case "BSD 3":
            return `![BSD 3 Badge](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg "BSD 3 Badge")`;
        case "None":
            return ``;
    }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    switch (license) {
        case "MIT":
            return `Licensed by [MIT](https://opensource.org/licenses/MIT)`;
        case "APACHE 2.0":
            return `Licensed by [APACHE 2.0](https://opensource.org/licenses/Apache-2.0)`;
        case "GPL 3.0":
            return `Licensed by [GPL 3.0](https://www.gnu.org/licenses/gpl-3.0)`;
        case "BSD 3":
            return `Licensed by [BSD 3](https://opensource.org/licenses/BSD-3-Clause)`;
        case "None":
            return ``;
    }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
return `
# ${data.title}
          
${renderLicenseBadge(data.license)}

## Description
${data.description}
          
          
## Table of Contents
-  [Installation](#installation)  
-  [Usage](#usage)  
-  [License](#license)  
-  [Contributors](#contributors)  
-  [Tests](#tests)  
-  [Questions](#questions)  
              
          
## Installation  
${data.installation}  
            
          
## Usage  
${data.usage}  
            
          
## License  
${renderLicenseLink(data.license)}  
            
          
## Contributors  
${data.contributing}  
            
          
## Tests   
${data.tests}  
            
          
## Questions  
${(data.github) ? `Please contact me on Github at [${data.github}](https://github.com/${data.github}) if you have any questions` : ""}    
          
${(data.email) ? `Please contact me on Github at [${data.email}](${data.email}) if you have any questions` : ""}   

`;
}

module.exports = generateMarkdown;
