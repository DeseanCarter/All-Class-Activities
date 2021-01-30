const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const 
const promptuser =() =>
inquirer.prompt([
    {
      type: 'input',
      message: 'What is your name?',
      name: 'name',
    },
    {
      type: 'input',
      message: 'Where is your location?',
      name: '',
    },
    {
      type: 'input',
      message: 'Enter a brief bio of yourself',
      name: '',
    },
  ])

  
//   .then((data) => {
//     const fileName = `${data.name.toLowerCase().split(' ').join('')}.json`;
//     fs.writeFile(fileName, JSON.stringify(data, null, '/t'), (err) => 
//     err ? console.log(err) : console.log('Success!') 
//     ) 
//     })

// //     const projectInq = `
// //   <div class="newProject">
// //    <h2>${inquirer.name}</h2>
// //    <p class="location">${inquirer.name}</p>
// //    <p class="biography">${inquirer.name}</p>
// //   </div>
// // `;
// console.log(projectInq)

// // fs.writeFile('log.txt', process.argv[2], (err) =>
// //   err ? console.error(err) : console.log('Success!')
// // );

// const element = document.getElementById("project");
// element.innerHTML = projectInq;
promptuser()
    .then((answers) => writeFileAsync("index.html", generateHTML(answers)))
    .then(() => console.log("Successfully wrote to index.html"))
    .catch((er) => console.error(err));
)