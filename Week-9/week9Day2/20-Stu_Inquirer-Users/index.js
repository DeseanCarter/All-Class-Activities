const inquirer = require('inquirer');
const fs = require("fs");

inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is your name?',
      name: 'name',
    },
    {
      type: 'input',
      message: 'What languages do you know?',
      name: 'languages',
    },
    {
      type: 'input',
      message: 'What is your preferred method of communication?',
      name: 'method',
    },
  ])
  .then((data) => {
  const fileName = `${data.name.toLowerCase().split(' ').join('')}.json`;
  fs.writeFile(fileName, JSON.stringify(data, null, '/t'), (err) => 
  err ? console.log(err) : console.log('Success!') 
  ) 
  })

// inquirer.writeFile('log.txt', JSON.stringify(process.argv[inquirer]), (err) =>
// err ? console.error(err) : console.log('Success!')
// );

// inquirer.appendFile('responses.txt', `${process.argv[2]}\n`, (err) =>
// err ? console.error(response) : console.log('Commit logged!')
// );
// response.method === response.password
// ? console.log('Success!')
// : console.log('You forgot your password already?!')