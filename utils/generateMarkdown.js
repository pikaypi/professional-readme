// This function takes the user's response about licences and generates a corresponding badge. If there is no licecse, an empty string is returned in place of a badge.
function renderLicenseBadge(license) {
  switch (license) {
    case 'MIT License':
      return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT`;

    case 'Apache 2.0':
      return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
    
    case 'ISC License':
      return `[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)`;

    case 'BSD 3-Clause':
      return `[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`;

    case 'BSD 2-Clause':
      return `[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)`;      
      
    case 'Creative Commons Zero':
      return `[![License: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)`;
      
    case 'GNU GPL v3':
      return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
    
    case 'Eclipse Public License 1.0':
      return `[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)`;
                                          
    default:
      return ''
  }
}

// This function fills the user's data into the readme template and returns a string containing the formatted content of the markdown file
function generateMarkdown(data) {
  return `# ${data.title}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Test](#tests)
- [Questions](#questions)

---
## Description
${data.description}

---
## Installation
${data.installation}

---
## Usage
${data.usage}

---
## Contributing
${data.contributing}

---
## Tests
${data.tests}

---
## Questions
[https://github.com/${data.github}](https://github.com/${data.github})

${renderLicenseBadge(data.license)}
`;
}

// This line exports the functions in this file to be used in the index.js file
module.exports = generateMarkdown;
