const fs = require('fs');
const path = require('path');

// Generating README
const readMe = ({ title, desc, install, usage, contributing, license, github, email }) => {
  let sheild = '';
  // get different shield based on license
  if (license === 'GPLv3') {
    sheild = '[![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)](http://www.gnu.org/licenses/lgpl-3.0)';
  } else if (license === 'MIT') {
    sheild = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
  } else if (license === 'ISC') {
    sheild = '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)';
  }

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
  fs.writeFileSync(path.join(`${__dirname}/created`, 'README.md'), content, err => {
    if (err) throw err;
    console.log('README Created!');
  });
}

module.exports = readMe;