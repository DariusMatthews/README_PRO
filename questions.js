module.exports =
  [
    {
      type: 'input',
      name: 'title',
      message: 'What is your project title?',
      default: 'Project'
    },
    {
      type: 'input',
      name: 'desc',
      message: 'Write your description',
    },
    {
      type: 'input',
      name: 'install',
      message: 'Write installation instructions'
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Provide examples for use'
    },
    {
      type: 'list',
      name: 'license',
      message: 'Choose a license',
      choices: [
        'MIT', 'ISC', 'GPLv3'
      ],
      default: 'MIT'
    },
    {
      type: 'input',
      name: 'contributing',
      message: 'Who is contributing?'
    },
    {
      type: 'input',
      name: 'github',
      message: 'Enter your github username'
    },
    {
      type: 'input',
      name: 'email',
      message: 'Enter your email'
    }
  ];