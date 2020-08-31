const fs = require('fs');
const path = require('path');

// Generating README
const readMe = ({ title, desc, install, usage, contributing, license, github, email }) => {
  // get different shield based on license
  let sheild = '';
  if (license === 'GPLv3') {
    shield = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
  } else if (license === 'MIT') {
    shield = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
  } else {
    shield = '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)'
  }
  console.log(license, sheild);

  // README content
  const content = `# ${title}
  ${sheild}

  ## Description

  ${desc}

  ## Table of Contents

  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributions](#contributions)
  * [Questions](#questions)
  * [License](#license)
    
  ## Installation

  ${install}

  ## Usage

  ${usage}

  ## Contributors

  ${contributing}

  ## Questions

  Follow my [github](https://github.com/${github}).

  Email me [here](mailto:${email}?subject=[github-${github}]).

  ## License

  Licensed under the ${license} license.`

  // make Created Directory
  fs.mkdirSync(path.join(__dirname, 'created'), err => { if (err) throw err });

  // Create README.md file in Created folder
  fs.writeFile(path.join(`${__dirname}/created`, 'README.md'), content, err => {
    if (err) throw err;
    console.log('README Created!');
  });
}

module.exports = readMe;