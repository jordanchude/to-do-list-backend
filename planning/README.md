# Project (Backend) Overview

## Project Link
- TBD

## Project (Frontend Overview)
- [Frontend Overview](https://github.com/jordanchude/to-do-list-frontend/blob/master/planning/README.md)

## Project Schedule

|  Day | Deliverable | Status
|---|---| ---|
|Day 1| Project Description | Complete
|Day 1| Priority Matrix / Backend Timeline | Complete
|Day 2| Working RestAPI | Complete
|Day 3| Working RestAPI & Frontend Communication | Complete
|Day 4| MVP & Bug Fixes | Complete
|Day 5| Final Touches and Present | Incomplete

## Project Description

For my unit 02 project, I am going to create a to-do list tracker for a company and its employees. For the backend, each user request will either create a new employee (with their name, title, and to-do items displayed), edit/update an employee, delete an employee, create a new to-do item for a specific employee, or delete a to-do item. As each employee or employee to-do is created, edited or updated on the webpage, it'll be sent to a backend server to update the relevant data and show the user an updated webpage to reflect the changes.

## User Stories
**Users are able to...**
- Use a responsive navigation bar on desktop, tablet, and mobile to navigate to the employee list, the section to add or update an employee, and the homepage.
- Scroll down to each added employee and their corresponding to-do list to stay updated on any changes.
- Use a form under the header/jumbotron to add an employee card with their name, title, photo for the top of their to-do list.
- After creating the employee, use a link on the employee card to add a to-do item.
- Press an edit button on each created card to edit the name, photo, and title of the specified employee.
- Press a delete button on each created card to remove a card when an employee is terminated.

## Google Sheet

- [Link](https://docs.google.com/spreadsheets/d/1DRhpnHYU-LVnRYKSALXm_xbMCZ3FsTs6Zl-VJ1MU49E/edit?usp=sharing)

## Time/Priority Matrix
- [Link](https://res.cloudinary.com/dpjdvsigb/image/upload/v1596721596/project-2-assets/backend-time-priority-matrix_bk6ciz.jpg)

## MVP (examples)
- Backend server and database to hold employee and to-do list data
- Functionality to add, remove, and update employee cards in database
- Functionality to add and remove employee to-do list in database
- Automatically update and serve backend data to match user frontend
- Deploy app to heroku

## PostMVP 
- Functionality to add another section, hobbies, to each employee card
- Functionality to add priority to each to-do and sort by priority

## Functional Components

#### MVP
|Letter | Component | Priority | Estimated Time | Time Invested |
| --- | --- | :---: |  :---: | :---: |
| A | Configure Server | H | 1hr | 1hr |
| B | Employee Schema and Model | H | 1hr | .5hr|
| C | Employee Route Handlers | H | 1hr | .5hr |
| D | Configure Seed Files | M | 1hr | 2hr |
| E | Employee Routes | H | 1hr| 1hr |
| F | Connect to Employee Server/Test Endpoints | H | 4hr | 4hr |
| G | To-do List Schema and Model | H | 1hrs| .5hr |
| H | To-do List Router Handlers | H | 1hr | 1hr |
| I | To-Do List Routes | H | 1hr | .5hr |
| J | Connect to Server/Test To-Do List Endpoints | H | 4hr | 2hr |
| K | Functionality to Request Data & Populate Dom | H | 2hr | 6hr |
| L | Create: Grab Form Data & Submit Request | H | 2hr | 1hr |
| M | Delete: Send Request to Delete Data | H | 2hr | 1hr |
| N | Edit: Take Item Data and Populate Form | H | 2hr | .5hr |
| O | Update: Take Data from Edit Form & Submit Update Request | H | 2hr | 1.5hr |
| P | Debugging | H | 2hr | 3hr |
| Q | Documentation | M | 1hr | -hr |
| R | Deployment | H | 3hr | 1hr |
| -- | Total | -- | 32hrs| 27hrs |

#### PostMVP
|Letter | Component | Priority | Estimated Time | Time Invested |
| --- | --- | :---: |  :---: | :---: |
| S | Hobbies Schema and Model | L | 1hr | -hr|
| T | Hobbies Route Handlers | L | 1hr | -hr |
| U | Hobbies Routes | L | 1hr| -hr |
| V | Connect to Employee Server/Test Endpoints | L | 4hr | -hr |
| W	| Refactor | M | 2hr | -hr |
| X	| Add Due Dates to To Do Schema/Model | M | 1hr | -hr |
| Y	| Add Priority to To Do Schema/Model | M | 2hr | -hr |
| Z	| Sort Tasks by Priority | M | 2hr | -hr |
| -- | Total | -- | 9hrs | 0hrs |

## Additional Libraries
 - [Mongoose](https://mongoosejs.com/)
 - [Express](http://expressjs.com/)
 - [Dotenv](https://www.npmjs.com/package/dotenv)
 - [Morgan](https://www.npmjs.com/package/morgan)
 - [Nodemon](https://nodemon.io/#:~:text=Nodemon%20is%20a%20utility%20that,restart%20when%20your%20code%20changes.)
 - [Cors](https://www.npmjs.com/package/cors)

## Code Snippet

- The code snippet below creates an employee by making the user entry a new object and facilitating a post request to the server to add the object to the database.

```
const createEmployee = async () => {
    const newEmployee = {
        name: $('#nameinput').val(),
        title: $('#titleinput').val(),
        photo: $('#photoinput').val()
    }

    const response = await fetch(`${URL}`, {
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newEmployee)
    })

    $('#nameinput').val("")
    $('#titleinput').val("")
    $('#photoinput').val("")

    $employeeCard.empty();
    getEmployees();
}
```

## Issues and Resolutions

#### SAMPLE
- **ERROR**: Error. Cannot PUT.                       
- **RESOLUTION**: Removed a "/" in my fetch URL to the database.
