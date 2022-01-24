# __

#### By _**{List of contributors}**_

#### _{Brief description of application}_

## Technologies Used

* _List all_
* _the major technologies_
* _you used in your project_
* _here_

## Description

_{This is a detailed description of your application. Give as much detail as needed to explain what the application does as well as any other information you want users or other developers to have.}_

## Setup/Installation Requirements

* _This is a great place_
* _to list setup instructions_
* _in a simple_
* _easy-to-understand_
* _format_

_{Leave nothing to chance! You want it to be easy for potential users, employers and collaborators to run your app. Do I need to run a server? How should I set up my databases? Is there other code this application depends on? We recommend deleting the project from your desktop, re-cloning the project from GitHub, and writing down all the steps necessary to get the project working again.}_

## Specifications

Describe Task()
Test: It should create a task object
Code:
let task1 = new Task("task description","due date",["task owner1", "task owner2"],"off")
task1;
Output: Task {description: 'task description', dueDate: 'due date', owners: Array(2), isComplete: 'off'}

Describe: List()
Test: It should create a list of tasks object and assignId
Code:
let list = new List()
list      
Output: List {tasks: {…}, currentId: 0}

Describe: List.prototype.assignId(currentId)
Test: It should assign an incremental ID to tasks stored in a List
Code:
let list = new List()
list.assignId()
Output: 1.....2.....3

Describe List.Prototype.addTask()
Test: It should add a task to a list.
Code:
let list = new List()
let task1 = new Task("task description","due date",["task owner1", "task owner2"],"off")
task1;
list.addTask(task1);
list.tasks;
Output: 1: Task {description: 'task description', dueDate: 'due date', owners: Array(2), isComplete: 'off'' id: 1}

## Known Bugs

* _Any known issues_
* _should go here_

## License

_{Let people know what to do if they run into any issues or have questions, ideas or concerns.  Encourage them to contact you or make a contribution to the code.}_

Copyright (c) _date_ _author name(s)_