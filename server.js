const db = require('./db/connection');
const inquirer = require('inquirer'); 
require('console.table'); 

async function start() {
  try {
    console.log('start function called');
    // Prompt the user to select a choice from the list
    const response = await inquirer.prompt([
      {
        type: 'list',
        name: 'choice',
        message: 'What would you like to see/change?',
        choices: [
          'view all departments',
          'view all roles',
          'view all employees',
          'add a department',
          'add a role',
          'add an employee',
          'update an employee role',
          'quit'
        ]
      }
    ]);

    console.log('User choice:', response.choice);

    if (response.choice === 'view all departments') {
      console.log('Calling viewD');
      // Calls the viewD function to display all departments if the choose 'veiw all dept'
      await viewD(); 

    } else if (response.choice === 'view all roles') {
      console.log('Calling viewR');
      // Calls the viewR function to display all roles if they choose 'veiw all roles'
      await viewR(); 

    } else if (response.choice === 'view all employees') {
      console.log('Calling viewE');
      // Calls the viewE function to display all employees if they choose 'veiw all employees'
      await viewE(); 

    } else if (response.choice === 'quit') {
      console.log('See you next time!');
      // Exits the program if the user chooses 'quit'
      process.exit(0); 

    } else {
      // Calls the start function if the user choice is invalid
      start(); 
    }

  } catch (error) {
    console.log('uh oh, you have errors');
    // Exits the program if an error occurs
    process.exit(1); 
  }
}

async function viewD() {
  console.log('viewD function called');
  const [results] = await db.promise().query('SELECT * FROM department;');
  // Displays the results of the query as a table in the console
  console.table(results); 
  // Calls the start function to to display the choices again
  start(); 
}

async function viewR() {
  console.log('viewR function called');
  const [results] = await db.promise().query('SELECT * FROM role;');
  console.table(results); 
  start();
}

async function viewE() {
  console.log('viewE function called');
  const [results] = await db.promise().query('SELECT * FROM employee;');
  console.table(results); 
  start(); 
}
// Starts the program by calling the function
start(); 
